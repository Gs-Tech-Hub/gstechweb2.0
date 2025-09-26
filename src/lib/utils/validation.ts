import { z } from 'zod'

export const ProjectOnboardingSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  contactPerson: z.string().min(1, 'Contact person is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Project type is required'),
  requirements: z.string().min(1, 'Requirements are required'),
  budget: z.number().optional(),
  timeline: z.string().optional(),
  notes: z.string().optional()
})

export const PostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  image: z.string().optional(),
  slug: z.string().min(1, 'Slug is required'),
  author: z.string().min(1, 'Author is required'),
  tags: z.array(z.string())
})

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required')
})

export const ServiceSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  icon: z.string().optional(),
  features: z.array(z.string())
})

export const PricingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  features: z.array(z.string()),
  serviceId: z.string().min(1, 'Service ID is required')
})

export const FunFactSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  value: z.number().int().min(0, 'Value must be a positive integer'),
  icon: z.string().optional()
})

export const PortfolioSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  image: z.string().min(1, 'Image is required'),
  category: z.string().min(1, 'Category is required'),
  clientName: z.string().optional(),
  projectUrl: z.string().optional(),
  tags: z.array(z.string())
})