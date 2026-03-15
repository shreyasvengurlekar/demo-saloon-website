'use client';

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto flex h-20 items-center justify-between p-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href} className={cn("text-muted-foreground", pathname === link.href && "text-foreground font-semibold")}>
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <Button asChild className="hidden md:flex rounded-full">
                <Link href="/book-appointment">Book an appointment</Link>
            </Button>
            <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                <div className="p-6">
                    <Link href="/" className="mb-8 block" onClick={() => setIsOpen(false)}>
                        <Logo />
                    </Link>
                    <nav className="flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn("text-lg text-muted-foreground", pathname === link.href && "text-foreground font-semibold")}
                        >
                        {link.label}
                        </Link>
                    ))}
                    </nav>
                    <Button asChild size="lg" className="w-full mt-8 rounded-full">
                        <Link href="/book-appointment">Book an appointment</Link>
                    </Button>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
