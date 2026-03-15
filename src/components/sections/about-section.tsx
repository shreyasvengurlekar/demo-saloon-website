
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_INFO } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

function AboutContent() {
  return (
    <>
      <h2 className="font-headline text-4xl font-bold text-glow md:text-5xl">Our Story</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Welcome to B Beyond, where style meets sophistication. Founded by Pranali and Gauresh Pingulkar, our salon is a haven of luxury and transformation in the heart of Kudal. We believe in the art of beauty and the confidence it inspires, offering a bespoke experience that goes beyond the ordinary.
      </p>
    </>
  );
}


export function AboutSection() {
  const pranaliImage = PlaceHolderImages.find(img => img.id === 'owner-pranali');
  const gaureshImage = PlaceHolderImages.find(img => img.id === 'owner-gauresh');

  const highlights = [
    "Premium Unisex Services",
    "Expert Stylists",
    "Luxury Ambiance",
    "Bridal Specialists"
  ];

  return (
    <section className="overflow-hidden bg-background/50 py-20 md:py-32">
      <div className="container px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:order-2">
            <AboutContent />
            <div className="mt-8 grid grid-cols-2 gap-4">
                {highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span className="font-medium">{highlight}</span>
                    </div>
                ))}
            </div>
          </div>
          <div className="lg:order-1 flex gap-4 justify-center">
             <Card className="glass-card relative -rotate-6 transition-transform hover:rotate-0 hover:scale-105">
                <CardHeader>
                    {pranaliImage && <Image src={pranaliImage.imageUrl} alt={pranaliImage.description} width={200} height={250} className="rounded-lg object-cover" data-ai-hint={pranaliImage.imageHint} />}
                </CardHeader>
                <CardContent className="text-center">
                    <CardTitle className="font-headline">{SITE_INFO.owners[0].name}</CardTitle>
                    <p className="text-sm text-accent">{SITE_INFO.owners[0].role}</p>
                </CardContent>
             </Card>
             <Card className="glass-card relative rotate-6 transition-transform hover:rotate-0 hover:scale-105 mt-8">
                <CardHeader>
                    {gaureshImage && <Image src={gaureshImage.imageUrl} alt={gaureshImage.description} width={200} height={250} className="rounded-lg object-cover" data-ai-hint={gaureshImage.imageHint} />}
                </CardHeader>
                <CardContent className="text-center">
                    <CardTitle className="font-headline">{SITE_INFO.owners[1].name}</CardTitle>
                    <p className="text-sm text-accent">{SITE_INFO.owners[1].role}</p>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
