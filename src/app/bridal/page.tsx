import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BridalPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'bridal-hero');

  const bridalServices = [
    'Pre-Bridal Skincare & Consultation',
    'Bridal Makeup (HD & Airbrush)',
    'Engagement & Sangeet Makeup',
    'Elaborate Bridal Hairstyling',
    'Saree Draping & Styling',
    'Manicure, Pedicure & Nail Art',
  ];

  return (
    <>
      <PageHeader
        title="Exquisite Bridal Beauty"
        subtitle="Look and feel absolutely radiant on your once-in-a-lifetime day. Our expert bridal team is here to make your dream look a reality."
      />
      <section className="container px-4 md:px-8">
        <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden rounded-2xl">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </section>
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">Your Perfect Day, Your Perfect Look</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At B Beyond, we understand that your wedding day is one of the most important days of your life. Our team of specialized bridal artists, led by Pranali Pingulkar, are masters of creating breathtaking bridal looks that enhance your natural beauty and last throughout your special day.
            </p>
            <p className="mt-4 text-muted-foreground">
              We offer a comprehensive range of bridal services, from initial consultation to the final touch-up. We use only the highest quality, long-lasting products to ensure you are picture-perfect from every angle.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/book-appointment">Book Your Bridal Consultation</Link>
            </Button>
          </div>
          <div className="glass-card p-8">
            <h3 className="font-headline text-2xl font-semibold mb-6">Our Bridal Packages Include</h3>
            <ul className="space-y-4">
              {bridalServices.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
