import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { validateLoginData } from '../../../../lib/utils/validation';
import { generateToken } from '../../../../lib/utils/auth';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate login data
    const validationError = validateLoginData(data);
    console.log(validationError, 'validationError')
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Verify password
    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    });

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set(
      process.env.COOKIE_NAME || 'gstech_auth',
      token,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 // 7 days
      }
    );

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}