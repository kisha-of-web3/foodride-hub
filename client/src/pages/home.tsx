import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServiceToggle from "@/components/service-toggle";
import FeaturedRestaurants from "@/components/featured-restaurants";
import RideOptions from "@/components/ride-options";
import PromotionalBanners from "@/components/promotional-banners";
import TestimonialCarousel from "@/components/testimonial-carousel";
import DownloadApp from "@/components/download-app";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState<'food' | 'rides'>('food');

  return (
    <div className="min-h-screen bg-bg-light">
      <Navigation />
      <HeroSection />
      <ServiceToggle activeService={activeService} onServiceChange={setActiveService} />
      {activeService === 'food' ? <FeaturedRestaurants /> : <RideOptions />}
      <PromotionalBanners />
      <TestimonialCarousel />
      <DownloadApp />
      <Footer />
    </div>
  );
}
