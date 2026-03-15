import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-8 w-8", className)}
    aria-label="B Beyond Glow Logo"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "hsl(var(--accent))" }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--primary))" }} />
      </linearGradient>
    </defs>
    <path
      d="M35 15 H 65 C 85 15, 85 30, 65 35 L 80 50 L 65 65 C 85 70, 85 85, 65 85 H 35 V 15 Z"
      stroke="url(#logoGradient)"
      strokeWidth="10"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="35" cy="50" r="7" fill="url(#logoGradient)" />
  </svg>
);
