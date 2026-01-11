import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, Shield } from 'lucide-react'
import { getServices } from '@/content/services'

export default function ServicesPage() {
  const t = useTranslations()
  const locale = useLocale().replace('/', '') as 'ar' | 'en' || 'ar'
  const services = getServices(locale)

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-h1 mb-6 text-text-primary">
              {t('services.title')}
            </h1>
            <p className="text-lg text-text-secondary">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/${locale}/services/${service.slug}`}
                className="card group overflow-hidden"
              >
                {service.image && (
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Shield className="h-6 w-6" />
                      </div>
                      <h2 className="mb-2 text-h4 text-white">{service.title}</h2>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <p className="text-body-small text-text-muted mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    {t('common.learnMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}