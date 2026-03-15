
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star, StarHalf } from "lucide-react";

function TestimonialCard({ customerName, avatarId, rating, content }: { customerName: string, avatarId: string, rating: number, content: string }) {
  const avatar = PlaceHolderImages.find(img => img.id === avatarId);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} className="w-5 h-5 text-accent fill-accent" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<StarHalf key={i} className="w-5 h-5 text-accent fill-accent" />);
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-accent" />);
      }
    }
    return stars;
  };

  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="p-1 h-full">
        <Card className="glass-card flex flex-col justify-between h-full">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary">
                {avatar && <AvatarImage src={avatar.imageUrl} alt={avatar.description} data-ai-hint={avatar.imageHint} />}
                <AvatarFallback>{customerName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-headline text-lg font-bold">{customerName}</h3>
                <div className="flex gap-0.5 mt-1">{renderStars()}</div>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground italic">"{content}"</p>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    { name: "Priya S.", avatar: "testimonial-avatar-1", rating: 5, content: "An absolutely amazing experience! The stylists are true artists. I've never felt more confident. B Beyond is my go-to salon from now on!" },
    { name: "Rahul K.", avatar: "testimonial-avatar-2", rating: 4.5, content: "Great service and a very professional team. I got the best haircut of my life here. The ambiance is modern and relaxing. Highly recommended!" },
    { name: "Anjali M.", avatar: "testimonial-avatar-1", rating: 5, content: "The bridal makeup was a dream come true. Pranali and her team made me feel like a queen on my special day. Thank you for the wonderful memories!" },
    { name: "Vikram P.", avatar: "testimonial-avatar-2", rating: 5, content: "Top-notch grooming services for men. The attention to detail is impressive. It's the perfect place to unwind and get a sharp new look." },
    { name: "Sneha G.", avatar: "testimonial-avatar-1", rating: 4.5, content: "My hair spa treatment was pure bliss. My hair has never felt so soft and healthy. The luxurious feel of the salon is just the cherry on top." },
  ];

  return (
    <section className="bg-background/50 py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold text-glow md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stories of transformations and renewed confidence from our valued clients.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-16"
        >
          <CarouselContent>
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} customerName={t.name} avatarId={t.avatar} rating={t.rating} content={t.content} />
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
