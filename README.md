# FoodRide Hub

A comprehensive full-stack web application that combines food delivery and ride booking services into a single platform. Built with modern web technologies and featuring a beautiful, culturally-themed design.

## Features

### 🍕 Food Delivery
- Browse restaurants by cuisine and location
- Real-time order tracking
- Featured restaurants with ratings and reviews
- Location-based restaurant discovery

### 🚗 Ride Booking
- Multiple ride types (Economy, Premium, Luxury)
- Real-time fare estimation
- Driver tracking and safety features
- Eco-friendly transportation options

### 👤 User Management
- Secure authentication system
- User profiles with location preferences
- Order and ride history
- Account management

### 🛠️ Additional Features
- Responsive design for all devices
- Cultural and cuisine-themed imagery
- Interactive hero sections with animations
- Comprehensive support system with FAQ
- Real-time testimonials and reviews

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **TanStack Query** for state management
- **Wouter** for routing
- **Framer Motion** for animations

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Drizzle ORM** with PostgreSQL
- **Neon** serverless database

### Development Tools
- **Vite** for fast development and building
- **ESBuild** for server bundling
- **PostCSS** and **Autoprefixer**
- **Drizzle Kit** for database management

## Getting Started

### Prerequisites
- Node.js 20 or higher
- PostgreSQL database (or Neon serverless)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/foodride-hub.git
cd foodride-hub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Add your database URL
DATABASE_URL=your_postgresql_connection_string
```

4. Push database schema:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── db.ts              # Database configuration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema definitions
└── dist/                   # Built files (generated)
```

## Database Schema

The application uses PostgreSQL with the following main entities:

- **Users** - User profiles with authentication
- **Restaurants** - Restaurant listings with location data
- **Menu Items** - Restaurant menu with categories and pricing
- **Orders** - Food orders with status tracking
- **Rides** - Ride bookings with pickup/destination coordinates
- **Testimonials** - Customer reviews and feedback

## API Endpoints

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get restaurant by ID
- `GET /api/restaurants/:id/menu` - Get restaurant menu

### Orders
- `POST /api/orders` - Create new food order
- `GET /api/orders/:id` - Get order details

### Rides
- `POST /api/rides` - Book a new ride
- `GET /api/rides/:id` - Get ride details

### Users
- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user profile

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Cultural imagery sourced from Unsplash
- UI components built with Radix UI primitives
- Icons provided by Lucide React
- Design inspiration from modern food delivery and transportation apps

## Support

For support and questions, please use the support page within the application or contact us through the provided channels.