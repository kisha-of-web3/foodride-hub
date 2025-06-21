import { 
  users, restaurants, menuItems, rides, orders, testimonials,
  type User, type InsertUser,
  type Restaurant, type InsertRestaurant,
  type MenuItem, type InsertMenuItem,
  type Ride, type InsertRide,
  type Order, type InsertOrder,
  type Testimonial, type InsertTestimonial
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Restaurants
  getRestaurants(): Promise<Restaurant[]>;
  getRestaurant(id: number): Promise<Restaurant | undefined>;
  createRestaurant(restaurant: InsertRestaurant): Promise<Restaurant>;
  getRestaurantsByLocation(latitude: number, longitude: number, radius?: number): Promise<Restaurant[]>;

  // Menu Items
  getMenuItemsByRestaurant(restaurantId: number): Promise<MenuItem[]>;
  getMenuItem(id: number): Promise<MenuItem | undefined>;
  createMenuItem(menuItem: InsertMenuItem): Promise<MenuItem>;

  // Rides
  getRides(): Promise<Ride[]>;
  getRide(id: number): Promise<Ride | undefined>;
  createRide(ride: InsertRide): Promise<Ride>;
  getRidesByUser(userId: number): Promise<Ride[]>;
  updateRideStatus(id: number, status: string): Promise<Ride | undefined>;

  // Orders
  getOrders(): Promise<Order[]>;
  getOrder(id: number): Promise<Order | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
  getOrdersByUser(userId: number): Promise<Order[]>;
  updateOrderStatus(id: number, status: string): Promise<Order | undefined>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getActiveTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private restaurants: Map<number, Restaurant>;
  private menuItems: Map<number, MenuItem>;
  private rides: Map<number, Ride>;
  private orders: Map<number, Order>;
  private testimonials: Map<number, Testimonial>;
  private currentUserId: number;
  private currentRestaurantId: number;
  private currentMenuItemId: number;
  private currentRideId: number;
  private currentOrderId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.restaurants = new Map();
    this.menuItems = new Map();
    this.rides = new Map();
    this.orders = new Map();
    this.testimonials = new Map();
    this.currentUserId = 1;
    this.currentRestaurantId = 1;
    this.currentMenuItemId = 1;
    this.currentRideId = 1;
    this.currentOrderId = 1;
    this.currentTestimonialId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample restaurants
    const sampleRestaurants: Restaurant[] = [
      {
        id: this.currentRestaurantId++,
        name: "Mario's Pizzeria",
        cuisine: "Italian • Pizza • Pasta",
        address: "123 Main St, San Francisco, CA",
        latitude: "37.7749",
        longitude: "-122.4194",
        rating: "4.8",
        deliveryTime: "25-35 min",
        deliveryFee: "2.99",
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        isActive: true,
      },
      {
        id: this.currentRestaurantId++,
        name: "Dragon Palace",
        cuisine: "Asian • Chinese • Thai",
        address: "456 Oak Ave, San Francisco, CA",
        latitude: "37.7849",
        longitude: "-122.4094",
        rating: "4.6",
        deliveryTime: "30-45 min",
        deliveryFee: "3.49",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        isActive: true,
      },
      {
        id: this.currentRestaurantId++,
        name: "Burger Boulevard",
        cuisine: "American • Burgers • Fries",
        address: "789 Pine St, San Francisco, CA",
        latitude: "37.7949",
        longitude: "-122.3994",
        rating: "4.7",
        deliveryTime: "20-30 min",
        deliveryFee: "1.99",
        imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        isActive: true,
      },
    ];

    sampleRestaurants.forEach(restaurant => {
      this.restaurants.set(restaurant.id, restaurant);
    });

    // Sample testimonials
    const sampleTestimonials: Testimonial[] = [
      {
        id: this.currentTestimonialId++,
        name: "Sarah Chen",
        location: "San Francisco, CA",
        rating: 5,
        comment: "Amazing platform! I can order lunch and book my ride home all in one app. Super convenient and fast delivery.",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isActive: true,
      },
      {
        id: this.currentTestimonialId++,
        name: "Mike Rodriguez",
        location: "Austin, TX",
        rating: 5,
        comment: "The ride service is reliable and the food selection is fantastic. Great prices and excellent customer service!",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isActive: true,
      },
      {
        id: this.currentTestimonialId++,
        name: "Emily Johnson",
        location: "Seattle, WA",
        rating: 5,
        comment: "Love how I can track both my food delivery and ride in real-time. The app is intuitive and works perfectly!",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isActive: true,
      },
    ];

    sampleTestimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  // Restaurant methods
  async getRestaurants(): Promise<Restaurant[]> {
    return Array.from(this.restaurants.values()).filter(r => r.isActive);
  }

  async getRestaurant(id: number): Promise<Restaurant | undefined> {
    return this.restaurants.get(id);
  }

  async createRestaurant(insertRestaurant: InsertRestaurant): Promise<Restaurant> {
    const id = this.currentRestaurantId++;
    const restaurant: Restaurant = { ...insertRestaurant, id };
    this.restaurants.set(id, restaurant);
    return restaurant;
  }

  async getRestaurantsByLocation(latitude: number, longitude: number, radius: number = 10): Promise<Restaurant[]> {
    // Simple distance calculation - in a real app, you'd use proper geospatial queries
    return Array.from(this.restaurants.values()).filter(r => r.isActive);
  }

  // Menu Item methods
  async getMenuItemsByRestaurant(restaurantId: number): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      item => item.restaurantId === restaurantId && item.isAvailable
    );
  }

  async getMenuItem(id: number): Promise<MenuItem | undefined> {
    return this.menuItems.get(id);
  }

  async createMenuItem(insertMenuItem: InsertMenuItem): Promise<MenuItem> {
    const id = this.currentMenuItemId++;
    const menuItem: MenuItem = { ...insertMenuItem, id };
    this.menuItems.set(id, menuItem);
    return menuItem;
  }

  // Ride methods
  async getRides(): Promise<Ride[]> {
    return Array.from(this.rides.values());
  }

  async getRide(id: number): Promise<Ride | undefined> {
    return this.rides.get(id);
  }

  async createRide(insertRide: InsertRide): Promise<Ride> {
    const id = this.currentRideId++;
    const ride: Ride = { 
      ...insertRide, 
      id,
      requestedAt: new Date(),
    };
    this.rides.set(id, ride);
    return ride;
  }

  async getRidesByUser(userId: number): Promise<Ride[]> {
    return Array.from(this.rides.values()).filter(ride => ride.userId === userId);
  }

  async updateRideStatus(id: number, status: string): Promise<Ride | undefined> {
    const ride = this.rides.get(id);
    if (ride) {
      const updatedRide = { ...ride, status };
      this.rides.set(id, updatedRide);
      return updatedRide;
    }
    return undefined;
  }

  // Order methods
  async getOrders(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }

  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = this.currentOrderId++;
    const order: Order = { 
      ...insertOrder, 
      id,
      orderDate: new Date(),
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrdersByUser(userId: number): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(order => order.userId === userId);
  }

  async updateOrderStatus(id: number, status: string): Promise<Order | undefined> {
    const order = this.orders.get(id);
    if (order) {
      const updatedOrder = { ...order, status };
      this.orders.set(id, updatedOrder);
      return updatedOrder;
    }
    return undefined;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isActive);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
