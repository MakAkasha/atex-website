import { ArrowLeft, ArrowRight, Calendar, User, Clock, Tag, Share2, MessageCircle, FileText } from 'lucide-react'
import { getBlogPostBySlug, getBlogPosts, getRelatedBlogPosts } from '@/content/blog'
import { getContactInfoForLocale } from '@/content/site'
import { createWhatsAppLink, formatDate } from '@/lib/utils'
import Link from 'next/link'

export async function generateStaticParams() {
  const { blogPosts } = await import('@/content/blog')
  return blogPosts.map(post => ({ slug: post.slug }))
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getBlogPostBySlug(slug, locale as 'ar' | 'en')
  const allPosts = getBlogPosts(locale as 'ar' | 'en')
  const relatedPosts = post ? getRelatedBlogPosts(post.id, locale as 'ar' | 'en') : []
  const contact = getContactInfoForLocale(locale as 'ar' | 'en')

  if (!post) {
    return <div>Post not found</div>
  }

  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center text-body-small text-text-muted mb-6 hover:text-primary transition-colors"
            >
              <ArrowLeft className={`h-4 w-4 ${locale === 'ar' ? 'rotate-180 mr-2' : 'mr-2'}`} />
              {locale === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
            </Link>
            <div className="mb-4">
              <span className="badge badge-primary">{post.category}</span>
            </div>
            <h1 className="text-h1 mb-6 text-text-primary">{post.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-small text-text-muted">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date, locale === 'ar' ? 'ar-SA' : 'en-US')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} {locale === 'ar' ? 'دقيقة قراءة' : 'min read'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="section bg-background">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none text-text-secondary">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return <h2 key={index} className="text-h2 text-text-primary mt-8 mb-4">{paragraph.replace('# ', '')}</h2>
                } else if (paragraph.startsWith('## ')) {
                  return <h3 key={index} className="text-h3 text-text-primary mt-6 mb-3">{paragraph.replace('## ', '')}</h3>
                } else if (paragraph.startsWith('### ')) {
                  return <h4 key={index} className="text-h4 text-text-primary mt-4 mb-2">{paragraph.replace('### ', '')}</h4>
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index} className="ml-4">{paragraph.replace('- ', '')}</li>
                } else if (paragraph.trim() === '') {
                  return <br key={index} />
                } else {
                  return <p key={index} className="mb-4">{paragraph}</p>
                }
              })}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="h-5 w-5 text-primary" />
                  <span className="font-medium text-text-primary">
                    {locale === 'ar' ? 'الوسوم' : 'Tags'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="badge badge-secondary">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="h-5 w-5 text-primary" />
                <span className="font-medium text-text-primary">
                  {locale === 'ar' ? 'مشاركة' : 'Share'}
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://atex.sa/${locale}/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary h-10"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://atex.sa/${locale}/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary h-10"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(post.title)}%20-%20${encodeURIComponent(`https://atex.sa/${locale}/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary h-10"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-background-secondary">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/${locale}/blog/${relatedPost.slug}`}
                  className="card overflow-hidden group"
                >
                  {relatedPost.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="badge badge-secondary mb-3">{relatedPost.category}</span>
                    <h3 className="mb-2 text-h5 text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-body-small text-text-muted line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      {(prevPost || nextPost) && (
        <section className="section bg-background">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2">
              {prevPost && (
                <Link
                  href={`/${locale}/blog/${prevPost.slug}`}
                  className="card group"
                >
                  <div className="flex items-center gap-2 text-small text-text-muted mb-3">
                    <ArrowLeft className={`h-4 w-4 ${locale === 'ar' ? '' : 'rotate-180'}`} />
                    <span>{locale === 'ar' ? 'المقال السابق' : 'Previous Article'}</span>
                  </div>
                  <h3 className="text-h5 text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                    {prevPost.title}
                  </h3>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/${locale}/blog/${nextPost.slug}`}
                  className="card group"
                >
                  <div className="flex items-center gap-2 text-small text-text-muted mb-3">
                    <span>{locale === 'ar' ? 'المقال التالي' : 'Next Article'}</span>
                    <ArrowRight className={`h-4 w-4 ${locale === 'ar' ? 'rotate-180' : ''}`} />
                  </div>
                  <h3 className="text-h5 text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                    {nextPost.title}
                  </h3>
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
                ? 'هل تريد معرفة المزيد؟'
                : 'Want to Learn More?'}
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              {locale === 'ar'
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية.'
                : 'Contact us today for a free consultation.'}
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