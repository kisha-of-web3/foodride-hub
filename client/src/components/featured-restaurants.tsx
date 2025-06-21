import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Restaurant } from "@shared/schema";
import { formatCurrency, formatRating } from "@/lib/utils";

export default function FeaturedRestaurants() {
  const { data: restaurants, isLoading, error } = useQuery<Restaurant[]>({
    queryKey: ['/api/restaurants'],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Restaurants Near You</h2>
            <p className="text-gray-600 text-lg">Discover amazing food from top-rated restaurants in your area</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
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
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Unable to Load Restaurants</h2>
            <p className="text-gray-600">Please try again later or check your connection.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Restaurants Near You</h2>
          <p className="text-gray-600 text-lg">Discover amazing food from top-rated restaurants in your area</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants?.map((restaurant) => (
            <Card key={restaurant.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
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
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Delivery:</span>
                    <span className="text-food-primary font-medium ml-1">{restaurant.deliveryTime}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Fee:</span>
                    <span className="text-gray-800 font-medium ml-1">{formatCurrency(restaurant.deliveryFee)}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-food-primary text-white hover:bg-food-primary/90">
                  View Menu
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gray-800 text-white hover:bg-gray-700">
            View All Restaurants
          </Button>
        </div>
      </div>
    </section>
  );
}
