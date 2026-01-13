import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Play, Star, Zap, Shield, Users, Award } from 'lucide-react'
import { getServices } from '@/content/services'
import { getFeaturedProjects } from '@/content/projects'
import { getContactInfoForLocale } from '@/content/site'
import { createWhatsAppLink, createEmailLink } from '@/lib/utils'

export default function HomePage() {
  const t = useTranslations()
  const locale = useLocale().replace('/', '') as 'ar' | 'en' || 'ar'
  const services = getServices(locale)
  const projects = getFeaturedProjects(locale)
  const contact = getContactInfoForLocale(locale)

  const whyUsPoints: { icon: React.ElementType; title: string; description: string }[] = t.raw('whyUs.points').map((point: { title: string; description: string }, index: number) => ({
    icon: [Award, Users, Shield, Zap, Check, Star][index] as React.ElementType,
    title: point.title,
    description: point.description,
  }))

  const processSteps: { step: string; title: string; description: string }[] = t.raw('process.steps').map((step: { title: string; description: string }, index: number) => ({
    step: String(index + 1),
    title: step.title,
    description: step.description,
  }))

  const testimonials = [
    {
      name: locale === 'ar' ? 'أحمد السعيد' : 'Ahmed Al-Saeed',
      role: locale === 'ar' ? 'مالك فيلا' : 'Villa Owner',
      quote: locale === 'ar'
        ? 'تجربة رائعة مع فريق ATEX. الأنظمة الذكية تعمل بشكل مثالي وتفوقت توقعاتي.'
        : 'Excellent experience with the ATEX team. The smart systems work perfectly and exceeded my expectations.',
      rating: 5,
    },
    {
      name: locale === 'ar' ? 'محمد العتيبي' : 'Mohammed Al-Otaibi',
      role: locale === 'ar' ? 'مدير شركة' : 'Company Manager',
      quote: locale === 'ar'
        ? 'نظام إدارة المباني الذكي حسن الكفاءة بشكل كبير وأدركنا توفير كبير في التكاليف.'
        : 'The smart building management system significantly improved efficiency and we achieved significant cost savings.',
      rating: 5,
    },
    {
      name: locale === 'ar' ? 'خالد الغامدي' : 'Khalid Al-Ghamdi',
      role: locale === 'ar' ? 'مدير فندق' : 'Hotel Manager',
      quote: locale === 'ar'
        ? 'الأنظمة التقنية عززت عملياتنا وحسنت تجربة العملاء بشكل كبير.'
        : 'The technical systems enhanced our operations and significantly improved customer experience.',
      rating: 5,
    },
  ]

  const clientLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Facebook.svg/2560px-Facebook.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Video Background - Hero section only */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-h1 font-semibold text-white leading-tight mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/quote`}
                  className="btn-primary btn h-14 px-8"
                >
                  {t('hero.ctaPrimary')}
                  <ArrowRight className={`${locale === 'ar' ? 'me-2' : 'ms-2'} h-5 w-5`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="py-8 bg-background-secondary">
        <div className="container">
          <p className="text-center text-body-small text-text-muted mb-6">
            {t('clients.title')}
          </p>
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-12 items-center">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-60 grayscale hover:grayscale-0 transition-all"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-background">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-h2 mb-4 text-text-primary">{t('services.title')}</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={`/${locale}/services/${service.slug}`}
                className="card group"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-h4 text-text-primary">{service.title}</h3>
                <p className="text-body-small text-text-muted mb-4">
                  {service.shortDescription}
                </p>
                <div className="flex items-center text-primary font-medium">
                  {t('common.learnMore')}
                  <ArrowRight className={`${locale === 'ar' ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={`/${locale}/services`} className="btn-text">
              {t('services.viewAll')}
              <ArrowRight className={`${locale === 'ar' ? 'mr-2' : 'ml-2'} h-4 w-4`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-h2 mb-4 text-text-primary">{t('sectors.title')}</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              {t('sectors.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '🏠', title: t('sectors.residential') },
              { icon: '🏢', title: t('sectors.compounds') },
              { icon: '🏛️', title: t('sectors.commercial') },
              { icon: '🛒', title: t('sectors.retail') },
              { icon: '🏥', title: t('sectors.healthcare') },
              { icon: '🔧', title: t('sectors.maintenance') },
            ].map((sector, index) => (
              <div key={index} className="card p-6 flex items-center gap-4">
                <span className="text-4xl">{sector.icon}</span>
                <span className="font-medium text-text-primary">{sector.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ATEX */}
      <section className="section bg-background">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-h2 mb-4 text-text-primary">{t('whyUs.title')}</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              {t('whyUs.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyUsPoints.map((point, index) => (
              <div key={index} className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <point.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-h5 text-text-primary">{point.title}</h3>
                <p className="text-body-small text-text-muted">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-h2 mb-4 text-text-primary">{t('process.title')}</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            <div className="grid gap-12 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center md:text-start">
                  <div className="relative mb-6 flex justify-center md:justify-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg z-10">
                      {step.step}
                    </div>
                    <div className="absolute left-1/2 top-1/2 h-full w-0.5 bg-primary/30 -translate-x-1/2 hidden md:block" />
                  </div>
                  <h3 className="mb-2 text-h5 text-text-primary">{step.title}</h3>
                  <p className="text-body-small text-text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section bg-background">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-h2 mb-4 text-text-primary">{t('projects.title')}</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                href={`/${locale}/projects/${project.slug}`}
                className="card overflow-hidden group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.gallery[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-h4 text-text-primary">{project.title}</h3>
                  <p className="text-body-small text-text-muted mb-4">
                    {project.client}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-small text-text-muted">{project.date}</span>
                    <span className="text-primary font-medium">
                      {t('projects.viewProject')}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={`/${locale}/projects`} className="btn-text">
              {t('projects.viewAll')}
              <ArrowRight className={`${locale === 'ar' ? 'mr-2' : 'ml-2'} h-4 w-4`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-h2 mb-4 text-text-primary">{t('testimonials.title')}</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mb-4 text-body-small text-text-secondary italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium text-text-primary">{testimonial.name}</p>
                  <p className="text-small text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">500+</p>
              <p className="text-primary-100">{locale === 'ar' ? 'مشروع منجز' : 'Projects Completed'}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">300+</p>
              <p className="text-primary-100">{locale === 'ar' ? 'عميل سعيد' : 'Happy Clients'}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">10+</p>
              <p className="text-primary-100">{locale === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">50+</p>
              <p className="text-primary-100">{locale === 'ar' ? 'فريق متخصص' : 'Team Members'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-h2 mb-6 text-white">
              {locale === 'ar'
                ? 'جاهز لتحويل مشروعك إلى تقنية ذكية؟'
                : 'Ready to Transform Your Project with Smart Technology?'}
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              {locale === 'ar'
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص.'
                : 'Contact us today for a free consultation and a customized quote.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/quote`}
                className="btn h-14 bg-white text-primary hover:bg-background hover:text-primary"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className={`${locale === 'ar' ? 'mr-2' : 'ml-2'} h-5 w-5`} />
              </Link>
              <a
                href={createWhatsAppLink(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn h-14 bg-primary-light border-2 border-white text-white hover:bg-primary-lighter"
              >
                <Play className={`${locale === 'ar' ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function formatPhoneNumber(phone: string) {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
}

function MessageCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function Mail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function Phone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}