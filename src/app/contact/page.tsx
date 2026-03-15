
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SITE_INFO } from '@/lib/constants';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/forms/contact-form';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help! Reach out with any questions or to schedule your next appointment."
      />
      <section className="container px-6 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <Phone className="w-8 h-8 text-primary" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">For appointments and inquiries:</p>
                {SITE_INFO.phones.map(phone => (
                   <a key={phone} href={`tel:${phone}`} className="block text-lg font-semibold text-primary hover:underline">{phone}</a>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <Mail className="w-8 h-8 text-primary" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">For general questions:</p>
                <a href={`mailto:${SITE_INFO.email}`} className="block text-lg font-semibold text-primary hover:underline break-all">{SITE_INFO.email}</a>
              </CardContent>
            </Card>
             <Card>
              <CardHeader className="flex-row items-center gap-4">
                <MapPin className="w-8 h-8 text-primary" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                 <p className="text-muted-foreground">Find us at:</p>
                <a href={SITE_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-primary hover:underline">{SITE_INFO.address}</a>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
