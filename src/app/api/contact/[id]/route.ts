import { NextRequest } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { createResponse } from '../../../../lib/utils/auth'
import { ContactSchema } from '../../../../lib/utils/validation'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id: params.id },
    })
    if (!contact) {
      return createResponse({ error: 'Contact not found' }, 404)
    }

    return createResponse({ message: contact })
  } catch (error) {
    return createResponse({ error: 'Failed to fetch contact' }, 500)
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await req.json()

    // Validate request data
    const validated = ContactSchema.safeParse(data)
    if (!validated.success) {
      return createResponse({ error: validated.error }, 400)
    }

    const contact = await prisma.contact.update({
      where: { id: params.id },
      data: validated.data,
    })

    return createResponse({ message: contact })
  } catch (error) {
    return createResponse({ error: 'Failed to update contact' }, 500)
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.contact.delete({
      where: { id: params.id },
    })

    return createResponse({ message: 'Contact deleted successfully' })
  } catch (error) {
    return createResponse({ error: 'Failed to delete contact' }, 500)
  }
}
