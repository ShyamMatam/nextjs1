import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getDatabase } from "./mongodb";

const MAX_ATTEMPTS = 5;
const WINDOW_MINUTES = 15;

async function isRateLimited(db, username) {
  const since = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000);
  const attempts = await db.collection("login_attempts").countDocuments({
    username,
    createdAt: { $gte: since }
  });
  return attempts >= MAX_ATTEMPTS;
}

async function logFailedAttempt(db, username) {
  await db.collection("login_attempts").insertOne({
    username,
    createdAt: new Date()
  });
}

const authConfig = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        if (!username || !password) {
          return null;
        }

        try {
          const db = await getDatabase();

          // Rate limiting check
          if (await isRateLimited(db, username)) {
            console.log("Rate limit exceeded for:", username);
            throw new Error("Too many login attempts. Please try again later.");
          }

          const user = await db.collection("users").findOne({ username });
          if (!user) {
            await logFailedAttempt(db, username);
            return null;
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            await logFailedAttempt(db, username);
            return null;
          }

          // On successful login, optionally clear old attempts
          await db.collection("login_attempts").deleteMany({
            username,
            createdAt: { $lt: new Date(Date.now() - WINDOW_MINUTES * 60 * 1000) }
          });

          return {
            id: user._id.toString(),
            username: user.username,
            role: user.role,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.sub,
          username: token.username,
          role: token.role,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== "development",
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);