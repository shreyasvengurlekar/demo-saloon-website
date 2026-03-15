import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'B Beyond Hair & Beauty Salon - Premium Salon in Kudal, Sindhudurg',
  description: 'Experience luxury hair, beauty, and confidence at B Beyond Hair & Beauty Salon. A premium unisex salon in Kudal, Sindhudurg for modern styling and bridal beauty.',
  keywords: ['salon in Kudal', 'beauty salon in Sindhudurg', 'unisex salon in Kudal', 'bridal makeup in Kudal', 'hair salon in Sindhudurg', 'B Beyond Salon'],
  authors: [{ name: 'Pranali Pingulkar' }, { name: 'Gauresh Pingulkar' }],
  creator: 'B Beyond Salon',
  publisher: 'B Beyond Salon',
  metadataBase: new URL('https://bbeyondsalon.com'), // Replace with actual domain
  openGraph: {
    title: 'B Beyond Hair & Beauty Salon - Premium Salon in Kudal, Sindhudurg',
    description: 'Luxury hair, beauty, and confidence. Book your transformation today.',
    url: 'https://bbeyondsalon.com', // Replace with actual domain
    siteName: 'B Beyond Hair & Beauty Salon',
    images: [
      {
        url: '/og-image.jpg', // To be created
        width: 1200,
        height: 630,
        alt: 'B Beyond Hair & Beauty Salon',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B Beyond Hair & Beauty Salon - Premium Salon in Kudal, Sindhudurg',
    description: 'Experience luxury hair, beauty, and confidence at B Beyond Hair & Beauty Salon.',
    images: ['/og-image.jpg'], // To be created
  },
};

export const viewport: Viewport = {
  themeColor: '#C4A586',
  colorScheme: 'light',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased', inter.variable)}>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
