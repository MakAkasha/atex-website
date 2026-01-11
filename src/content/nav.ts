import { Locale } from '@/i18n/request'

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const nav = {
  ar: [
    { label: 'الرئيسية', href: '/' },
    { label: 'الخدمات', href: '/services' },
    { label: 'المنتجات', href: '/products' },
    { label: 'المشاريع', href: '/projects' },
    { label: 'المدونة', href: '/blog' },
    { label: 'من نحن', href: '/about' },
    { label: 'اتصل بنا', href: '/contact' },
  ] as NavItem[],
  en: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ] as NavItem[],
}

export function getNav(locale: Locale): NavItem[] {
  return nav[locale] || nav.ar
}