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
- June 30, 2025. ADMIN DASHBOARD SYSTEM IMPLEMENTATION: Built comprehensive content management system with secure authentication, database storage, and multilingual translation editing. Owner account: elisejonesm@gmail.com (password: CampaignAdmin2026!). Admin account: blue@jump2026.com. System allows editing of text content, taglines, quotes, contact info, social media links, and translations across all 5 languages without touching code. Accessible at /admin/login with clean interface separate from main site navigation.
- June 30, 2025. COMPREHENSIVE FEATURE ENHANCEMENT ROLLOUT: Added Chicago-specific timeline and native text box to Policies page, implemented Voting Resources section on Community page with Illinois voter registration and Chicago voting links, added blue Donate button to header navigation, created popup signup form with Google Sheets integration for email collection (collecting email, zip, first/last name, phone), added Endorsements section to Campaign page with placeholder circles for future logos, implemented "Meet the Campaign Team!" section on Volunteer page featuring Robert Blue II as Campaign Manager and Sims as Director of Information and Volunteer Coordinator. All signup forms now route to single Google Sheets document for centralized email management.
- July 1, 2025. MAJOR POLICY DROPDOWNS AND CAMPAIGN PAGE RESTRUCTURING: Converted About page My Policies section to black background with larger clickable arrows linking to Policies page, completely restructured Policies page with accordion dropdowns for 5 specific policies (Billionaire Tax, Pink Tax with YouTube video, Affordable Housing, Environmental Policy, Working Families), added comprehensive "How Can You Help?" section to Campaign page with Get Involved button linking to volunteer page, Donate Now button linking to ActBlue (https://secure.actblue.com/donate/jumpforsenate), and Contact Us button for press inquiries (blue@jump2026.com), removed volunteer opportunities section from Campaign page, updated James Sims full name throughout team section.
- July 1, 2025. COMPREHENSIVE FORM INTEGRATION AND UI IMPROVEMENTS: Successfully implemented Google Sheets backend integration for both signup modal and volunteer application forms with proper state management and API routes. Enhanced policies page with improved accordion dropdowns featuring icons (DollarSign, Heart, Home, TreePine, Users), larger fonts, removed shadows, and blue prominent dropdown arrows. Removed blue arrows from homepage policy boxes. Updated About page "View Platform" button to link to policies page. Added extensive campaign team volunteer interests (Policywriter, Discord Manager, Sales Team, Media Coordinator, Social Media Manager, Content Writer). Verified all social media links are correct: TikTok (@jumpforsenate), Instagram (@jumpforsenate), YouTube (@JumpForSenate). All forms now properly capture and send data to backend with validation and success/error handling.
- July 1, 2025. FINAL COLOR STANDARDIZATION AUDIT: Completed comprehensive color audit and standardization across all pages to ensure exclusive use of the 6 approved colors: white, black, grey, blue, dark blue, and yellow. Changed Chicago How to Vote box to dark blue background with white text. Removed all non-standard colors (red, green, purple, orange, pink, etc.) from campaign page, volunteer page, community page social media icons, and homepage election banner. Updated not-found page error icon to blue. Verified all color usage conforms to flat design principles with no gradients or unauthorized color variations.

## User Preferences

Preferred communication style: Simple, everyday language.