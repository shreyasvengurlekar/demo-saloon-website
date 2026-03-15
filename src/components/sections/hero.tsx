
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getWhatsAppUrl, cn } from "@/lib/utils";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const whatsappUrl = getWhatsAppUrl(SITE_INFO.phones[0], "Hello, I want to book an appointment at B Beyond Hair & Beauty Salon.");

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      <div className="container px-6 md:px-12 relative z-10 flex h-full flex-col items-start justify-center text-left">
        <div className="max-w-3xl">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="block text-glow bg-clip-text text-transparent bg-gradient-to-br from-accent to-primary">
              {SITE_INFO.tagline.split('. ').slice(0, 2).join('. ')}.
            </span>
            <span className="block">
              {SITE_INFO.tagline.split('. ').slice(2).join('. ')}.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            {SITE_INFO.brandPositioning}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary font-bold text-lg px-8 py-6 shadow-lg shadow-primary/30 transition-transform hover:scale-105">
              <Link href="/book-appointment">
                Book Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-card/50 border-accent text-accent font-bold text-lg px-8 py-6 backdrop-blur-sm transition-transform hover:scale-105 hover:bg-accent/10 hover:text-accent-foreground">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
