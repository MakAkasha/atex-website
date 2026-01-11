import { Locale } from '@/i18n/request'

export interface ContactInfo {
  address: {
    ar: string
    en: string
  }
  phone: string
  whatsapp: string
  email: {
    general: string
    sales: string
  }
  workingHours: {
    ar: string
    en: string
  }
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface CompanyInfo {
  name: string
  nameAr: string
  tagline: {
    ar: string
    en: string
  }
  description: {
    ar: string
    en: string
  }
}

export const contactInfo: ContactInfo = {
  address: {
    ar: 'حي الشرفية – طريق الملك فهد، جدة',
    en: 'Al Sharafiyah District - King Fahd Road, Jeddah',
  },
  phone: '0521345567',
  whatsapp: '0521345567',
  email: {
    general: 'info@atex.sa',
    sales: 'sales@atex.sa',
  },
  workingHours: {
    ar: 'الأحد - الخميس: 9:00 ص - 6:00 م',
    en: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
  },
}

export const socialLinks: SocialLink[] = [
  { name: 'Twitter', href: 'https://twitter.com/atex_sa', icon: 'twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/atex', icon: 'linkedin' },
  { name: 'Instagram', href: 'https://instagram.com/atex_sa', icon: 'instagram' },
  { name: 'Facebook', href: 'https://facebook.com/atex', icon: 'facebook' },
]

export const companyInfo: CompanyInfo = {
  name: 'ATEX',
  nameAr: 'خبراء التقنية المتقدمة',
  tagline: {
    ar: 'خبراء التقنية المتقدمة',
    en: 'Advanced Technical Experts',
  },
  description: {
    ar: 'ATEX هي الشريك الموثوق لحلول المنازل الذكية والأنظمة الذكية في المملكة العربية السعودية',
    en: 'ATEX is your trusted partner for smart home and smart systems solutions in Saudi Arabia',
  },
}

export function getContactInfo(locale: Locale) {
  return {
    address: locale === 'ar' ? contactInfo.address.ar : contactInfo.address.en,
    phone: contactInfo.phone,
    whatsapp: contactInfo.whatsapp,
    email: contactInfo.email,
    workingHours: locale === 'ar' ? contactInfo.workingHours.ar : contactInfo.workingHours.en,
  }
}

export function getContactInfoForLocale(locale: Locale) {
  return {
    address: locale === 'ar' ? contactInfo.address.ar : contactInfo.address.en,
    phone: contactInfo.phone,
    whatsapp: contactInfo.whatsapp,
    email: contactInfo.email,
    workingHours: locale === 'ar' ? contactInfo.workingHours.ar : contactInfo.workingHours.en,
  }
}