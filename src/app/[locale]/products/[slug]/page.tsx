import { Check, MessageCircle, FileText, ArrowLeft, Share2, Package, Zap } from 'lucide-react'
import { getProductBySlug, getProducts } from '@/content/products'
import { getContactInfoForLocale } from '@/content/site'
import { createWhatsAppLink } from '@/lib/utils'
import Link from 'next/link'

export async function generateStaticParams() {
  const { products } = await import('@/content/products')
  return products.map(product => ({ slug: product.slug }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const product = getProductBySlug(slug, locale as 'ar' | 'en')
  const allProducts = getProducts(locale as 'ar' | 'en')
  const currentIndex = allProducts.findIndex(p => p.slug === slug)
  const prevProduct = currentIndex > 0 ? allProducts[currentIndex - 1] : null
  const nextProduct = currentIndex < allProducts.length - 1 ? allProducts[currentIndex + 1] : null
  const contact = getContactInfoForLocale(locale as 'ar' | 'en')

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Image */}
            {product.image && (
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            {/* Info */}
            <div className="flex flex-col justify-center">
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center text-body-small text-text-muted mb-6 hover:text-primary transition-colors"
              >
                <ArrowLeft className={`h-4 w-4 ${locale === 'ar' ? 'rotate-180 mr-2' : 'mr-2'}`} />
                {locale === 'ar' ? 'العودة للمنتجات' : 'Back to Products'}
              </Link>
              <h1 className="text-h1 mb-4 text-text-primary">{product.title}</h1>
              <p className="text-lg text-text-secondary mb-6">
                {product.description}
              </p>
              
              {product.price && (
                <div className="mb-8">
                  <span className="text-3xl font-bold text-primary">
                    {product.price}
                  </span>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={createWhatsAppLink(contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary h-12 px-6"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {locale === 'ar' ? 'استفسار عبر واتساب' : 'Inquire on WhatsApp'}
                </a>
                <Link
                  href={`/${locale}/quote`}
                  className="btn btn-secondary h-12 px-6"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  {locale === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Link>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <Share2 className="h-5 w-5 text-primary" />
                  <span className="font-medium text-text-primary">
                    {locale === 'ar' ? 'مشاركة' : 'Share'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-h2 mb-8 text-text-primary">
                {locale === 'ar' ? 'الميزات' : 'Features'}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 card p-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-body-small text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="section bg-background-secondary">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-h2 mb-8 text-text-primary">
                {locale === 'ar' ? 'المواصفات' : 'Specifications'}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="card p-4">
                    <div className="flex items-center gap-2 text-body-small text-text-muted mb-2">
                      <Package className="h-4 w-4" />
                      <span>{spec.label}</span>
                    </div>
                    <p className="font-medium text-text-primary">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why This Product */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Zap className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-h2 mb-4 text-text-primary">
              {locale === 'ar'
                ? 'لماذا هذا المنتج؟'
                : 'Why This Product?'}
            </h2>
            <p className="text-lg text-text-secondary">
              {locale === 'ar'
                ? 'منتجاتنا تم اختيارها بعناية لضمان الجودة العالية والأداء المتميز والموثوقية.'
                : 'Our products are carefully selected to ensure high quality, superior performance, and reliability.'}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      {(prevProduct || nextProduct) && (
        <section className="section bg-background-secondary">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2">
              {prevProduct && (
                <Link
                  href={`/${locale}/products/${prevProduct.slug}`}
                  className="card group"
                >
                  <p className="text-small text-text-muted mb-2">
                    {locale === 'ar' ? 'المنتج السابق' : 'Previous Product'}
                  </p>
                  <h3 className="text-h5 text-text-primary group-hover:text-primary transition-colors">
                    {prevProduct.title}
                  </h3>
                </Link>
              )}
              {nextProduct && (
                <Link
                  href={`/${locale}/products/${nextProduct.slug}`}
                  className="card group"
                >
                  <p className="text-small text-text-muted mb-2">
                    {locale === 'ar' ? 'المنتج التالي' : 'Next Product'}
                  </p>
                  <h3 className="text-h5 text-text-primary group-hover:text-primary transition-colors">
                    {nextProduct.title}
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
                ? 'هل لديك أسئلة؟'
                : 'Have Questions?'}
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              {locale === 'ar'
                ? 'فريقنا هنا لمساعدتك في العثور على الحلول المثالية لاحتياجاتك.'
                : 'Our team is here to help you find the perfect solutions for your needs.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={createWhatsAppLink(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn h-14 bg-white text-primary hover:bg-background hover:text-primary"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {locale === 'ar' ? 'واتساب' : 'WhatsApp'}
              </a>
              <Link
                href={`/${locale}/quote`}
                className="btn h-14 bg-primary-light border-2 border-white text-white hover:bg-primary-lighter"
              >
                <FileText className="mr-2 h-5 w-5" />
                {locale === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}