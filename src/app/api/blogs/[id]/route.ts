import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { validateBlogData } from '../../../../lib/utils/validation';

interface RouteParams {
  params: {
    id: string;
  };
}

// GET /api/blogs/[id] - Get a specific blog
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: params.id
      }
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

// PUT /api/blogs/[id] - Update a blog
export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const data = await request.json();
    
    // Validate blog data
    const validationError = validateBlogData(data);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const blog = await prisma.post.update({
      where: {
        id: params.id
      },
      data: {
        title: data.title,
        content: data.content,
        author: data.author,
        image: data.imageUrl,
        updatedAt: new Date()
      }
    });

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

// DELETE /api/blogs/[id] - Delete a blog
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    await prisma.post.delete({
      where: {
        id: params.id
      }
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}