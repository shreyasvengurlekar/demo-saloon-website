import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <span className={cn("font-headline text-2xl font-bold", className)}>
    B Beyond
  </span>
);
