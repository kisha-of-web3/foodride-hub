import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">
              <span className="text-food-primary">Food</span>
              <span className="text-ride-primary">Ride</span>
              <span className="text-gray-800"> Hub</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-food-primary transition-colors duration-200">
              Food Delivery
            </a>
            <a href="#" className="text-gray-700 hover:text-ride-primary transition-colors duration-200">
              Ride Booking
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              How it Works
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Support
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
              Sign In
            </Button>
            <Button className="bg-food-primary text-white hover:bg-food-primary/90">
              Sign Up
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
