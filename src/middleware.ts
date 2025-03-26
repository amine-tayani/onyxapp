import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET, // Make sure to add your NextAuth secret
  });

  // Protected routes that require authentication
  const protectedRoutes = ['/user', '/settings', '/dashboard', '/profile'];

  // Authentication routes
  const authRoutes = ['/login', '/signup', '/register'];

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.includes(pathname);

  // Redirect unauthenticated users from protected routes to login
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Redirect authenticated users away from auth routes
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Continue with the request if no redirection is needed
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/user/:path*',
    '/settings/:path*',
    '/dashboard/:path*',
    '/profile/:path*',
    '/login',
    '/signup',
    '/register',
  ],
};
