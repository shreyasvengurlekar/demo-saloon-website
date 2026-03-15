import { AboutSection } from "@/components/sections/about-section";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { FeaturedServices } from "@/components/sections/featured-services";
import { Hero } from "@/components/sections/hero";
import { OffersSection } from "@/components/sections/offers-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedServices />
      <AboutSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <OffersSection />
    </div>
  );
}
