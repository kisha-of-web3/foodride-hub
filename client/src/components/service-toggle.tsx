import { Button } from "@/components/ui/button";
import { Utensils, Car } from "lucide-react";

interface ServiceToggleProps {
  activeService: 'food' | 'rides';
  onServiceChange: (service: 'food' | 'rides') => void;
}

export default function ServiceToggle({ activeService, onServiceChange }: ServiceToggleProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <Button
              onClick={() => onServiceChange('food')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${
                activeService === 'food'
                  ? 'bg-food-primary text-white'
                  : 'text-gray-600 bg-transparent hover:bg-gray-200'
              }`}
            >
              <Utensils className="mr-2 h-4 w-4" />
              Food Delivery
            </Button>
            <Button
              onClick={() => onServiceChange('rides')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${
                activeService === 'rides'
                  ? 'bg-ride-primary text-white'
                  : 'text-gray-600 bg-transparent hover:bg-gray-200'
              }`}
            >
              <Car className="mr-2 h-4 w-4" />
              Ride Booking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
