
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Gift } from "lucide-react";
import Link from "next/link";

function OfferCard({ offer }: { offer: { title: string; content: string } }) {
  return (
    <div className="relative overflow-hidden rounded-2xl p-1 bg-gradient-to-br from-primary via-accent to-primary transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50">
        <Card className="glass-card h-full border-0">
          <CardHeader>
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Gift className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-glow">{offer.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{offer.content}</CardDescription>
            <Button asChild variant="default" className="mt-6 rounded-full">
              <Link href="/book-appointment">
                Claim Offer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
    </div>
  );
}

export function OffersSection() {
    const offers = [
        { title: "Festive Glow Package", content: "Embrace the festive season with a radiant new look. Our package includes a signature facial, a stylish haircut, and a luxury manicure." },
        { title: "Bridal Beauty Consultation", content: "Let us be a part of your special day. Get a complimentary consultation with our bridal experts to craft your perfect wedding look." },
        { title: "Men's Grooming Special", content: "Experience the art of modern grooming. Get a precision haircut, a sharp beard trim, and a refreshing face cleanup at a special price." },
    ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold text-glow md:text-5xl">Exclusive Offers</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Indulge in luxury with our special packages and seasonal promotions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
                <OfferCard key={offer.title} offer={offer} />
            ))}
        </div>
      </div>
    </section>
  );
}
