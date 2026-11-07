import { siteConfig } from './site-config';

export function businessWhatsApp(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

export function enquiryMail(subject: string, body: string) {
  return `mailto:${siteConfig.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}