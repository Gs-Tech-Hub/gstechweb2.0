import { NextResponse } from 'next/server';
import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import type { StringValue } from 'ms';
import { cookies } from 'next/headers';
import ms from 'ms';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    return null;
  }
};

export const generateToken = (payload: TokenPayload): string => {
  if (!JWT_SECRET) throw new Error('JWT_SECRET is not defined');
  return jwt.sign(payload, JWT_SECRET as Secret, {
    expiresIn: JWT_EXPIRES_IN as StringValue
  });
};

export const getAuthToken = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(process.env.COOKIE_NAME || 'gstech_auth');
  return token?.value || null;
};

export const getCurrentUser = async () => {
  const token = await getAuthToken();
  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload) return null;

  return payload;
};

export const isAuthenticated = async (): Promise<boolean> => {
  const token = await getAuthToken();
  if (!token) return false;

  const payload = verifyToken(token);
  return payload !== null;
};

export const hasRole = async (role: string): Promise<boolean> => {
  const token = await getAuthToken();
  if (!token) return false;

  const payload = verifyToken(token);
  return payload?.role === role;
};

export const isAdmin = async (): Promise<boolean> => {
  return hasRole('ADMIN');
};

export const createResponse = (data: any, status: number = 200) => {
  return NextResponse.json(data, { status });
};