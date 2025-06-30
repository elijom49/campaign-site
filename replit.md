# JUMP for Senate Campaign Website

## Overview

This is a modern political campaign website for "JUMP" who is running for U.S. Senate. The application is built with a React frontend and Express backend architecture, designed for scalability and maintainability. The site features multiple pages including home, campaign platform, community engagement, volunteer opportunities, and candidate information.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom campaign theme colors
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Build System**: ESBuild for server-side bundling

### Development Environment
- **Platform**: Replit-optimized with cartographer plugin for development
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Error Handling**: Runtime error overlay for development debugging

## Key Components

### Pages Structure
1. **Home Page** (`/`) - Hero section with candidate introduction and call-to-action buttons
2. **Campaign Page** (`/campaign`) - Policy platform and issue positions
3. **Community Page** (`/community`) - Social media links, fundraising events, merchandise, and campaign updates
4. **About Page** (`/about`) - Candidate biography and detailed policy positions
5. **Volunteer Page** (`/volunteer`) - Volunteer signup form and opportunities

### Navigation System
- Responsive navigation with mobile hamburger menu
- Active page highlighting
- Sticky header design for consistent access

### UI Components
- Comprehensive component library from shadcn/ui
- Accessible form components with proper validation
- Toast notifications for user feedback
- Responsive design patterns throughout

## Data Flow

### Frontend Data Management
- TanStack Query handles API calls and caching
- React Hook Form manages form state with Zod schema validation
- Component-level state for UI interactions

### Backend API Structure
- RESTful API endpoints under `/api` prefix
- Centralized error handling middleware
- Request/response logging for debugging

### Database Schema
- User management system with authentication fields
- Drizzle ORM provides type-safe database operations
- PostgreSQL for reliable data persistence

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets for social media

### Development Tools
- **Drizzle Kit**: Database schema management and migrations
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Tailwind integration

### Campaign-Specific Integrations
- **ActBlue**: External donation platform integration
- **Social Media**: Links to TikTok, LinkedIn, YouTube platforms
- **Volunteer Management**: Form-based volunteer recruitment system

## Deployment Strategy

### Build Process
1. Frontend builds to `dist/public` directory via Vite
2. Backend bundles to `dist/index.js` via ESBuild
3. Static assets served from build output

### Environment Configuration
- Database URL configuration via environment variables
- Development vs production environment detection
- Replit-specific optimizations for hosted deployment

### Database Management
- Drizzle migrations for schema changes
- Connection pooling via Neon serverless database
- Session storage in PostgreSQL for user management

## Changelog
- June 27, 2025. Initial setup
- June 27, 2025. Major homepage redesign: Moved tagline under headline, added quote under candidate photo, removed decorative dots, updated navigation styling, redesigned footer with logo and updated contact info, improved spacing throughout for better flow
- June 27, 2025. Revolutionary visual transformation: Added stunning blue and yellow 3D frames and borders inspired by logo colors, implemented beautiful gradient backgrounds, created elevated card designs with hover effects, added accent bars and decorative border elements throughout homepage
- June 27, 2025. MAJOR DESIGN TRANSFORMATION: Complete Director of Design level overhaul of entire website with sophisticated professional components, advanced typography system, professional grid layouts, reduced blank space significantly, advanced policy cards with hover effects, stats sections, comprehensive call-to-action sections, and modern content-rich layouts across all pages (Home, Campaign, About, Community, Volunteer)
- June 28, 2025. COMPLETE NAVIGATION AND PAGE RESTRUCTURING: Added scroll-to-top functionality, renamed "Campaign" to "Policies" page with 5 uniform policy boxes (2 flanking candidate photo, 3 below), created new "Campaign" page with "How Can You Help?" featuring Volunteering/Donations/Press sections, updated Community page with TikTok/LinkedIn/YouTube social media, Senator's Cup tournament poster, Google Calendar integration, and merchandise ordering system
- June 28, 2025. MAJOR LAYOUT FIXES AND VISUAL ENHANCEMENTS: Fixed all overlapping policy boxes with completely rebuilt policies page, added blue callout text on homepage candidate photo, removed logo box styling, updated homepage policy cards to match site style, centered Campaign page content, repositioned Event Calendar under Senator's Cup info, fixed merch section alignment with proper icons, added resume upload to volunteer form, updated About page with professional suit photo and blue filter, created dramatic hero section on Policies page with worker photo background, transparent overlay, and left-aligned text
- June 30, 2025. MULTILINGUAL TRANSLATION SYSTEM IMPLEMENTATION: Successfully implemented comprehensive 5-language translation support (English, Spanish, Mandarin Chinese, Polish, Arabic) for home, about, and policies pages. Language toggle appears conditionally only on translatable pages. Campaign, community, and volunteer pages remain English-only as requested. Fixed all translation gaps including "Ready to Fight Together?" section on about page and complete policies page translation functionality.

## User Preferences

Preferred communication style: Simple, everyday language.