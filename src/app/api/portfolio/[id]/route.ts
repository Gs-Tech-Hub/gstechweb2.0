import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { validatePortfolioData } from '@/lib/utils/validation';

interface RouteParams {
  params: {
    id: string;
  };
}

// GET /api/portfolio/[id] - Get a specific portfolio item
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const portfolioItem = await prisma.portfolio.findUnique({
      where: {
        id: params.id
      }
    });

    if (!portfolioItem) {
      return NextResponse.json({ error: 'Portfolio item not found' }, { status: 404 });
    }

    return NextResponse.json(portfolioItem);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch portfolio item' }, { status: 500 });
  }
}

// PUT /api/portfolio/[id] - Update a portfolio item
export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const data = await request.json();
    
    // Validate portfolio data
    const validationError = validatePortfolioData(data);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const portfolioItem = await prisma.portfolio.update({
      where: {
        id: params.id
      },
      data: {
        title: data.title,
        description: data.description,
        technologies: data.technologies,
        imageUrl: data.imageUrl,
        projectUrl: data.projectUrl,
        updatedAt: new Date()
      }
    });

    return NextResponse.json(portfolioItem);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update portfolio item' }, { status: 500 });
  }
}

// DELETE /api/portfolio/[id] - Delete a portfolio item
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    await prisma.portfolio.delete({
      where: {
        id: params.id
      }
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete portfolio item' }, { status: 500 });
  }
}