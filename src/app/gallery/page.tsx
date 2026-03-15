import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith('gallery-')
  );

  return (
    <>
      <PageHeader
        title="Our Gallery"
        subtitle="A glimpse into the transformations and artistry happening every day at B Beyond Salon."
      />
      <section className="container px-4 md:px-8">
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {galleryImages.map((image) => (
            <Card key={image.id} className="mb-4 break-inside-avoid overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
