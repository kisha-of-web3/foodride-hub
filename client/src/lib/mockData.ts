// Mock data for static deployment
export const mockRestaurants = [
  {
    id: 1,
    name: "Mario's Pizzeria",
    cuisine: "Italian",
    address: "123 Pizza Street, Downtown",
    latitude: "37.7749",
    longitude: "-122.4194",
    rating: "4.8",
    deliveryTime: "25-35 min",
    deliveryFee: "$2.99",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    isActive: true
  },
  {
    id: 2,
    name: "Dragon Palace",
    cuisine: "Chinese",
    address: "456 Asian Avenue, Chinatown",
    latitude: "37.7849",
    longitude: "-122.4094",
    rating: "4.6",
    deliveryTime: "20-30 min",
    deliveryFee: "$3.99",
    imageUrl: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400",
    isActive: true
  },
  {
    id: 3,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    address: "789 Spice Road, Mission District",
    latitude: "37.7649",
    longitude: "-122.4294",
    rating: "4.7",
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    isActive: true
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "San Francisco",
    rating: 5,
    comment: "Amazing service! The food arrived hot and fresh. Will definitely order again.",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
    isActive: true
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    location: "Oakland",
    rating: 5,
    comment: "Quick delivery and excellent customer service. Highly recommended!",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    isActive: true
  },
  {
    id: 3,
    name: "Emily Johnson",
    location: "Berkeley",
    rating: 4,
    comment: "Great variety of restaurants. The app is easy to use and reliable.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    isActive: true
  }
];

export const mockMenuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    restaurantId: 1,
    description: "Fresh tomatoes, mozzarella, and basil",
    price: "$18.99",
    category: "Pizza",
    imageUrl: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300",
    isAvailable: true
  },
  {
    id: 2,
    name: "Kung Pao Chicken",
    restaurantId: 2,
    description: "Spicy chicken with peanuts and vegetables",
    price: "$15.99",
    category: "Main Course",
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300",
    isAvailable: true
  },
  {
    id: 3,
    name: "Fish Tacos",
    restaurantId: 3,
    description: "Grilled fish with cabbage slaw and chipotle sauce",
    price: "$12.99",
    category: "Tacos",
    imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300",
    isAvailable: true
  }
];