import { cn } from '@/lib/utils';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div className={cn('container py-16 md:py-24 text-center', className)}>
      <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl text-glow">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
