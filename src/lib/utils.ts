import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsAppUrl(phone: string, message: string) {
  const internationalPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${internationalPhone}?text=${encodeURIComponent(message)}`;
}
