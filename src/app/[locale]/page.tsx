import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Play, Star, Zap, Shield, Users, Award, TrendingUp, Clock, Target } from 'lucide-react'
import { getServices } from '@/content/services'
import { getFeaturedProjects } from '@/content/projects'
import { getFeaturedBlogPosts } from '@/content/blog'
import { getContactInfoForLocale } from '@/content/site'
import { createWhatsAppLink } from '@/lib/utils'

export default function HomePage() {
  const t = useTranslations()
  const locale = useLocale().replace('/', '') as 'ar' | 'en' || 'ar'
  const services = getServices(locale)
  const projects = getFeaturedProjects(locale)
  const blogPosts = getFeaturedBlogPosts(locale)
  const contact = getContactInfoForLocale(locale)

  const whyUsPoints = [
    {
      icon: Award,
      title: t('whyUs.points.0.title'),
      description: t('whyUs.points.0.description'),
    },
    {
      icon: Users,
      title: t('whyUs.points.1.title'),
      description: t('whyUs.points.1.description'),
    },
    {
      icon: Shield,
      title: t('whyUs.points.2.title'),
      description: t('whyUs.points.2.description'),
    },
    {
      icon: Zap,
      title: t('whyUs.points.3.title'),
      description: t('whyUs.points.3.description'),
    },
    {
      icon: Check,
      title: t('whyUs.points.4.title'),
      description: t('whyUs.points.4.description'),
    },
    {
      icon: Star,
      title: t('whyUs.points.5.title'),
      description: t('whyUs.points.5.description'),
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: t('process.steps.0.title'),
      description: t('process.steps.0.description'),
    },
    {
      step: '2',
      title: t('process.steps.1.title'),
      description: t('process.steps.1.description'),
    },
    {
      step: '3',
      title: t('process.steps.2.title'),
      description: t('process.steps.2.description'),
    },
    {
      step: '4',
      title: t('process.steps.3.title'),
      description: t('process.steps.3.description'),
    },
  ]

  const testimonials = [
    {
      name: 'أحمد السعيد',
      role: 'مالك فيلا',
      quote: locale === 'ar'
        ? 'تجربة رائعة مع فريق ATEX. المنزل الذكي يعمل بشكل مثالي وتفوقت توقعاتي.'
        : 'Excellent experience with the ATEX team. The smart home works perfectly and exceeded my expectations.',
      rating: 5,
    },
    {
      name: 'محمد العتيبي',
      role: 'مدير شركة',
      quote: locale === 'ar'
        ? 'نظام إدارة المباني الذكي حسن الكفاءة بشكل كبير وأدركنا توفير كبير في التكاليف.'
        : 'The smart building management system significantly improved efficiency and we achieved significant cost savings.',
      rating: 5,
    },
    {
      name: 'خالد الغامدي',
      role: 'مدير فندق',
      quote: locale === 'ar'
        ? 'أنظمة الفندق الذكية عززت تجربة ضيوفنا وحسنت العمليات بشكل كبير.'
        : 'Smart hotel systems enhanced our guest experience and significantly improved operations.',
      rating: 5,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="grid gap-12 py-20 md:grid-cols-2 lg:py-32">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-h1 font-semibold text-text-primary leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-text-secondary">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/quote`}
                  className="btn-primary btn h-14 px-8"
                >
                  {t('hero.ctaPrimary')}
                  <ArrowRight className="ms-2 h-5 w-5" />
                </Link>
                <a
                  href={createWhatsAppLink(contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn h-14 px-8"
                >
                  <Play className="me-2 h-5 w-5" />
                  {t('hero.ctaSecondary')}
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop"
                  alt={t('hero.title')}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -left-4 -bottom-4 rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      {locale === 'ar' ? 'توفير الطاقة' : 'Energy Savings'}
                    </p>
                    <p className="text-sm text-text-muted">
                      {locale === 'ar' ? 'حتى 30%' : 'Up to 30%'}
                    </p>
                  </div>
                </div>
              </div>
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
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={`/${locale}/services`} className="btn-text">
              {t('services.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section bg-background-secondary">
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
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
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

      {/* Testimonials */}
      <section className="section bg-background">
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
              <p className="text-primary-100">
                {locale === 'ar' ? 'مشروع منجز' : 'Projects Completed'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">300+</p>
              <p className="text-primary-100">
                {locale === 'ar' ? 'عميل سعيد' : 'Happy Clients'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">10+</p>
              <p className="text-primary-100">
                {locale === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">50+</p>
              <p className="text-primary-100">
                {locale === 'ar' ? 'فريق متخصص' : 'Team Members'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-h2 mb-4 text-text-primary">
              {locale === 'ar' ? 'القطاعات التي نخدمها' : 'Industries We Serve'}
            </h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              {locale === 'ar' 
                ? 'نقدم حلولاً ذكية متكاملة لمختلف القطاعات والمنشآت'
                : 'We provide comprehensive smart solutions for various sectors and facilities'}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="card group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&auto=format&fit=crop"
                  alt={locale === 'ar' ? 'الفلل والقصور' : 'Villas & Palaces'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-h5 text-text-primary text-center">
                {locale === 'ar' ? 'الفلل والقصور' : 'Villas & Palaces'}
              </h3>
            </div>
            <div className="card group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop"
                  alt={locale === 'ar' ? 'المباني التجارية' : 'Commercial Buildings'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-h5 text-text-primary text-center">
                {locale === 'ar' ? 'المباني التجارية' : 'Commercial Buildings'}
              </h3>
            </div>
            <div className="card group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop"
                  alt={locale === 'ar' ? 'ال الفنادق والمنتجعات' : 'Hotels & Resorts'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-h5 text-text-primary text-center">
                {locale === 'ar' ? 'ال فنادق والمنتجعات' : 'Hotels & Resorts'}
              </h3>
            </div>
            <div className="card group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop"
                  alt={locale === 'ar' ? 'المستشفيات والعيادات' : 'Hospitals & Clinics'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-h5 text-text-primary text-center">
                {locale === 'ar' ? 'المستشفيات والعيادات' : 'Hospitals & Clinics'}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Smart Section */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop"
                  alt={locale === 'ar' ? 'منزل ذكي' : 'Smart Home'}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      {locale === 'ar' ? 'تحكم كامل' : 'Full Control'}
                    </p>
                    <p className="text-sm text-text-muted">
                      {locale === 'ar' ? 'من أي مكان وفي أي وقت' : 'From anywhere, anytime'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-h2 mb-6 text-text-primary">
                {locale === 'ar' ? 'لماذا تختار المنزل الذكي؟' : 'Why Choose Smart Home?'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-text-primary">
                      {locale === 'ar' ? 'توفير الطاقة' : 'Energy Savings'}
                    </h3>
                    <p className="text-body-small text-text-muted">
                      {locale === 'ar' 
                        ? 'حسّن كفاءة استهلاك الطاقة وحقق وفورات تصل إلى 30%'
                        : 'Improve energy efficiency and save up to 30%'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-text-primary">
                      {locale === 'ar' ? 'الأمان والحماية' : 'Security & Safety'}
                    </h3>
                    <p className="text-body-small text-text-muted">
                      {locale === 'ar' 
                        ? 'أنظمة أمان متكاملة لحماية عائلتك وممتلكاتك'
                        : 'Integrated security systems to protect your family and property'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-text-primary">
                      {locale === 'ar' ? 'الراحة والرفاهية' : 'Comfort & Convenience'}
                    </h3>
                    <p className="text-body-small text-text-muted">
                      {locale === 'ar' 
                        ? 'تحكم في كل شيء بسهولة من خلال هاتفك الذكي'
                        : 'Control everything easily through your smartphone'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href={`/${locale}/services`}
                  className="btn-primary btn"
                >
                  {locale === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-h2 mb-4 text-text-primary">{t('blog.title')}</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/${locale}/blog/${post.slug}`}
                className="card overflow-hidden group"
              >
                {post.image && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="badge badge-secondary">{post.category}</span>
                    <span className="text-small text-text-muted">{post.date}</span>
                  </div>
                  <h3 className="mb-2 text-h5 text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-body-small text-text-muted line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={`/${locale}/blog`} className="btn-text">
              {t('blog.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-h2 mb-6 text-white">
              {locale === 'ar'
                ? 'جاهز لتحويل منزلك إلى منزل ذكي؟'
                : 'Ready to Transform Your Home into a Smart Home?'}
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
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={createWhatsAppLink(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn h-14 bg-primary-light border-2 border-white text-white hover:bg-primary-lighter"
              >
                <Play className="mr-2 h-5 w-5" />
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}