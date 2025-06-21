import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // TODO: Implement newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-food-primary">Food</span>
              <span className="text-ride-primary">Ride</span>
              <span className="text-white"> Hub</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your all-in-one platform for food delivery and ride booking. Fast, reliable, and convenient.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Food Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Ride Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Restaurant Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Drive with Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Business Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Safety</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-r-none focus:border-food-primary"
              />
              <Button 
                onClick={handleSubscribe}
                className="bg-food-primary text-white hover:bg-food-primary/90 rounded-l-none"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FoodRide Hub. All rights reserved. | Designed for seamless food delivery and ride booking experience.</p>
        </div>
      </div>
    </footer>
  );
}
