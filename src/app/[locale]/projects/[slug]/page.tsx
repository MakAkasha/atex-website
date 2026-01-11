import { ArrowRight, MapPin, Calendar, Building, Check, MessageCircle, FileText } from 'lucide-react'
import { getProjectBySlug, getProjects } from '@/content/projects'
import { getServiceBySlug } from '@/content/services'
import { getContactInfoForLocale } from '@/content/site'
import { createWhatsAppLink } from '@/lib/utils'
import Link from 'next/link'

export async function generateStaticParams() {
  const { projects } = await import('@/content/projects')
  return projects.map(project => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const project = getProjectBySlug(slug, locale as 'ar' | 'en')
  const allProjects = getProjects(locale as 'ar' | 'en')
  const currentIndex = allProjects.findIndex(p => p.slug === slug)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null
  const contact = getContactInfoForLocale(locale as 'ar' | 'en')

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-h1 mb-6 text-text-primary">{project.title}</h1>
            <p className="text-lg text-text-secondary">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <div className="card">
                <div className="flex items-center gap-3 mb-2">
                  <Building className="h-5 w-5 text-primary" />
                  <span className="font-medium text-text-primary">
                    {locale === 'ar' ? 'العميل' : 'Client'}
                  </span>
                </div>
                <p className="text-body-small text-text-muted">{project.client}</p>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium text-text-primary">
                    {locale === 'ar' ? 'الموقع' : 'Location'}
                  </span>
                </div>
                <p className="text-body-small text-text-muted">{project.location}</p>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium text-text-primary">
                    {locale === 'ar' ? 'التاريخ' : 'Date'}
                  </span>
                </div>
                <p className="text-body-small text-text-muted">{project.date}</p>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-2">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span className="font-medium text-text-primary">
                    {locale === 'ar' ? 'المدة' : 'Duration'}
                  </span>
                </div>
                <p className="text-body-small text-text-muted">{project.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section bg-background-secondary">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'معرض الصور' : 'Gallery'}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Objective */}
            <div>
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'الهدف' : 'Objective'}
              </h2>
              <p className="text-body text-text-secondary">{project.objective}</p>
            </div>

            {/* Challenge */}
            <div>
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'التحدي' : 'Challenge'}
              </h2>
              <p className="text-body text-text-secondary">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'الحل' : 'Solution'}
              </h2>
              <p className="text-body text-text-secondary">{project.solution}</p>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'النتائج' : 'Outcomes'}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-body-small text-text-secondary">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Used */}
            {project.services && project.services.length > 0 && (
              <div>
                <h2 className="text-h2 mb-4 text-text-primary">
                  {locale === 'ar' ? 'الخدمات المستخدمة' : 'Services Used'}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.services.map(serviceId => {
                    const service = getServiceBySlug(serviceId, locale as 'ar' | 'en')
                    return service ? (
                      <Link
                        key={serviceId}
                        href={`/${locale}/services/${serviceId}`}
                        className="badge badge-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                      >
                        {service.title}
                      </Link>
                    ) : null
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation */}
      {(prevProject || nextProject) && (
        <section className="section bg-background-secondary">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2">
              {prevProject && (
                <Link
                  href={`/${locale}/projects/${prevProject.slug}`}
                  className="card group"
                >
                  <p className="text-small text-text-muted mb-2">
                    {locale === 'ar' ? 'المشروع السابق' : 'Previous Project'}
                  </p>
                  <h3 className="text-h5 text-text-primary group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </h3>
                  <div className="mt-3 flex items-center text-primary">
                    <ArrowRight className={`h-4 w-4 ${locale === 'ar' ? 'rotate-180' : ''} mr-2`} />
                    <span className="font-medium">
                      {locale === 'ar' ? 'عرض' : 'View'}
                    </span>
                  </div>
                </Link>
              )}
              {nextProject && (
                <Link
                  href={`/${locale}/projects/${nextProject.slug}`}
                  className="card group"
                >
                  <p className="text-small text-text-muted mb-2">
                    {locale === 'ar' ? 'المشروع التالي' : 'Next Project'}
                  </p>
                  <h3 className="text-h5 text-text-primary group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </h3>
                  <div className="mt-3 flex items-center text-primary">
                    <span className="font-medium">
                      {locale === 'ar' ? 'عرض' : 'View'}
                    </span>
                    <ArrowRight className={`h-4 w-4 ${locale === 'ar' ? '' : 'rotate-180'} ml-2`} />
                  </div>
                </Link>
              )}
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
                ? 'هل لديك مشروع مشابه؟'
                : 'Have a Similar Project?'}
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              {locale === 'ar'
                ? 'تواصل معنا اليوم لنناقش احتياجاتك وكيف يمكننا مساعدتك.'
                : 'Contact us today to discuss your needs and how we can help you.'}
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