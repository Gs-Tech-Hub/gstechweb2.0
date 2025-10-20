import { NextRequest } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { createResponse } from '../../../../lib/utils/auth'
import { ProjectOnboardingSchema } from '../../../../lib/utils/validation'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const project = await prisma.projectOnboarding.findUnique({
      where: { id: params.id },
    })

    if (!project) {
      return createResponse({ error: 'Project not found' }, 404)
    }

    return createResponse(project)
  } catch (error) {
    return createResponse({ error: 'Failed to fetch project' }, 500)
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await req.json()

    // Validate request data
    const validated = ProjectOnboardingSchema.safeParse(data)
    if (!validated.success) {
      return createResponse({ error: validated.error }, 400)
    }

    const project = await prisma.projectOnboarding.update({
      where: { id: params.id },
      data: validated.data,
    })

    return createResponse(project)
  } catch (error) {
    return createResponse({ error: 'Failed to update project' }, 500)
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.projectOnboarding.delete({
      where: { id: params.id },
    })
    return createResponse({ message: 'Project deleted successfully' })
  } catch (error) {
    return createResponse({ error: 'Failed to delete project' }, 500)
  }
}