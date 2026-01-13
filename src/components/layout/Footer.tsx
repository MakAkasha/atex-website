import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import { getNav } from '@/content/nav'
import { companyInfo, socialLinks, getContactInfoForLocale } from '@/content/site'
import { createEmailLink, formatPhoneNumber } from '@/lib/utils'
import { getServices } from '@/content/services'

export function Footer() {
  const t = useTranslations()
  const locale = useLocale() as 'ar' | 'en'
  const nav = getNav(locale)
  const contact = getContactInfoForLocale(locale)
  const company = companyInfo
  const services = getServices(locale)

  const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook,
    github: Github,
  }

  return (
    <footer className="bg-background-secondary">
      <div className="container">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="block">
              <Image
                src="/ATEX-logo_white.svg"
                alt={locale === 'ar' ? company.nameAr : company.name}
                width={140}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <Image
              src="/ATEX Slogan.svg"
              alt=" slogan"
              width={140}
              height={24}
              className="h-6 w-auto"
            />
            <p className="text-sm text-text-secondary">
              {locale === 'ar' ? company.description.ar : company.description.en}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-text-primary">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-text-primary">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-text-primary">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <span className="text-sm text-text-secondary">{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  {formatPhoneNumber(contact.phone)}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a
                  href={createEmailLink(contact.email.general)}
                  className="text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  {contact.email.general}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sm text-text-secondary">{contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col gap-8 border-t border-border py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <p className="text-sm text-text-muted">{t('footer.followUs')}</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted transition-colors hover:text-primary"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} {locale === 'ar' ? company.nameAr : company.name}. {t('footer.allRightsReserved')}.
            </p>
            <Link
              href={`/${locale}/#image-credits`}
              className="text-sm text-text-muted transition-colors hover:text-primary"
            >
              {t('footer.imageCredits')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}