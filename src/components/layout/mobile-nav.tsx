import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

const MobileNav = () => {
    const mobileLinks = NAV_LINKS.filter(link => link.mobile);

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-border bg-background/80 backdrop-blur-lg">
            <ul className="flex h-full items-center justify-around">
                {mobileLinks.map((link) => (
                    <li key={link.href} className="flex-1">
                        <Button variant="ghost" asChild className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-none px-2 text-xs">
                            <Link href={link.href}>
                                <link.icon className="h-5 w-5" />
                                <span>{link.label}</span>
                            </Link>
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MobileNav;
