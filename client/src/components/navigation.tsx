import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <div className="text-2xl font-bold cursor-pointer">
                <span className="text-food-primary">Food</span>
                <span className="text-ride-primary">Ride</span>
                <span className="text-gray-800"> Hub</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/food-delivery">
              <span className="text-gray-700 hover:text-food-primary transition-colors duration-200 cursor-pointer">
                Food Delivery
              </span>
            </Link>
            <Link href="/ride-booking">
              <span className="text-gray-700 hover:text-ride-primary transition-colors duration-200 cursor-pointer">
                Ride Booking
              </span>
            </Link>
            <Link href="/how-it-works">
              <span className="text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
                How it Works
              </span>
            </Link>
            <Link href="/support">
              <span className="text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
                Support
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-food-primary text-white hover:bg-food-primary/90">
                Sign Up
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
