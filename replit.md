# FoodRide Hub - All-in-One Food Delivery & Ride Booking Platform

## Overview

FoodRide Hub is a comprehensive web application that combines food delivery and ride booking services into a single platform. Built with modern web technologies, it provides users with a seamless experience for ordering food from restaurants and booking rides with various comfort levels.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon serverless PostgreSQL
- **Development**: Hot module replacement with Vite integration

### Data Storage
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: @neondatabase/serverless for edge-compatible database connections

## Key Components

### Database Schema
The application uses a comprehensive PostgreSQL schema with the following main entities:

1. **Users**: User profiles with location data (latitude/longitude)
2. **Restaurants**: Restaurant listings with cuisine, location, ratings, and delivery info
3. **Menu Items**: Restaurant menu items with categories, pricing, and availability
4. **Rides**: Ride bookings with pickup/destination coordinates and ride types
5. **Orders**: Food orders with status tracking and itemized details
6. **Testimonials**: Customer reviews and feedback

### Service Architecture
- **Dual Service Model**: Toggle between food delivery and ride booking services
- **Location-Based Services**: Coordinate-based restaurant and ride matching
- **Real-time Features**: Status tracking for orders and rides

### UI/UX Design
- **Design System**: Custom color scheme with food-primary (#FF6347) and ride-primary (#4682B4)
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Component Library**: Comprehensive UI components including carousels, dialogs, forms
- **Accessibility**: Built on Radix UI for accessibility compliance

## Data Flow

1. **Client Requests**: React frontend makes API calls through TanStack Query
2. **API Layer**: Express.js routes handle business logic and data validation
3. **Data Layer**: Drizzle ORM manages database operations with type safety
4. **Response Flow**: Structured JSON responses with error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Edge-compatible PostgreSQL client
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration tools
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitive components
- **wouter**: Lightweight React router

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and development experience
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations ensure schema consistency

### Environment Configuration
- **Development**: `npm run dev` - runs both frontend and backend with HMR
- **Production**: `npm run build` followed by `npm run start`
- **Database**: Environment variable `DATABASE_URL` for connection string

### Replit Integration
- **Auto-deployment**: Configured for Replit's autoscale deployment
- **Port Configuration**: Server runs on port 5000, mapped to external port 80
- **Module Support**: Node.js 20, web, and PostgreSQL 16 modules enabled

## Changelog

```
Changelog:
- June 21, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```