import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { validateBlogData } from '../../../lib/utils/validation';

// GET /api/blogs - Get all blogs
export async function GET() {
  try {
    const blogs = await prisma.post.findMany({
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
    console.log(data)
    // Validate blog data
    const validationError = validateBlogData(data);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const blog = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        author: data.author,
        image: data.imageUrl,
        slug: data.slug,
        tags: data.tagLine
      }
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.log(error?.message, 'error message')
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}