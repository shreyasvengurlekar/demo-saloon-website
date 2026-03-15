import { generateMarketingContent } from "@/ai/flows/generate-marketing-content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_INFO } from "@/lib/constants";
import { ArrowRight, Gift } from "lucide-react";
import Link from "next/link";

async function OfferCard({ offerName }: { offerName: string }) {
  const offerContent = await generateMarketingContent({
    contentType: "offer",
    salonName: SITE_INFO.name,
    location: "Kudal, Sindhudurg",
    brandPositioning: SITE_INFO.brandPositioning,
    owners: SITE_INFO.owners,
    tagline: SITE_INFO.tagline,
    offerName: offerName,
  });

  return (
    <div className="relative overflow-hidden rounded-2xl p-1 bg-gradient-to-br from-primary via-accent to-primary transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50">
        <Card className="glass-card h-full border-0">
          <CardHeader>
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Gift className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-glow">{offerContent.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{offerContent.content}</CardDescription>
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
        "Festive Glow Package",
        "Bridal Beauty Consultation",
        "Men's Grooming Special",
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
                <OfferCard key={offer} offerName={offer} />
            ))}
        </div>
      </div>
    </section>
  );
}
