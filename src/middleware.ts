import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { headers } from 'next/headers'
import { verifyToken } from '@/lib/utils/auth'

export async function middleware(request: NextRequest) {
  // Exclude public routes
  const publicPaths = ['/api/auth/login', '/api/auth/register']
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  const headersList = headers()
  const token = headersList.get('authorization')?.split(' ')[1]

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const verified = await verifyToken(token)
    if (!verified) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }
    return NextResponse.next()
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 401 })
  }
}

export const config = {
  matcher: '/api/:path*',
}