import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Verify token helper function specific to middleware
function verifyAuthToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    // there is an  error here, need to check it out
    // it console.logs 'jwt malformed error' error
    console.log(error?.message, 'unable to verify authtoken')
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

    if (!token) {
      if (!cookieToken) {
        if (isAdminRoute) {
          // Redirect to login page for admin routes
          return NextResponse.redirect(new URL('/Admin', request.url));
        }
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      } else {
        // added this to the middleware to allow the routes to be accessed if there is a token in the cookie

        /*i thought the middleware would stop if there a token in the cookie because of the return statement 
        but it moves down to the try catch statement even when theres a token in the cookie regardless of the return statement */
        return NextResponse.next();
      }
    }
    // the code in this try catch block prevente me from updating or deleting a blog, it returns invalid token
    // the verifyAuthToken function gives an error
    // try {
    //   // verified returns the null
    //   const verified = verifyAuthToken(token);

    //   /* i added the 'verifiedCookie' below for cases where theres no token in the authorization header but theres token in the 
    //   request.cookie so we verify that instead */

    //   // verifiedCookie returns an error
    //   /* it  returns "the edge runtime does not support Node.js 'crypto' module.
    //  Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime" error  */
    //   const verifiedCookie = verifyAuthToken(cookieToken);
    //   console.log(verifiedCookie, 'cookie')

    //   if (!verified) {
    //     if (isAdminRoute) {
    //       return NextResponse.redirect(new URL('/Admin', request.url));
    //     }
    //     return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    //   }
    //   return NextResponse.next();
    // } catch (error) {
    //   if (isAdminRoute) {
    //     return NextResponse.redirect(new URL('/Admin', request.url));
    //   }
    //   return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/Admin/:path*'
  ]
}