import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Search, 
  ShoppingCart, 
  Truck, 
  Car, 
  CreditCard,
  Smartphone,
  Clock,
  Star,
  Shield
} from "lucide-react";
import { Link } from "wouter";

const foodSteps = [
  {
    icon: MapPin,
    title: "Enter Your Location",
    description: "Tell us where you are to discover restaurants and food options near you."
  },
  {
    icon: Search,
    title: "Browse & Choose",
    description: "Explore menus from your favorite restaurants and discover new cuisines."
  },
  {
    icon: ShoppingCart,
    title: "Place Your Order",
    description: "Add items to cart, customize your order, and proceed to secure checkout."
  },
  {
    icon: Truck,
    title: "Track & Enjoy",
    description: "Real-time tracking of your order from kitchen to your doorstep."
  }
];

const rideSteps = [
  {
    icon: MapPin,
    title: "Set Pickup & Destination",
    description: "Enter your current location and where you want to go."
  },
  {
    icon: Car,
    title: "Choose Your Ride",
    description: "Select from Eco, Comfort, or Luxury options based on your preference."
  },
  {
    icon: CreditCard,
    title: "Confirm & Pay",
    description: "Review fare estimate and confirm your booking with secure payment."
  },
  {
    icon: Clock,
    title: "Get Picked Up",
    description: "Track your driver in real-time and enjoy your comfortable ride."
  }
];

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Optimized for mobile devices with an intuitive, easy-to-use interface."
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Live tracking for both food delivery and ride progress with accurate ETAs."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Advanced security measures, verified drivers, and contactless payments."
  },
  {
    icon: Star,
    title: "Quality Assured",
    description: "Curated restaurants and professional drivers with high rating standards."
  }
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
            <p className="text-xl mb-8 text-purple-100">
              Simple steps to get your food delivered and book rides seamlessly
            </p>
          </div>
        </div>
      </section>

      {/* Food Delivery Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Food Delivery Process</h2>
            <p className="text-gray-600 text-lg">From craving to satisfaction in just a few simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foodSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="bg-food-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-food-primary" />
                  </div>
                  <div className="bg-food-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/food-delivery">
              <Button className="bg-food-primary text-white hover:bg-food-primary/90 px-8 py-3">
                Start Ordering Food
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ride Booking Process */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ride Booking Process</h2>
            <p className="text-gray-600 text-lg">Quick and reliable transportation whenever you need it</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rideSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="bg-ride-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-ride-primary" />
                  </div>
                  <div className="bg-ride-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/ride-booking">
              <Button className="bg-ride-primary text-white hover:bg-ride-primary/90 px-8 py-3">
                Book Your Ride
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose FoodRide Hub?</h2>
            <p className="text-gray-600 text-lg">Features that make us your preferred choice for food and rides</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-food-primary to-ride-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-800 mb-2">How long does food delivery usually take?</h3>
                <p className="text-gray-600">Most food deliveries arrive within 30-45 minutes. You can track your order in real-time and get accurate delivery estimates.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-800 mb-2">Are there any delivery fees?</h3>
                <p className="text-gray-600">Delivery fees vary by restaurant and location, typically ranging from $1.99 to $4.99. Some restaurants offer free delivery on orders above a certain amount.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-800 mb-2">How are ride fares calculated?</h3>
                <p className="text-gray-600">Ride fares are based on distance, time, and ride type. We provide upfront pricing so you know the exact cost before booking.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-800 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit/debit cards, digital wallets, and mobile payment methods for both food orders and ride bookings.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-800 mb-2">Is there customer support available?</h3>
                <p className="text-gray-600">Yes! Our customer support team is available 24/7 through the app, website chat, or phone to help with any questions or issues.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}