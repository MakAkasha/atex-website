import { useLocale } from 'next-intl'
import Link from 'next/link'
import { Calendar, User, Clock } from 'lucide-react'
import { getBlogPosts, categories } from '@/content/blog'
import { formatDate } from '@/lib/utils'

export default function BlogPage() {
  const locale = useLocale().replace('/', '') as 'ar' | 'en' || 'ar'
  const posts = getBlogPosts(locale)
  const blogCategories = categories[locale]

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-h1 mb-6 text-text-primary">
              {locale === 'ar' ? 'المدونة' : 'Blog'}
            </h1>
            <p className="text-lg text-text-secondary">
              {locale === 'ar'
                ? 'استكشف أحدث المقالات والأخبار حول المنازل الذكية والتقنية الحديثة'
                : 'Explore the latest articles and news about smart homes and modern technology'}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      {blogCategories.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href={`/${locale}/blog`}
                className="badge badge-primary"
              >
                {locale === 'ar' ? 'الكل' : 'All'}
              </Link>
              {blogCategories.map(category => (
                <Link
                  key={category}
                  href={`/${locale}/blog?category=${encodeURIComponent(category)}`}
                  className="badge badge-secondary hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/${locale}/blog/${post.slug}`}
                className="card overflow-hidden group"
              >
                {post.image && (
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="badge badge-primary">
                          {locale === 'ar' ? 'مميز' : 'Featured'}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-small text-text-muted">
                    <span className="badge badge-secondary">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.date, locale === 'ar' ? 'ar-SA' : 'en-US')}</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-h4 text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-body-small text-text-muted line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-small text-text-muted">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-small text-text-muted">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime} {locale === 'ar' ? 'دقيقة' : 'min'}</span>
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