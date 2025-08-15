
// for docs visit pagepro/middleware

// Middleware is a fundamental concept in web development.
//  It’s a function that sits between an incoming request and the final response,
//   allowing you to process, modify, or handle the request before it reaches its destination.
// // In Next.js, middleware is used to run code before a request is completed.
// It can be used for various purposes, such as authentication, logging, or modifying the request
// it is used to intercept and control the flow of requests, responses in the application.

// import { NextResponse } from 'next/server';
// import { verifyToken } from './lib/auth';

// export function middleware(request) {
//     // Check if the request has a token in cookies
//   const token = request.cookies.get('token')?.value;

//   if (!token) {
//     // If no token is found, redirect to the login page
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
//     // Verify the token
//   const decodedToken = verifyToken(token);
//   if (!decodedToken) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
//     // If the token is valid, allow the request to proceed
//   return NextResponse.next();
// }

// export const config = {
//     // Apply middleware to specific paths
//   matcher: ['/dashboard/:path*', '/job/create'],
// };

// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

// export function middleware(request) {
//     //  cookies and headers
// const response = NextResponse.next();
// const themePreference = request.cookies.get('theme')?.value || 'light';
// if(!themePreference) {
//     response.cookies.set('theme', 'light');
// }

// response.headers.set('X-Custom-Header', 'MyValue');
// return response;

//     // return NextResponse.redirect(new URL('/', request.url));
//     // condition to check if the request is for /f1
//     // and redirect to /f1/f2
//     if (request.nextUrl.pathname === '/f1') {
//         // Intercept the request to /f1 and redirect to /f1/f2
//         // return NextResponse.redirect(new URL('/f1/f2', request.url));
//         // rewrite: new URL('/f1/f2', request.url)
//         return NextResponse.rewrite(new URL('/f1/f2', request.url));
//     }
// }

// it is for line 50
// export const config = {
//     // Apply middleware to specific paths
//     matcher: '/f1'
// };


console.log('🔥 MIDDLEWARE FILE EXECUTED AT STARTUP')
//test- middleware function

// export function middleware(request) {
//   console.log('🔥 MIDDLEWARE FUNCTION CALLED')
//   console.log('🔥 URL:', request.url)
//   console.log('🔥 PATHNAME:', request.nextUrl.pathname)
  
//   // Return a simple response to prove it's working
//   return new Response(JSON.stringify({
//     message: 'Middleware is working!',
//     url: request.url,
//     pathname: request.nextUrl.pathname
//   }), {
//     status: 200,
//     headers: { 'content-type': 'application/json' }
//   })
// }

// export const config = {
//   matcher: ['/test']
// }

//working Middleware example

import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';


// log
console.log('🔥 Middleware loaded for authentication and authorization');

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Public routes that don't require authentication
  const publicRoutes = [ '/login', '/favicon.ico'];
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check for auth token with secret
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET 
  });
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Admin routes check
  if (pathname.startsWith('/admin') && token.role !== 'admin') {
    return NextResponse.redirect(new URL('/market-insights', request.url));
  }

  // Protected routes check
  const protectedPrefixes = [
    '/dashboard',
    '/market-insights',
    '/company-profiles',
    '/industry-insights',
    '/news',
  ];
  // If the route is protected and the user is not authenticated, redirect to login
  if (protectedPrefixes.some(prefix => pathname.startsWith(prefix)) && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/market-insights/:path*',
    '/company-profiles/:path*',
    '/industry-insights/:path*',
    '/',
    '/login',
    '/news',
  ]
};