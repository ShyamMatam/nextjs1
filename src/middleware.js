


// Middleware is a fundamental concept in web development.
//  It’s a function that sits between an incoming request and the final response,
//   allowing you to process, modify, or handle the request before it reaches its destination.


import { NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export function middleware(request) {
    // Check if the request has a token in cookies
  const token = request.cookies.get('token')?.value;

  if (!token) {
    // If no token is found, redirect to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }
    // Verify the token
  const decodedToken = verifyToken(token);
  if (!decodedToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
    // If the token is valid, allow the request to proceed
  return NextResponse.next();
}

export const config = {
    // Apply middleware to specific paths
  matcher: ['/dashboard/:path*', '/job/create'],
};