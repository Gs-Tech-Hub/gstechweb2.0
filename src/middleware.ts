import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Verify token helper function specific to middleware
function verifyAuthToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Public API routes that don't require authentication
  const publicApiPaths = [
    '/api/auth/login',
    '/api/auth/register',
    '/api/blogs',
    '/api/portfolio'
  ];

  // Check if it's a GET request to public API endpoints
  if (publicApiPaths.includes(pathname) && request.method === 'GET') {
    return NextResponse.next();
  }

  // Check if it's an admin route or protected API route
  const isAdminRoute = pathname.startsWith('/Admin');
  const isProtectedApiRoute = pathname.startsWith('/api/') &&
    (!publicApiPaths.includes(pathname) || request.method !== 'GET');

  if (isAdminRoute || isProtectedApiRoute) {
    // Get token from Authorization header
    const token = request.headers.get('authorization')?.split(' ')[1];

    // Get token from cookies if not in header
    if (!token) {
      const cookieToken = request.cookies.get('gstech_auth')?.value;
      if (!cookieToken) {
        if (isAdminRoute) {
          // Redirect to login page for admin routes
          return NextResponse.redirect(new URL('/login', request.url));
        }
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    try {
      const verified = verifyAuthToken(token);
      if (!verified) {
        if (isAdminRoute) {
          return NextResponse.redirect(new URL('/login', request.url));
        }
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
      }
      return NextResponse.next();
    } catch (error) {
      if (isAdminRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
      return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/Admin/:path*'
  ]
}