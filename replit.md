# Cadet Labs Webpage

## Overview
This project is a production-ready full-stack web application for Cadet Labs, a maritime technology company. It's a Single Page Application (SPA) built with React 18 and an Express backend. The application showcases the company's AI-powered solutions, cybersecurity, and digital transformation services, featuring various page designs, product catalogs, service offerings, and contact forms. It's designed for deployment on Azure Static Web Apps.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework:** React 18 with TypeScript, using React Router 6.
- **Build Tool:** Vite for development and optimized production builds.
- **UI Component System:** Radix UI primitives, TailwindCSS 3 (oceanic/maritime theme), Shadcn/ui.
- **State Management:** React Query for server state, React hooks for local state, Context API for notifications.
- **Routing:** Client-side routing with multiple homepage variations (Index, IndexOption1-7) and core pages (Products, Services, About, Contact).
- **Design:** Mobile-first responsive design, custom `use-mobile` hook, ocean/maritime color palette, typography using `@tailwindcss/typography`.
- **Animations:** Framer Motion for smooth transitions, with `useReducedMotion` hook for accessibility.
- **Theme:** Full dark mode support using CSS variables and Tailwind's `darkMode: ["class"]`, managed by `useTheme` hook with localStorage persistence.

### Backend
- **Server Framework:** Express 4.18 with TypeScript.
- **Development:** Express runs as Vite middleware; API routes at `/api/*`; CORS enabled.
- **Production:** Separate server build (Node 22 target); serves static SPA files from `dist/spa/`; handles React Router fallback.
- **API Structure:** Routes in `server/routes/`; JSON and URL-encoded body parsing; typed API responses.
- **Deployment:** Primarily Azure Static Web Apps; also supports Netlify Functions and generic Node.js server.

### Type Safety and Validation
- **TypeScript:** Strict mode disabled for faster development; path aliases; shared types in `shared/` directory.
- **Runtime Validation:** Zod for schema validation; React Hook Form with Zod resolvers for form validation.

### Testing
- **Framework:** Vitest for unit testing.

### Build and Deployment
- **Build Commands:** `npm run build` (client and server), `npm run build:client`, `npm run build:server`.
- **Production Server:** `dist/server/production.mjs` serves `dist/spa/` files.
- **Static Configuration:** `staticwebapp.config.json` for Azure, including navigation fallback and caching.

## External Dependencies

### Core Framework
- **Frontend:** React 18, react-dom, React Router 6, @tanstack/react-query.
- **Backend:** Express 4.18, CORS middleware.
- **Build Tools:** Vite, @vitejs/plugin-react-swc, TypeScript, PostCSS, TailwindCSS, Autoprefixer.

### UI Component Libraries
- **Radix UI:** A comprehensive set of accessible, unstyled components.
- **Utilities:** class-variance-authority, clsx, tailwind-merge.
- **Specialized UI:** cmdk (command palette), embla-carousel-react, input-otp, lucide-react (icons), react-day-picker, recharts, sonner (toast notifications), vaul (drawers).

### 3D Graphics
- @react-three/fiber, @react-three/drei (for Three.js integration, optional).

### Form Handling
- react-hook-form, @hookform/resolvers, Zod.

### Development Tools
- Vitest, Prettier, cpx.

### Deployment Infrastructure
- Azure Static Web Apps, Netlify.

*Note: No database is currently configured. Content is static or fetched from external APIs via the Express backend.*