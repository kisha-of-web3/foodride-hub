import { Card, CardContent } from "@/components/ui/card";
import { Truck, Percent, DollarSign } from "lucide-react";

const promotions = [
  {
    title: "50% OFF First Order",
    subtitle: "Use code: WELCOME50",
    icon: Percent,
    discount: "50%",
  },
  {
    title: "Free Delivery",
    subtitle: "On orders over $25",
    icon: Truck,
    discount: null,
  },
  {
    title: "Ride Credits",
    subtitle: "$10 off your next 3 rides",
    icon: DollarSign,
    discount: "$10",
  },
];

export default function PromotionalBanners() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-xl mb-6 text-purple-100">Save more on your favorite food and rides</p>
            
            <div className="space-y-4">
              {promotions.map((promo, index) => (
                <Card key={index} className="bg-white bg-opacity-20 backdrop-blur border-0">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h3 className="font-bold text-lg">{promo.title}</h3>
                        <p className="text-purple-100">{promo.subtitle}</p>
                      </div>
                      <div className="text-2xl font-bold">
                        {promo.discount ? promo.discount : <promo.icon className="h-6 w-6" />}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Happy customers using food and ride services"
              className="rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
