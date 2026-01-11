import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, HelpCircle, MessageCircle, FileText, Star, Zap, Shield, Clock } from 'lucide-react'
import { getServiceBySlug, getRelatedServices } from '@/content/services'
import { getProjectsByService } from '@/content/projects'
import { getContactInfoForLocale } from '@/content/site'
import { createWhatsAppLink } from '@/lib/utils'

export async function generateStaticParams() {
  const { services } = await import('@/content/services')
  return services.map(service => ({ slug: service.slug }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const service = getServiceBySlug(slug, locale as 'ar' | 'en')
  const relatedServices = getRelatedServices(service?.id || '', locale as 'ar' | 'en')
  const relatedProjects = service ? getProjectsByService(service.id, locale as 'ar' | 'en') : []
  const contact = getContactInfoForLocale(locale as 'ar' | 'en')

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-h2 mb-4 text-text-primary">
            {locale === 'ar' ? 'الخدمة غير موجودة' : 'Service Not Found'}
          </h1>
          <Link href={`/${locale}/services`} className="btn-primary btn">
            {locale === 'ar' ? 'العودة للخدمات' : 'Back to Services'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="grid gap-12 py-16 lg:grid-cols-2 lg:py-24 items-center">
            <div className="text-center lg:text-start">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Star className="h-4 w-4" />
                <span>{service.title}</span>
              </div>
              <h1 className="text-h1 mb-6 text-text-primary leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href={`/${locale}/quote`}
                  className="btn-primary btn h-12 px-8"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  {locale === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Link>
                <a
                  href={createWhatsAppLink(contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn h-12 px-8"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </a>
              </div>
            </div>
            {service.image && (
              <div className="relative">
                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-text-primary">10+</p>
                      <p className="text-xs text-text-muted">
                        {locale === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Benefits Bar */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="bg-primary">
          <div className="container py-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center justify-center gap-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="font-medium">{service.benefits[0]}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="font-medium">{service.benefits[1]}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="font-medium">{service.benefits[2]}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What Is */}
      {service.whatIs && (
        <section className="section bg-background">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <h2 className="text-h2 mb-4 text-text-primary">
                  {locale === 'ar' ? 'ما هو؟' : 'What Is It?'}
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              </div>
              <p className="text-body text-text-secondary text-center leading-relaxed">
                {service.whatIs}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="section bg-background-secondary">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'الفوائد' : 'Benefits'}
              </h2>
              <p className="text-body text-text-secondary max-w-2xl mx-auto">
                {locale === 'ar' 
                  ? 'اكتشف كيف يمكن لخدماتنا تحسين حياتك اليومية'
                  : 'Discover how our services can improve your daily life'}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="card hover:shadow-lg transition-shadow">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="text-body text-text-secondary">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What's Included */}
      {service.whatsIncluded && service.whatsIncluded.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'ماذا يتضمن؟' : 'What\'s Included'}
              </h2>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-4 md:grid-cols-2">
                {service.whatsIncluded.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background-secondary">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-body text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Use Cases */}
      {service.useCases && service.useCases.length > 0 && (
        <section className="section bg-background-secondary">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'حالات الاستخدام' : 'Use Cases'}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {service.useCases.map((useCase, index) => (
                <div key={index} className="card px-6 py-4">
                  <span className="text-body font-medium text-text-primary">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scenarios */}
      {service.scenarios && service.scenarios.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'سيناريوهات الاستخدام' : 'Usage Scenarios'}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {service.scenarios.map((scenario, index) => (
                <div key={index} className="card hover:shadow-lg transition-shadow">
                  <h3 className="mb-3 text-h5 text-text-primary">{scenario.title}</h3>
                  <p className="text-body-small text-text-muted">{scenario.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="section bg-background-secondary">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'معرض الصور' : 'Gallery'}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
              </h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-4">
                {service.faq.map((faq, index) => (
                  <div key={index} className="card hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <HelpCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-medium text-text-primary">{faq.question}</h3>
                        <p className="text-body-small text-text-muted">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section bg-background-secondary">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'المشاريع ذات الصلة' : 'Related Projects'}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedProjects.map((project) => (
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
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-h4 text-text-primary">{project.title}</h3>
                    <p className="text-body-small text-text-muted mb-4">
                      {project.client}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      {locale === 'ar' ? 'عرض المشروع' : 'View Project'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'خدمات ذات صلة' : 'Related Services'}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/${locale}/services/${relatedService.slug}`}
                  className="card group hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Star className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-h5 text-text-primary">{relatedService.title}</h3>
                  <p className="text-body-small text-text-muted mb-4">
                    {relatedService.shortDescription}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    {locale === 'ar' ? 'المزيد' : 'Learn More'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-h2 mb-6 text-white">
              {locale === 'ar'
                ? 'هل تريد معرفة المزيد؟'
                : 'Want to Learn More?'}
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
                <FileText className="mr-2 h-5 w-5" />
                {locale === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
              </Link>
              <a
                href={createWhatsAppLink(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn h-14 bg-primary-light border-2 border-white text-white hover:bg-primary-lighter"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {locale === 'ar' ? 'واتساب' : 'WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}