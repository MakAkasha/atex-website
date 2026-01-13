'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getNav } from '@/content/nav'
import { companyInfo, getContactInfoForLocale } from '@/content/site'
import { createWhatsAppLink } from '@/lib/utils'

export function Header() {
  const t = useTranslations()
  const locale = useLocale() as 'ar' | 'en'
  const pathname = usePathname()
  
  // Force re-render when locale changes
  const [localeKey, setLocaleKey] = useState(locale)

  useEffect(() => {
    setLocaleKey(locale)
  }, [locale])

  const nav = getNav(locale)
  const contact = getContactInfoForLocale(locale)
  const company = companyInfo

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const getOtherLocale = () => (locale === 'ar' ? 'en' : 'ar')

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if we're on home page
  const isHomePage = pathname === `/${locale}` || pathname === '/' || pathname === `/${localeKey}`

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        isHomePage && !isScrolled
          ? 'bg-transparent border-transparent'
          : 'border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      )}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image
              src={isHomePage && !isScrolled ? '/ATEX-logo_white.svg' : '/ATEX-logo.svg'}
              alt={locale === 'ar' ? company.nameAr : company.name}
              width={120}
              height={40}
              priority
              className="h-10 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  isHomePage && !isScrolled
                    ? 'text-white/90 hover:text-white'
                    : pathname === `/${locale}${item.href}` ||
                      (item.href !== '/' && pathname.startsWith(`/${locale}${item.href}`))
                    ? 'text-primary'
                    : 'text-text-secondary'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Language Switcher */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <Link
              href={pathname.replace(`/${locale}`, `/${getOtherLocale()}`)}
              className={cn(
                'hidden h-10 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-white/10 md:flex',
                isHomePage && !isScrolled ? 'text-white' : 'text-text-secondary hover:bg-background-tertiary hover:text-text-primary'
              )}
            >
              {getOtherLocale().toUpperCase()}
            </Link>

            {/* Contact CTA */}
            <a
              href={createWhatsAppLink(contact.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'hidden btn h-10 md:inline-flex px-5',
                isHomePage && !isScrolled ? 'bg-white text-primary hover:bg-white/90' : 'btn-primary',
                locale === 'ar' ? 'flex-row-reverse' : ''
              )}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="whitespace-nowrap">{t('common.whatsapp')}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={cn(
                'rounded-md p-2 transition-colors lg:hidden',
                isHomePage && !isScrolled ? 'text-white hover:bg-white/10' : 'text-text-secondary hover:bg-background-tertiary'
              )}
              aria-label={t('common.menu')}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="border-t border-border bg-background">
            <nav className="container py-4">
              <ul className="space-y-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={`/${locale}${item.href}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'flex rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-background-tertiary',
                        pathname === `/${locale}${item.href}` ||
                          (item.href !== '/' && pathname.startsWith(`/${locale}${item.href}`))
                          ? 'bg-background-tertiary text-primary'
                          : 'text-text-secondary'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Language Switcher */}
              <div className="mt-6 pt-6 border-t border-border">
                <Link
                  href={pathname.replace(`/${locale}`, `/${getOtherLocale()}`)}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-text-secondary hover:bg-background-tertiary"
                >
                  <span className="text-xs uppercase">{getOtherLocale()}</span>
                  <span className="text-text-muted">/</span>
                  <span className="text-xs uppercase">{locale}</span>
                </Link>
              </div>

              {/* Mobile Contact */}
              <div className="mt-4 pt-4 border-t border-border space-y-3">
                <a
                  href={createWhatsAppLink(contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'btn-primary btn w-full flex items-center justify-center gap-2',
                    locale === 'ar' ? 'flex-row-reverse' : ''
                  )}
                  dir={locale === 'ar' ? 'rtl' : 'ltr'}
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{t('common.whatsapp')}</span>
                </a>
                <a
                  href={`mailto:${contact.email.general}`}
                  className={cn(
                    'btn-secondary btn w-full flex items-center justify-center gap-2',
                    locale === 'ar' ? 'flex-row-reverse' : ''
                  )}
                  dir={locale === 'ar' ? 'rtl' : 'ltr'}
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{t('common.email')}</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}