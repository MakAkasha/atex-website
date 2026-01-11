import { useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, MapPin, Calendar, Building } from 'lucide-react'
import { getProjects } from '@/content/projects'

export default function ProjectsPage() {
  const locale = useLocale().replace('/', '') as 'ar' | 'en' || 'ar'
  const projects = getProjects(locale)

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-h1 mb-6 text-text-primary">
              {locale === 'ar' ? 'المشاريع' : 'Projects'}
            </h1>
            <p className="text-lg text-text-secondary">
              {locale === 'ar'
                ? 'استكشف مشاريعنا الناجحة في جميع أنحاء المملكة العربية السعودية'
                : 'Explore our successful projects across Saudi Arabia'}
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/${locale}/projects/${project.slug}`}
                className="card group overflow-hidden"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img
                      src={project.gallery[0]}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="badge badge-primary">
                          {locale === 'ar' ? 'مميز' : 'Featured'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="mb-3 text-h3 text-text-primary">{project.title}</h2>
                    <p className="text-body text-text-secondary mb-4">
                      {project.description}
                    </p>
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center gap-2 text-body-small text-text-muted">
                        <Building className="h-4 w-4" />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-body-small text-text-muted">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-body-small text-text-muted">
                        <Calendar className="h-4 w-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center text-primary font-medium">
                        {locale === 'ar' ? 'عرض المشروع' : 'View Project'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
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