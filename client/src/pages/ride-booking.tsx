import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Clock, Car, Users, Shield, CreditCard } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const rideTypes = [
  {
    id: 'eco',
    name: 'RideEco',
    description: 'Affordable rides for everyday journeys',
    capacity: '4 seats',
    features: ['Eco-friendly', 'Standard comfort', 'Budget-friendly'],
    priceMultiplier: 1,
    estimatedTime: '5-10 min',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'comfort',
    name: 'RideComfort',
    description: 'Extra space and comfort for your journey',
    capacity: '4 seats',
    features: ['Extra legroom', 'Premium vehicles', 'Climate control'],
    priceMultiplier: 1.5,
    estimatedTime: '3-8 min',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
  },
  {
    id: 'luxury',
    name: 'RideLux',
    description: 'Premium experience with luxury vehicles',
    capacity: '4 seats',
    features: ['Luxury vehicles', 'Professional drivers', 'Premium amenities'],
    priceMultiplier: 2.5,
    estimatedTime: '2-5 min',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
  },
];

export default function RideBooking() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedRide, setSelectedRide] = useState<string | null>(null);
  const [fareEstimate, setFareEstimate] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFareEstimate = async () => {
    if (!pickup || !destination) {
      toast({
        title: "Missing Information",
        description: "Please enter both pickup and destination locations.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Mock coordinates for demo - in real app would use geocoding
      const response = await fetch('/api/rides/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pickupLat: 37.7749,
          pickupLng: -122.4194,
          destinationLat: 37.7849,
          destinationLng: -122.4094,
          rideType: selectedRide || 'eco'
        }),
      });

      if (response.ok) {
        const estimate = await response.json();
        setFareEstimate(estimate);
      } else {
        throw new Error('Failed to get estimate');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to calculate fare estimate. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookRide = async () => {
    if (!pickup || !destination || !selectedRide) {
      toast({
        title: "Missing Information",
        description: "Please complete all ride details before booking.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('/api/rides', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1, // Mock user ID
          rideType: selectedRide,
          pickupAddress: pickup,
          pickupLatitude: "37.7749",
          pickupLongitude: "-122.4194",
          destinationAddress: destination,
          destinationLatitude: "37.7849",
          destinationLongitude: "-122.4094",
          estimatedFare: fareEstimate?.estimatedFare || "15.00"
        }),
      });

      if (response.ok) {
        toast({
          title: "Ride Booked Successfully!",
          description: "Your driver will be with you shortly. Check your email for details.",
        });
        // Reset form
        setPickup("");
        setDestination("");
        setSelectedRide(null);
        setFareEstimate(null);
      } else {
        throw new Error('Failed to book ride');
      }
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Unable to book your ride. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ride-primary to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ride Booking</h1>
            <p className="text-xl mb-8 text-blue-100">
              Reliable, safe, and comfortable rides whenever you need them
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Ride</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                      className="pl-10 py-3"
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
                      className="pl-10 py-3"
                    />
                  </div>
                </div>
              </div>

              {/* Ride Types */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Your Ride</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {rideTypes.map((ride) => (
                    <Card 
                      key={ride.id} 
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedRide === ride.id 
                          ? 'ring-2 ring-ride-primary bg-blue-50' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedRide(ride.id)}
                    >
                      <CardContent className="p-4">
                        <img 
                          src={ride.image} 
                          alt={ride.name}
                          className="w-full h-24 object-cover rounded-lg mb-3"
                        />
                        <h4 className="font-bold text-gray-800 mb-1">{ride.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{ride.description}</p>
                        <div className="space-y-1 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            <span>{ride.capacity}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>ETA: {ride.estimatedTime}</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          {ride.features.map((feature, index) => (
                            <span key={index} className="inline-block bg-gray-100 text-xs px-2 py-1 rounded mr-1 mb-1">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Fare Estimate */}
              <div className="flex flex-col md:flex-row gap-4 items-end mb-6">
                <Button 
                  onClick={handleFareEstimate}
                  disabled={isLoading || !pickup || !destination}
                  className="bg-ride-primary text-white hover:bg-ride-primary/90"
                >
                  {isLoading ? 'Calculating...' : 'Get Fare Estimate'}
                </Button>
                
                {fareEstimate && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-green-600">Estimated Fare</p>
                        <p className="text-2xl font-bold text-green-800">${fareEstimate.estimatedFare}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600">Distance</p>
                        <p className="font-semibold text-green-800">{fareEstimate.distance} km</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Book Ride Button */}
              <Button 
                onClick={handleBookRide}
                disabled={!pickup || !destination || !selectedRide}
                className="w-full bg-ride-primary text-white hover:bg-ride-primary/90 py-4 text-lg font-semibold"
              >
                <Car className="mr-2 h-5 w-5" />
                Book Ride Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Safety is Our Priority</h2>
            <p className="text-gray-600 text-lg">We've implemented multiple safety features for your peace of mind</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-ride-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-ride-primary" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Verified Drivers</h3>
              <p className="text-gray-600">All drivers undergo thorough background checks and training</p>
            </div>
            <div className="text-center">
              <div className="bg-ride-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-ride-primary" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Track your ride in real-time and share your trip with loved ones</p>
            </div>
            <div className="text-center">
              <div className="bg-ride-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-ride-primary" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Cashless Payments</h3>
              <p className="text-gray-600">Secure, contactless payments for a safer ride experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}