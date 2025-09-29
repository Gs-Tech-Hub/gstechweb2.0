# GsTechHub Website 2.0

A modern, full-stack website for GsTechHub built with Next.js, Prisma, and PostgreSQL.

## 🚀 Features

- Next.js 13+ with App Router
- Prisma ORM with PostgreSQL
- RESTful API endpoints
- Authentication and Authorization
- Project Onboarding System
- Blog Management
- Portfolio Showcase
- Service and Pricing Management
- Contact Form System
- Fun Facts Display

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gs-Tech-Hub/gstechweb2.0.git
   cd gstechweb2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/gstechweb"
   JWT_SECRET="your-secret-key"
   ```

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
├── prisma/
│   └── schema.prisma       # Database schema
├── src/
│   ├── app/               # Next.js 13+ App Router
│   │   ├── api/          # API routes
│   │   └── ...           # Page routes
│   ├── components/        # React components
│   ├── lib/              # Utility functions
│   │   ├── prisma.ts     # Prisma client
│   │   └── utils/        # Helper functions
│   └── middleware/        # Authentication middleware
└── public/               # Static files
```

## 📚 API Documentation

### Project Onboarding
- `GET /api/project-onboarding` - List all projects
- `POST /api/project-onboarding` - Create new project
- `GET /api/project-onboarding/[id]` - Get project details
- `PUT /api/project-onboarding/[id]` - Update project
- `DELETE /api/project-onboarding/[id]` - Delete project

### Blog Posts
- `GET /api/posts` - List all posts
- `POST /api/posts` - Create new post
- `GET /api/posts/[id]` - Get post details
- `PUT /api/posts/[id]` - Update post
- `DELETE /api/posts/[id]` - Delete post

### Services
- `GET /api/services` - List all services
- `POST /api/services` - Create new service
- `GET /api/services/[id]` - Get service details
- `PUT /api/services/[id]` - Update service
- `DELETE /api/services/[id]` - Delete service

### Pricing
- `GET /api/pricing` - List all pricing plans
- `POST /api/pricing` - Create new pricing plan
- `GET /api/pricing/[id]` - Get pricing details
- `PUT /api/pricing/[id]` - Update pricing
- `DELETE /api/pricing/[id]` - Delete pricing

### Portfolio
- `GET /api/portfolio` - List all portfolio items
- `POST /api/portfolio` - Create new portfolio item
- `GET /api/portfolio/[id]` - Get portfolio details
- `PUT /api/portfolio/[id]` - Update portfolio item
- `DELETE /api/portfolio/[id]` - Delete portfolio item

### Contact
- `GET /api/contacts` - List all contacts
- `POST /api/contacts` - Create new contact
- `GET /api/contacts/[id]` - Get contact details
- `PUT /api/contacts/[id]` - Update contact
- `DELETE /api/contacts/[id]` - Delete contact

### Fun Facts
- `GET /api/fun-facts` - List all fun facts
- `POST /api/fun-facts` - Create new fun fact
- `GET /api/fun-facts/[id]` - Get fun fact details
- `PUT /api/fun-facts/[id]` - Update fun fact
- `DELETE /api/fun-facts/[id]` - Delete fun fact

## 🔒 Authentication

All API routes are protected by JWT authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-token>
```

## 🧪 Data Validation

Request data is validated using Zod schemas. Each model has its own validation schema in `src/lib/utils/validation.ts`.

## 🛠️ Development

1. Create a new branch for your feature
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit
   ```bash
   git add .
   git commit -m "Add your feature"
   ```

3. Push to your branch
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request

## 📝 Environment Variables

- `DATABASE_URL`: PostgreSQL database connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `NODE_ENV`: Environment mode ('development' or 'production')

## 📦 Dependencies

- Next.js 13+
- Prisma
- PostgreSQL
- Zod
- jsonwebtoken
- TailwindCSS
- Material-UI

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details

## 👥 Authors

- GsTechHub Team

## 🙏 Acknowledgments

- Next.js Team
- Prisma Team
- And all contributors