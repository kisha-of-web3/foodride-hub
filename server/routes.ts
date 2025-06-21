import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRideSchema, insertOrderSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Restaurants
  app.get("/api/restaurants", async (req, res) => {
    try {
      const restaurants = await storage.getRestaurants();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch restaurants" });
    }
  });

  app.get("/api/restaurants/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const restaurant = await storage.getRestaurant(id);
      if (!restaurant) {
        return res.status(404).json({ error: "Restaurant not found" });
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch restaurant" });
    }
  });

  // Menu items
  app.get("/api/restaurants/:id/menu", async (req, res) => {
    try {
      const restaurantId = parseInt(req.params.id);
      const menuItems = await storage.getMenuItemsByRestaurant(restaurantId);
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  });

  // Testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getActiveTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // Rides
  app.post("/api/rides", async (req, res) => {
    try {
      const rideData = insertRideSchema.parse(req.body);
      const ride = await storage.createRide(rideData);
      res.status(201).json(ride);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid ride data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create ride" });
    }
  });

  app.get("/api/rides/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const ride = await storage.getRide(id);
      if (!ride) {
        return res.status(404).json({ error: "Ride not found" });
      }
      res.json(ride);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch ride" });
    }
  });

  // Orders
  app.post("/api/orders", async (req, res) => {
    try {
      const orderData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(orderData);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid order data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create order" });
    }
  });

  app.get("/api/orders/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const order = await storage.getOrder(id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch order" });
    }
  });

  // Location search (mock endpoint for demonstration)
  app.post("/api/location/search", async (req, res) => {
    try {
      const { query } = req.body;
      
      // In a real implementation, this would use Google Places API
      // For now, return mock suggestions
      const mockSuggestions = [
        {
          place_id: "1",
          description: "San Francisco, CA, USA",
          structured_formatting: {
            main_text: "San Francisco",
            secondary_text: "CA, USA"
          },
          geometry: {
            location: {
              lat: 37.7749,
              lng: -122.4194
            }
          }
        },
        {
          place_id: "2", 
          description: "New York, NY, USA",
          structured_formatting: {
            main_text: "New York",
            secondary_text: "NY, USA"
          },
          geometry: {
            location: {
              lat: 40.7128,
              lng: -74.0060
            }
          }
        }
      ];

      // Filter suggestions based on query
      const filteredSuggestions = mockSuggestions.filter(suggestion =>
        suggestion.description.toLowerCase().includes(query.toLowerCase())
      );

      res.json({ predictions: filteredSuggestions });
    } catch (error) {
      res.status(500).json({ error: "Failed to search locations" });
    }
  });

  // Fare estimation
  app.post("/api/rides/estimate", async (req, res) => {
    try {
      const { pickupLat, pickupLng, destinationLat, destinationLng, rideType } = req.body;
      
      // Simple distance calculation for fare estimation
      const distance = Math.sqrt(
        Math.pow(destinationLat - pickupLat, 2) + Math.pow(destinationLng - pickupLng, 2)
      ) * 111; // Rough conversion to km

      let baseFare = 5;
      let perKmRate = 2;

      switch (rideType) {
        case 'comfort':
          baseFare = 8;
          perKmRate = 2.5;
          break;
        case 'luxury':
          baseFare = 15;
          perKmRate = 4;
          break;
        default: // eco
          baseFare = 5;
          perKmRate = 2;
      }

      const estimatedFare = baseFare + (distance * perKmRate);
      const estimatedTime = Math.max(5, Math.round(distance * 2)); // 2 minutes per km, minimum 5 minutes

      res.json({
        estimatedFare: parseFloat(estimatedFare.toFixed(2)),
        estimatedTime,
        distance: parseFloat(distance.toFixed(2))
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to estimate fare" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
