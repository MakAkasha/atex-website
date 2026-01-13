import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, Target, Shield, Zap, Users, Award, TrendingUp, CheckCircle } from 'lucide-react'
import { getContactInfoForLocale } from '@/content/site'
import { createWhatsAppLink } from '@/lib/utils'

export default function AboutPage() {
  const t = useTranslations()
  const locale = useLocale().replace('/', '') as 'ar' | 'en' || 'ar'
  const contact = getContactInfoForLocale(locale)

  const values = [
    {
      icon: Award,
      title: t('about.values.items.0.title'),
      description: t('about.values.items.0.description'),
    },
    {
      icon: Users,
      title: t('about.values.items.1.title'),
      description: t('about.values.items.1.description'),
    },
    {
      icon: Shield,
      title: t('about.values.items.2.title'),
      description: t('about.values.items.2.description'),
    },
    {
      icon: Zap,
      title: t('about.values.items.3.title'),
      description: t('about.values.items.3.description'),
    },
  ]

  const sectors = [
    {
      icon: 'home',
      title: locale === 'ar' ? 'المباني السكنية' : 'Residential Buildings',
    },
    {
      icon: 'building',
      title: locale === 'ar' ? 'المجمعات السكنية' : 'Residential Compounds',
    },
    {
      icon: 'briefcase',
      title: locale === 'ar' ? 'المباني الإدارية' : 'Commercial Buildings',
    },
    {
      icon: 'shopping-cart',
      title: locale === 'ar' ? 'الأسواق التجارية' : 'Retail Markets',
    },
    {
      icon: 'heart-pulse',
      title: locale === 'ar' ? 'العيادات والمستشفيات' : 'Clinics and Hospitals',
    },
    {
      icon: 'tool',
      title: locale === 'ar' ? 'الصيانة المختصة' : 'Specialized Maintenance',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center py-20">
            <h1 className="text-h1 font-semibold text-text-primary mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-text-secondary">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-h2 mb-6 text-text-primary text-center">
              {locale === 'ar' ? 'من نحن' : 'Who We Are'}
            </h2>
            <p className="text-body text-text-secondary text-center leading-relaxed">
              {t('about.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-h3 text-text-primary">
                  {t('about.vision.title')}
                </h2>
              </div>
              <p className="text-body text-text-secondary">
                {t('about.vision.content')}
              </p>
            </div>
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h2 className="text-h3 text-text-primary">
                  {t('about.mission.title')}
                </h2>
              </div>
              <p className="text-body text-text-secondary">
                {t('about.mission.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-h2 mb-8 text-center text-text-primary">
              {t('about.values.title')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value, index) => (
                <div key={index} className="card p-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-h5 text-text-primary">{value.title}</h3>
                    <p className="text-body-small text-text-muted">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-h2 mb-4 text-center text-text-primary">
              {t('sectors.title')}
            </h2>
            <p className="text-body text-text-secondary text-center mb-12">
              {t('sectors.subtitle')}
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {sectors.map((sector, index) => (
                <div key={index} className="card p-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium text-text-primary">{sector.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-primary">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">500+</p>
              <p className="text-primary-100">{t('about.stats.projects')}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">300+</p>
              <p className="text-primary-100">{t('about.stats.clients')}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">10+</p>
              <p className="text-primary-100">{t('about.stats.years')}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">50+</p>
              <p className="text-primary-100">{t('about.stats.team')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-h2 mb-8 text-center text-text-primary">
              {t('whyUs.title')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {t.raw('whyUs.points').map((point: { title: string; description: string }, index: number) => (
                <div key={index} className="card p-6">
                  <h3 className="mb-2 text-h5 text-text-primary">{point.title}</h3>
                  <p className="text-body-small text-text-muted">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-h2 mb-6 text-white">
              {locale === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              {locale === 'ar'
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص.'
                : 'Contact us today for a free consultation and customized quote.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/quote`}
                className="btn h-14 bg-white text-primary hover:bg-background"
              >
                {t('common.quote')}
                <ArrowRight className="me-2 h-5 w-5" />
              </Link>
              <a
                href={createWhatsAppLink(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn h-14 bg-primary-light border-2 border-white text-white hover:bg-primary-lighter"
              >
                {t('common.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}