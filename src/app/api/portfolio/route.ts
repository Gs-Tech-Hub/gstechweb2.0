import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { validatePortfolioData } from '@/lib/utils/validation';

// GET /api/portfolio - Get all portfolio items
export async function GET() {
  try {
    const portfolioItems = await prisma.portfolio.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(portfolioItems);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch portfolio items' }, { status: 500 });
  }
}

// POST /api/portfolio - Create a new portfolio item
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate portfolio data
    const validationError = validatePortfolioData(data);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const portfolioItem = await prisma.portfolio.create({
      data: {
        title: data.title,
        description: data.description,
        technologies: data.technologies,
        imageUrl: data.imageUrl,
        projectUrl: data.projectUrl,
      }
    });

    return NextResponse.json(portfolioItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create portfolio item' }, { status: 500 });
  }
}