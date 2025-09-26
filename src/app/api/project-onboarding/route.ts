import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createResponse } from '@/lib/utils/auth'
import { ProjectOnboardingSchema } from '@/lib/utils/validation'

export async function GET() {
  try {
    const projects = await prisma.projectOnboarding.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return createResponse(projects)
  } catch (error) {
    return createResponse({ error: 'Failed to fetch projects' }, 500)
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    
    // Validate request data
    const validated = ProjectOnboardingSchema.safeParse(data)
    if (!validated.success) {
      return createResponse({ error: validated.error.errors }, 400)
    }

    const project = await prisma.projectOnboarding.create({
      data: validated.data,
    })
    return createResponse(project, 201)
  } catch (error) {
    return createResponse({ error: 'Failed to create project' }, 500)
  }
}