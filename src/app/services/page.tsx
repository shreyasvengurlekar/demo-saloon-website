import { PageHeader } from '@/components/page-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';
import { Gem, Scissors, Sparkles, User, Footprints } from 'lucide-react';

const serviceCategories = [
  { id: 'hair', title: 'Hair Care & Styling', icon: Scissors, services: SERVICES.hair },
  { id: 'skin', title: 'Skin & Beauty', icon: Gem, services: SERVICES.skin },
  { id: 'bridal', title: 'Bridal & Makeup', icon: Sparkles, services: SERVICES.bridal },
  { id: 'grooming', title: "Men's Grooming", icon: User, services: SERVICES.grooming },
  { id: 'hands_feet', title: 'Hands & Feet', icon: Footprints, services: SERVICES.hands_feet },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Explore our comprehensive range of luxury salon services, designed to make you look and feel your absolute best."
      />
      <section className="container px-4 md:px-8">
        <Accordion type="single" collapsible defaultValue="hair" className="w-full max-w-4xl mx-auto">
          {serviceCategories.map((category) => (
            <AccordionItem key={category.id} value={category.id}>
              <AccordionTrigger className="text-2xl font-headline hover:no-underline">
                <div className="flex items-center gap-4">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service) => (
                    <Card key={service.name} className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
