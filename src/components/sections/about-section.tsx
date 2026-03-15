
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_INFO } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

function AboutContent() {
  return (
    <>
      <h2 className="font-headline text-4xl font-bold md:text-5xl">Our Story: A Passion for Beauty & Confidence</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        B Beyond was born from a shared passion for artistry and a commitment to helping our clients feel like the best version of themselves. We believe that a great hairstyle or a perfect beauty treatment is more than just a service—it's a form of self-expression and a boost of confidence.
      </p>
      <p className="mt-4 text-muted-foreground">
        Led by our founders, Pranali and Gauresh Pingulkar, our team is dedicated to providing a luxurious, welcoming experience. We combine modern techniques with personalized care to create looks that are both timeless and on-trend. Step into our salon and let us help you elevate your style and define your confidence.
      </p>
    </>
  );
}


export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-section-image');
  
  return (
    <section className="overflow-hidden bg-secondary/30 py-20 md:py-32">
      <div className="container px-6 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:order-2">
            <AboutContent />
          </div>
          <div className="lg:order-1 flex gap-4 justify-center">
             <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden">
                {aboutImage && (
                    <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                    />
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
