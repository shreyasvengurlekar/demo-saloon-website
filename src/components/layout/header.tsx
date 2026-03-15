import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 hidden md:block">
      <div className="container mx-auto flex h-20 items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-headline text-xl font-bold">B Beyond Hair & Beauty Salon</span>
        </Link>
        
        <nav className="glass-card p-1">
          <ul className="flex items-center gap-2">
            {NAV_LINKS.filter(link => link.desktop).map((link) => (
              <li key={link.href}>
                <Button variant="ghost" asChild>
                  <Link href={link.href} className="flex items-center gap-2 px-4 py-2">
                    {link.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full font-bold shadow-lg shadow-primary/20">
          <Link href="/book-appointment">Book Appointment</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
