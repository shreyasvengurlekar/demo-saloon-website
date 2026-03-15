
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SITE_INFO } from "@/lib/constants";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-man-haircut');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white overflow-hidden">
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-12 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {SITE_INFO.tagline.split('. ').map((part, i) => <span key={i} className="block">{part}</span>)}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90 mx-auto">
            Experience personalized spa and wellness care that nurtures your body, mind, and spirit.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full font-bold text-lg px-8 py-6">
              <Link href="/book-appointment">
                Book an appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-bold text-lg px-8 py-6 border-white text-white bg-transparent hover:bg-white hover:text-black">
              <Link href="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
