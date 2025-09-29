import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { validateBlogData } from '@/lib/utils/validation';

// GET /api/blogs - Get all blogs
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

// POST /api/blogs - Create a new blog
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate blog data
    const validationError = validateBlogData(data);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const blog = await prisma.blog.create({
      data: {
        title: data.title,
        content: data.content,
        author: data.author,
        imageUrl: data.imageUrl,
      }
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}