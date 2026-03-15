import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { Facebook, Instagram, MapPin, Phone, Mail, Youtube } from "lucide-react";

const Footer = () => {
  const whatsappUrl = getWhatsAppUrl(SITE_INFO.phones[0], "Hello, I'd like to inquire about your services.");

  return (
    <footer className="glass-card mt-20 border-t">
      <div className="container mx-auto grid grid-cols-1 gap-12 p-8 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-1 flex flex-col gap-4 md:col-span-4 lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <div>
              <p className="font-headline text-2xl font-bold">B Beyond Glow</p>
              <p className="text-sm text-muted-foreground">{SITE_INFO.tagline}</p>
            </div>
          </Link>
          <p className="text-muted-foreground">{SITE_INFO.brandPositioning}</p>
          <div className="flex gap-2">
            {SOCIAL_LINKS.map((social) => (
              <Button key={social.name} variant="outline" size="icon" asChild className="rounded-full">
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Button variant="link" asChild className="justify-start p-0 text-muted-foreground hover:text-primary">
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
              <a href={SITE_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">{SITE_INFO.address}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
              <a href={`tel:${SITE_INFO.phones[0]}`} className="text-muted-foreground hover:text-primary">{SITE_INFO.phones[0]}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
              <a href={`mailto:${SITE_INFO.email}`} className="text-muted-foreground hover:text-primary">{SITE_INFO.email}</a>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="font-headline text-lg font-semibold">Hours</h3>
          <ul className="flex flex-col gap-2 text-muted-foreground">
            {SITE_INFO.workingHours.map((line, index) => (
              <li key={index}>
                {line}
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div className="mt-8 border-t border-border py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} B Beyond Hair & Beauty Salon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
