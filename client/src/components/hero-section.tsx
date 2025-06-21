import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Utensils, Car, Clock, Shield, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function HeroSection() {
  const [location, setLocation] = useState("");

  const handleLocationSearch = () => {
    // TODO: Implement Google Maps Places API integration
    console.log("Searching for location:", location);
  };

  return (
    <section className="relative bg-gradient-to-br from-food-primary via-red-500 to-ride-primary text-white py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-food-primary/90 via-red-500/85 to-ride-primary/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-bounce delay-1000" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-yellow-200/30 rounded-full animate-bounce delay-500" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Your Cravings & <br />
            <span className="text-yellow-200 animate-pulse">Destinations</span> Delivered
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-red-100 animate-fade-in-delay">
            Order delicious food and book reliable rides - all in one seamless platform
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-2xl mb-8 max-w-2xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Enter your location for personalized services"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-food-primary focus:border-transparent"
                  />
                </div>
              </div>
              <Button 
                onClick={handleLocationSearch}
                className="bg-food-primary text-white px-6 py-4 rounded-xl hover:bg-food-primary/90"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/food-delivery">
                <Button className="w-full bg-food-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-food-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  <Utensils className="mr-2 h-5 w-5" />
                  Order Food Now
                </Button>
              </Link>
              <Link href="/ride-booking">
                <Button className="w-full bg-ride-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-ride-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  <Car className="mr-2 h-5 w-5" />
                  Book a Ride
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center space-x-8 text-red-100">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="text-yellow-200 h-5 w-5" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="text-yellow-200 h-5 w-5" />
              <span>Safe & Secure</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="text-yellow-200 h-5 w-5" />
              <span>Top Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
