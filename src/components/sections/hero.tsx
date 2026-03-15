
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SITE_INFO } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-man-haircut');

  return (
    <section className="py-20 md:py-32">
      <div className="container px-6 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="max-w-xl">
            <p className="font-semibold text-primary">Happy Customer with our services</p>
            <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl mt-2">
                {SITE_INFO.tagline.split('. ').map((part, i) => <span key={i} className="block">{part}</span>)}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Experience personalized spa and wellness care that nurtures your body, mind, and spirit.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full font-bold text-lg px-8 py-6">
                <Link href="/book-appointment">
                    Book an appointment
                </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full font-bold text-lg px-8 py-6">
                <Link href="/services">
                    Our Services
                </Link>
                </Button>
            </div>
            </div>
            <div className="relative w-full max-w-md mx-auto md:max-w-lg aspect-[4/5] rounded-[3rem] overflow-hidden">
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
            </div>
        </div>
      </div>
    </section>
  );
}
