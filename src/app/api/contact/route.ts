import { NextRequest } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { createResponse } from '../../../lib/utils/auth'
import { ContactSchema } from '../../../lib/utils/validation'

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return createResponse(contacts)
  } catch (error) {
    return createResponse({ error: 'Failed to fetch contacts' }, 500)
  }
}

export async function POST(req: NextRequest) {
  try {
    // Contact submissions should be allowed without authentication
    const data = await req.json()

    // Validate request data
    const validated = ContactSchema.safeParse(data)
    if (!validated.success) {
      return createResponse({ error: validated.error }, 400)
    }

    const contact = await prisma.contact.create({
      data: validated.data,
    })
    return createResponse(contact, 201)
  } catch (error) {
    return createResponse({ error: 'Failed to create contact' }, 500)
  }
}
