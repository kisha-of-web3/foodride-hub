import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star, MapPin, Clock, Filter, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Restaurant } from "@shared/schema";
import { formatCurrency, formatRating } from "@/lib/utils";
import { useState } from "react";

export default function FoodDelivery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("all");

  const { data: restaurants, isLoading, error } = useQuery<Restaurant[]>({
    queryKey: ['/api/restaurants'],
  });

  const cuisineTypes = ["all", "Italian", "Asian", "American", "Mexican", "Indian"];

  const filteredRestaurants = restaurants?.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine === "all" || 
                          restaurant.cuisine.toLowerCase().includes(selectedCuisine.toLowerCase());
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="min-h-screen bg-bg-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white py-20 overflow-hidden">
        {/* Background Image with Cultural Food Theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/85 via-orange-600/80 to-yellow-500/75" />
        
        {/* Floating Food Elements */}
        <div className="absolute top-16 left-8 w-16 h-16 bg-yellow-300/30 rounded-full animate-bounce delay-500" />
        <div className="absolute top-24 right-12 w-12 h-12 bg-red-400/25 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-16 w-20 h-20 bg-orange-300/20 rounded-full animate-bounce delay-700" />
        <div className="absolute bottom-32 right-8 w-14 h-14 bg-yellow-400/25 rounded-full animate-ping delay-300" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Authentic Flavors, <br />
              <span className="text-yellow-200">Delivered Fresh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 animate-fade-in-delay">
              Discover culinary treasures from around the world, delivered to your doorstep
            </p>
            <div className="flex justify-center space-x-6 text-orange-100 animate-slide-up">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span>150+ Cuisines</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-200"></div>
                <span>Local & Global</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-400"></div>
                <span>Farm to Table</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search restaurants or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400 h-5 w-5" />
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-food-primary"
              >
                {cuisineTypes.map(cuisine => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine === "all" ? "All Cuisines" : cuisine}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="bg-white shadow-lg animate-pulse">
                  <div className="w-full h-48 bg-gray-200"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Unable to Load Restaurants</h3>
              <p className="text-gray-600">Please try again later or check your connection.</p>
            </div>
          ) : filteredRestaurants && filteredRestaurants.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRestaurants.map((restaurant) => (
                <Card key={restaurant.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
                  <img 
                    src={restaurant.imageUrl || ''} 
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-400 h-4 w-4 fill-current" />
                        <span className="text-gray-600 font-medium">{formatRating(restaurant.rating || '0')}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="truncate">{restaurant.address}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-food-primary" />
                        <span className="text-food-primary font-medium">{restaurant.deliveryTime}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Fee:</span>
                        <span className="text-gray-800 font-medium ml-1">{formatCurrency(restaurant.deliveryFee)}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-food-primary text-white hover:bg-food-primary/90">
                      View Menu & Order
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Restaurants Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}