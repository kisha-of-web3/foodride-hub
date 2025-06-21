import { Button } from "@/components/ui/button";
import { Smartphone, Bell, Tag } from "lucide-react";

export default function DownloadApp() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get the FoodRide Hub App</h2>
            <p className="text-xl text-gray-300 mb-8">
              Download our mobile app for the fastest way to order food and book rides. 
              Available on iOS and Android with exclusive app-only deals.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Smartphone className="text-food-primary h-5 w-5" />
                <span>Faster ordering with saved preferences</span>
              </div>
              <div className="flex items-center space-x-3">
                <Bell className="text-food-primary h-5 w-5" />
                <span>Real-time notifications and tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <Tag className="text-food-primary h-5 w-5" />
                <span>Exclusive app-only promotions</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800 flex items-center px-6 py-3">
                <div className="mr-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 flex items-center px-6 py-3">
                <div className="mr-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22,9.5v5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Zm-20,0v5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5Zm16-6.5v2c0,.55-.45,1-1,1H7c-.55,0-1-.45-1-1V3c0-.55,.45-1,1-1H17c.55,0,1,.45,1,1Zm-10,8.5c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm8,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600" 
              alt="FoodRide Hub mobile app interface"
              className="mx-auto max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
