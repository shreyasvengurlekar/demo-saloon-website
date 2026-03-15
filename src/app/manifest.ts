import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'B Beyond Glow',
    short_name: 'B Beyond',
    description: 'B Beyond Hair & Beauty Salon - Premium Salon in Kudal, Sindhudurg. Hair, Beauty, Confidence. Beyond.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111319',
    theme_color: '#4928BF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
