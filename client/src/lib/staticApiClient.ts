import { mockRestaurants, mockTestimonials, mockMenuItems } from './mockData';

// Static API client for frontend-only deployment
export class StaticApiClient {
  private static isProduction = import.meta.env.PROD;
  
  static async getRestaurants() {
    if (this.isProduction) {
      return mockRestaurants;
    }
    // In development, still use the real API
    const response = await fetch('/api/restaurants');
    return response.json();
  }
  
  static async getTestimonials() {
    if (this.isProduction) {
      return mockTestimonials;
    }
    const response = await fetch('/api/testimonials');
    return response.json();
  }
  
  static async getMenuItems(restaurantId: number) {
    if (this.isProduction) {
      return mockMenuItems.filter(item => item.restaurantId === restaurantId);
    }
    const response = await fetch(`/api/restaurants/${restaurantId}/menu`);
    return response.json();
  }
}