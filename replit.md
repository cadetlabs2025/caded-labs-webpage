# Cadet Labs Webpage

## Overview

This is a production-ready full-stack web application for Cadet Labs, a maritime technology company specializing in AI-powered solutions and cybersecurity. The application is built as a Single Page Application (SPA) using React 18 with an integrated Express backend server. The site showcases the company's products, services, and expertise in maritime AI, cybersecurity, and digital transformation.

The application features multiple page designs (7+ homepage variations), product catalogs, service offerings, and contact forms. It's designed for deployment on Azure Static Web Apps with support for both development and production environments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework:** React 18 with TypeScript, using React Router 6 in SPA mode for client-side routing.

**Build Tool:** Vite for fast development and optimized production builds. The development server runs on port 5000 with Express middleware integration.

**UI Component System:** 
- Radix UI primitives for accessible, unstyled components
- TailwindCSS 3 for styling with custom oceanic/maritime theme
- Shadcn/ui component library (configured via `components.json`)
- Custom theme with HSL color variables defined in `global.css`

**State Management:**
- React Query (TanStack Query) for server state and data fetching
- React hooks for local component state
- Context API for toast notifications and tooltips

**Routing Strategy:**
- All routes defined in `client/App.tsx` using `BrowserRouter` and `Routes`
- Pages located in `client/pages/` directory
- Catch-all route for 404 handling
- Multiple homepage design variations (Index, IndexOption1-7)
- Core pages: Products, Services, About, Contact

**Design Approach:**
- Mobile-first responsive design
- Custom hook `use-mobile` for breakpoint detection (768px)
- Ocean/maritime themed color palette
- Typography using @tailwindcss/typography plugin

### Backend Architecture

**Server Framework:** Express 4.18 with TypeScript

**Development Mode:**
- Express runs as Vite middleware plugin (configured in `vite.config.ts`)
- API routes mounted at `/api/*`
- CORS enabled for cross-origin requests

**Production Build:**
- Separate server build configuration in `vite.config.server.ts`
- Server code compiled to ESM format targeting Node 22
- Static SPA files served from `dist/spa/` directory
- Server handles React Router fallback for client-side routing
- All non-API routes serve `index.html` for SPA navigation

**API Structure:**
- Routes defined in `server/routes/` directory
- Example endpoints: `/api/ping`, `/api/demo`
- JSON parsing and URL-encoded body parsing enabled
- API responses typed using shared interfaces

**Deployment Targets:**
- Azure Static Web Apps (primary, configured via `staticwebapp.config.json`)
- Netlify Functions support (serverless function in `netlify/functions/api.ts`)
- Generic Node.js server (`server/node-build.ts` for standalone deployment)

### Type Safety and Validation

**TypeScript Configuration:**
- Strict mode disabled for faster development
- Path aliases: `@/*` maps to `client/*`, `@shared/*` maps to `shared/*`
- Module resolution set to "bundler" for modern bundling
- Shared types between client and server in `shared/` directory

**Runtime Validation:**
- Zod library included for schema validation
- React Hook Form with Zod resolvers for form validation

### Testing

**Test Framework:** Vitest for unit testing
- Example test in `client/lib/utils.spec.ts`
- Test command: `npm run test`

### Build and Deployment

**Build Commands:**
- `npm run build` - Builds both client and server
- `npm run build:client` - Vite build for SPA (outputs to `dist/spa/`)
- `npm run build:server` - Server build for production (outputs to `dist/server/`)
- `npm run build:azure` - Alias for client build (Azure-specific)

**Production Server:**
- Entry point: `dist/server/production.mjs`
- Serves static files from `dist/spa/`
- Handles graceful shutdown on SIGTERM/SIGINT
- Port configured via `PORT` environment variable (default: 3000)

**Static Configuration:**
- Azure Static Web Apps config includes navigation fallback to `index.html`
- MIME types configured for common file extensions
- Cache-Control headers set for static assets (1 year max-age)
- Excluded file types bypass SPA routing (CSS, JS, images, fonts, PDFs)

## External Dependencies

### Core Framework Dependencies

**Frontend:**
- React 18.3 with react-dom
- React Router 6 for SPA routing
- @tanstack/react-query for data fetching and caching

**Backend:**
- Express 4.18 for HTTP server
- CORS middleware for cross-origin requests

**Build Tools:**
- Vite with @vitejs/plugin-react-swc (fast refresh using SWC compiler)
- TypeScript for type checking
- PostCSS with TailwindCSS and Autoprefixer

### UI Component Libraries

**Radix UI Components:**
- Accordion, AlertDialog, AspectRatio, Avatar, Checkbox, Collapsible
- ContextMenu, Dialog, DropdownMenu, HoverCard, Label
- Menubar, NavigationMenu, Popover, Progress, RadioGroup
- ScrollArea, Select, Separator, Slider, Switch, Tabs
- Toast, Toggle, ToggleGroup, Tooltip

**Other UI Libraries:**
- class-variance-authority for component variants
- clsx and tailwind-merge for className utilities
- cmdk for command palette
- embla-carousel-react for carousels
- input-otp for OTP inputs
- lucide-react for icons
- react-day-picker for date selection
- recharts for data visualization
- sonner for toast notifications
- vaul for drawers

### 3D Graphics (Optional)

- @react-three/fiber and @react-three/drei for Three.js integration (included but not actively used in current pages)

### Form Handling

- react-hook-form for form state management
- @hookform/resolvers for validation integration
- Zod for schema validation

### Development Tools

- Vitest for testing
- Prettier for code formatting (`.fix` script available)
- cpx for file copying during builds

### Deployment Infrastructure

**Azure Static Web Apps:**
- Configured for GitHub integration
- Custom build settings via `staticwebapp.config.json`
- Deployment guide in `azure-deployment-guide.md`

**Netlify:**
- Serverless function wrapper for Express app
- Alternative deployment target

No database is currently configured in this application. All content is static or would be fetched from external APIs through the Express backend.

## Recent Changes (December 2025)

### Bug Fixes Applied

1. **Vite Configuration**: Fixed port from 8080 to 5000 for Replit compatibility, added `allowedHosts: true` for proper webview access.

2. **Navigation Component**: Made `activeTab` and `onTabChange` props optional with React Router fallback. Navigation now works in two modes:
   - **Tab mode**: When props are passed (used by Index.tsx, Products.tsx) for internal tab switching
   - **Router mode**: When no props are passed (used by About.tsx, Contact.tsx, Services.tsx) for URL-based navigation
   
3. **Contact Form**: Added complete form functionality with:
   - Form state management using React useState
   - Input validation for required fields (First Name, Email, Message)
   - Submit handler with loading state
   - Toast notifications for success/error feedback
   - Form reset after successful submission

### Component Architecture Note

The Navigation component uses a `useSafeRouter` hook that gracefully handles cases where the Router context might not be available, providing fallback behavior for maximum compatibility.