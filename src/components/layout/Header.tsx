'use client'

import { useState } from 'react'
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
  const nav = getNav(locale)
  const contact = getContactInfoForLocale(locale)
  const company = companyInfo

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const getOtherLocale = () => (locale === 'ar' ? 'en' : 'ar')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image
              src="/ATEX-logo.svg"
              alt={locale === 'ar' ? company.nameAr : company.name}
              width={120}
              height={40}
              priority
              className="h-10 w-auto"
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
                  pathname === `/${locale}${item.href}` ||
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
              className="hidden h-10 items-center rounded-md px-3 text-sm font-medium text-text-secondary transition-colors hover:bg-background-tertiary hover:text-text-primary md:flex"
            >
              {getOtherLocale().toUpperCase()}
            </Link>

            {/* Contact CTA */}
            <a
              href={createWhatsAppLink(contact.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden btn-primary btn h-10 md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              <span className="ms-2">{t('common.whatsapp')}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 text-text-secondary hover:bg-background-tertiary lg:hidden"
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
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href={createWhatsAppLink(contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn w-full"
                >
                  <Phone className="h-4 w-4" />
                  <span className="ms-2">{t('common.whatsapp')}</span>
                </a>
                <a
                  href={`mailto:${contact.email.general}`}
                  className="btn-secondary btn mt-3 w-full"
                >
                  <Mail className="h-4 w-4" />
                  <span className="ms-2">{t('common.email')}</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}