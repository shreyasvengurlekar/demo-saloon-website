
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Scissors, Sparkles, Gem, User } from "lucide-react";

const featuredServices = [
  { 
    title: "Hair Styling", 
    description: "Trendy cuts, vibrant colors, and rejuvenating treatments.",
    image: PlaceHolderImages.find(img => img.id === 'service-haircut'),
    href: "/services#hair"
  },
  { 
    title: "Skin & Beauty", 
    description: "Glow with our facials, cleanups, and skin therapies.",
    image: PlaceHolderImages.find(img => img.id === 'service-facial'),
    href: "/services#skin"
  },
  { 
    title: "Bridal & Makeup", 
    description: "Look stunning on your special day with our expert artists.",
    image: PlaceHolderImages.find(img => img.id === 'service-bridal'),
    href: "/bridal"
  },
  { 
    title: "Men's Grooming", 
    description: "Sharp looks with our premium grooming and styling services.",
    image: PlaceHolderImages.find(img => img.id === 'service-grooming'),
    href: "/services#grooming"
  },
];

export function FeaturedServices() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Our Signature Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Crafted with precision, passion, and a touch of luxury to make you look and feel your best.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <Card key={service.title} className="group overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="relative h-48 p-0">
                {service.image && (
                  <Image
                    src={service.image.imageUrl}
                    alt={service.image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={service.image.imageHint}
                  />
                )}
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                <CardDescription className="mt-2 min-h-[40px] text-muted-foreground">{service.description}</CardDescription>
                <Button variant="link" asChild className="mt-4 p-0 font-bold text-primary">
                  <Link href={service.href}>
                    Explore More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button size="lg" asChild className="rounded-full">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
