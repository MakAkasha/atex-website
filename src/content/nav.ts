import { Locale } from '@/i18n/request'

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const nav = {
  ar: [
    { label: 'الرئيسية', href: '/' },
    { label: 'حلول تقنية', href: '/services' },
    { label: 'أنظمة مختصة', href: '/products' },
    { label: 'المشاريع', href: '/projects' },
    { label: 'من نحن', href: '/about' },
    { label: 'تواصل معنا', href: '/contact' },
  ] as NavItem[],
  en: [
    { label: 'Home', href: '/' },
    { label: 'Technical Solutions', href: '/services' },
    { label: 'Specialized Systems', href: '/products' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ] as NavItem[],
}

export function getNav(locale: Locale): NavItem[] {
  return nav[locale] || nav.ar
}