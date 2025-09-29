# GsTechHub Website AI Agent Instructions

## Project Overview
This is a Next.js-based website for GsTechHub, a digital services company. The project uses Next.js 15.5, React 19.1, TailwindCSS, and Material-UI for the frontend.

## Key Architecture Patterns

### 1. App Router Structure
- Uses Next.js App Router (`src/app` directory)
- Each route is defined by a directory with a `page.js` file
- Dynamic routes use square brackets (e.g., `[id]` folders)
- Protected admin routes are in `src/app/Admin/*`

### 2. State Management
- Global state managed through React Context (`src/context/GlobalContext.js`)
- Blog and Portfolio data stored in `src/data/*.js` files
- Protected routes handled by `src/helper function/protectedRoute.js`

### 3. Component Architecture
- Reusable UI components in `src/components/`
- Page layout managed by `src/app/layout.js`
- Component naming uses PascalCase (e.g., `BlogCard.jsx`, `HeroSection.jsx`)

## Development Workflow

### Setup and Running
```bash
# Install dependencies (use exact versions)
npm install

# Development with Turbopack
npm run dev

# Production build
npm run build
npm start
```

### Project Conventions
1. **Routing**:
   - Public pages: Direct in `src/app/`
   - Admin pages: Under `src/app/Admin/`
   - Dynamic pages: Use `[id]` folders

2. **Components**:
   - Use `.jsx` extension for React components
   - Place in `src/components/`
   - Include proper prop types and client/server directives

3. **Styling**:
   - TailwindCSS for component styling
   - Global styles in `src/app/globals.css`
   - Material-UI components for complex UI elements

4. **Data Flow**:
   - Use `useGeneralContext()` hook for global state
   - Blog and portfolio data stored in `src/data/`
   - Third-party integrations (e.g., Tawk) in dedicated components

## Key Integration Points
- Tawk integration for chat (`src/components/Tawk.jsx`)
- Material-UI components for enhanced UI
- Image optimization through Next.js Image component
- SEO metadata in `layout.js` and page components

## Common Tasks
1. **Adding a New Page**:
   - Create directory in `src/app/`
   - Add `page.js` with proper metadata
   - Update navigation if needed

2. **Creating New Components**:
   - Add `.jsx` file in `src/components/`
   - Use existing components as reference
   - Follow component naming conventions

3. **Managing Data**:
   - Update `src/data/` files for static content
   - Use context for dynamic state
   - Follow existing data structures