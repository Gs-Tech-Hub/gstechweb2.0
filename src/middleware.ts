import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// Note: avoid using `jsonwebtoken` in middleware because Next.js middleware
// runs in the Edge runtime which doesn't support Node builtin modules like
// crypto. Middleware will only perform a presence check for auth token
// (header or cookie) and let API route handlers perform full verification.

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public API routes that don't require authentication
  const publicApiPaths = [
    '/api/auth/login',
    '/api/auth/register',
    '/api/blogs',
    '/api/portfolio',
    '/api/project-onboarding'
  ];

  // Check if it's a request to public API endpoints (allow all methods)
  if (publicApiPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if it's an admin route or protected API route
  const isAdminRoute = pathname.startsWith('/Admin/');
  const isProtectedApiRoute = pathname.startsWith('/api/') &&
    !publicApiPaths.includes(pathname);

  if (isAdminRoute || isProtectedApiRoute) {
    // Get token from Authorization header
    const token = request.headers.get('authorization')?.split(' ')[1];

    // Get token from cookies if not in header
    const cookieToken = request.cookies.get('gstech_auth')?.value;
    // console.log(cookieToken, 'cookie')

    // If neither header token nor cookie token is present, block access.
    if (!token && !cookieToken) {
      if (isAdminRoute) {
        return NextResponse.redirect(new URL('/Admin', request.url));
      }
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Token is present in either Authorization header or cookie. Full
    // verification (signature, expiry) should be performed in the API route
    // handlers where Node runtime is available. Allow the request to proceed
    // so update/delete operations that verify server-side can run.
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/Admin/:path*'
  ]
}