import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import { useState } from "react";

const rideTypes = [
  {
    id: 'eco',
    name: 'RideEco',
    description: 'Affordable rides for everyday journeys',
    priceRange: '$8-12',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'comfort',
    name: 'RideComfort',
    description: 'Extra space and comfort for your journey',
    priceRange: '$12-18',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'luxury',
    name: 'RideLux',
    description: 'Premium experience with luxury vehicles',
    priceRange: '$20-30',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
  },
];

export default function RideOptions() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleFareEstimate = () => {
    // TODO: Implement fare estimation API call
    console.log("Estimating fare for:", { pickup, destination });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Choose Your Ride</h2>
          <p className="text-gray-600 text-lg">Reliable transportation options for every journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rideTypes.map((ride) => (
            <Card key={ride.id} className="bg-gray-50 text-center hover:shadow-lg transition-all duration-200">
              <CardContent className="p-8">
                <img 
                  src={ride.image} 
                  alt={ride.name}
                  className="w-32 h-24 object-cover rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ride.name}</h3>
                <p className="text-gray-600 mb-4">{ride.description}</p>
                <div className="text-2xl font-bold text-ride-primary mb-4">{ride.priceRange}</div>
                <Button className="bg-ride-primary text-white hover:bg-ride-primary/90">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-50 mt-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Ride Booking</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="pickup"
                      type="text"
                      placeholder="Enter pickup location"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="destination"
                      type="text"
                      placeholder="Enter destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button 
                  onClick={handleFareEstimate}
                  className="bg-ride-primary text-white hover:bg-ride-primary/90 text-lg px-8 py-4"
                >
                  Get Fare Estimate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
