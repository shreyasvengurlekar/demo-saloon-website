import { Instagram, Facebook, Youtube } from "lucide-react";

export const SITE_INFO = {
  name: "B Beyond Hair & Beauty Salon",
  title: "B Beyond Glow",
  tagline: "Elevate Your Style. Define Your Confidence.",
  owners: [
    { name: "Pranali Pingulkar", role: "Co-Owner" },
    { name: "Gauresh Pingulkar", role: "Co-Owner" },
  ],
  phones: ["+918263840723", "+919637720097", "+918850604105"],
  email: "hello@bbeyondsalon.com",
  address: "Near Bus Stand, Pushpa Hotel, Kelbai Mandir Road, Kudal, Sindhudurg, 416520",
  googleMapsLink: "https://www.google.com/maps/place/B+beyond+hair+%26+beauty+saloon+kudal,sindhudurg/@16.0110193,73.6849464,60m/data=!3m1!1e3!4m6!3m5!1s0x3bc00ff9c9fa6d43:0x5cdc64de762b62a0!8m2!3d16.0109857!4d73.6849705!16s%2Fg%2F11hdvwn9b3?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
  workingHours: [
    "Tue - Sun: 9:30 AM - 9:30 PM",
    "Monday: Closed",
  ],
  brandPositioning: "A premium unisex salon in Kudal, Sindhudurg, with a modern, elegant, and futuristic identity, delivering luxury, style, and trust for local customers.",
};

export const NAV_LINKS = [
  { href: "/", label: "Home", desktop: true, mobile: true },
  { href: "/services", label: "Services", desktop: true, mobile: true },
  { href: "/bridal", label: "Bridal", desktop: true, mobile: false },
  { href: "/gallery", label: "Gallery", desktop: true, mobile: true },
  { href: "/about", label: "About", desktop: true, mobile: true },
  { href: "/contact", label: "Contact", desktop: true, mobile: true },
];

export const SOCIAL_LINKS = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
];

export const SERVICES = {
  hair: [
    { name: "Haircut", description: "Modern and classic cuts for a fresh new look." },
    { name: "Hair Styling", description: "Perfect styling for any occasion, from casual to formal." },
    { name: "Hair Spa", description: "Rejuvenating treatments to nourish and revitalize your hair." },
    { name: "Hair Wash & Blow Dry", description: "A refreshing wash followed by a professional blow dry." },
    { name: "Hair Color", description: "Vibrant and long-lasting colors to match your style." },
    { name: "Highlights", description: "Subtle or bold highlights to add dimension." },
    { name: "Smoothening", description: "Frizz-free, smooth, and manageable hair." },
    { name: "Keratin", description: "Intensive treatment for strong, shiny, and healthy hair." },
    { name: "Rebonding", description: "Get permanently straight and sleek hair." },
  ],
  skin: [
    { name: "Facial", description: "Customized facials to cleanse, hydrate, and brighten your skin." },
    { name: "Cleanup", description: "Deep cleansing to remove impurities and refresh your skin." },
    { name: "Detan", description: "Effective treatments to remove sun tan and even out skin tone." },
    { name: "Bleach", description: "Instantly lighten facial hair and brighten your complexion." },
    { name: "Threading", description: "Precise and gentle hair removal for perfectly shaped brows." },
    { name: "Waxing", description: "Smooth and long-lasting hair removal for all body parts." },
  ],
  bridal: [
    { name: "Party Makeup", description: "Glamorous makeup for parties and special events." },
    { name: "Engagement Makeup", description: "Elegant and flawless makeup for your special day." },
    { name: "Bridal Makeup", description: "Exquisite bridal makeup to make you shine." },
    { name: "Saree Draping", description: "Perfectly draped sarees for a graceful and elegant look." },
    { name: "Hairdo", description: "Stunning hairstyles to complement your makeup and outfit." },
  ],
  hands_feet: [
    { name: "Manicure", description: "Pamper your hands with our classic and spa manicures." },
    { name: "Pedicure", description: "Relaxing pedicures for beautiful and healthy feet." },
  ],
  grooming: [
    { name: "Beard Grooming", description: "Shape, trim, and style your beard to perfection." },
    { name: "Shaving", description: "A classic, clean shave for a sharp and polished look." },
    { name: "Men’s Styling", description: "Complete styling solutions for the modern man." },
  ],
};

export const FAQ_DATA = [
    {
      question: "Do I need an appointment?",
      answer: "Yes, we highly recommend booking an appointment to ensure we can provide you with our undivided attention and avoid waiting times. You can book by calling us or via WhatsApp."
    },
    {
      question: "Do you accept walk-ins?",
      answer: "We do accept walk-ins if we have availability, but we prioritize clients with appointments. To guarantee a spot, it's always best to book in advance."
    },
    {
      question: "How do I book?",
      answer: "Booking is easy! You can call us directly at [phone number], or send us a message on WhatsApp. Our team will assist you in scheduling your service at a convenient time."
    },
    {
      question: "Are bridal packages customizable?",
      answer: "Absolutely! We understand every bride is unique. Our bridal packages are fully customizable to meet your specific needs and preferences. Contact us for a personal consultation."
    },
    {
      question: "Do you offer unisex services?",
      answer: "Yes, B Beyond is a premium unisex salon offering a full range of hair, beauty, and grooming services for both men and women."
    },
    {
      question: "How do I know the pricing?",
      answer: "For detailed pricing on our services and packages, please give us a call or send a message on WhatsApp. Our team will be happy to provide all the information you need."
    }
  ];

  export const STYLISTS = [
    { name: "Any Available Stylist" },
    { name: "Pranali Pingulkar (Senior Stylist)" },
    { name: "Gauresh Pingulkar (Senior Stylist)" },
    { name: "Jenny Wilson" },
    { name: "Robert Fox" },
  ];
