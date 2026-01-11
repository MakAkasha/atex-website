import { useLocale } from 'next-intl'
import Link from 'next/link'
import { Shield, Check, MessageCircle, FileText } from 'lucide-react'
import { getProducts, getProductCategories } from '@/content/products'
import { getContactInfoForLocale } from '@/content/site'
import { createWhatsAppLink } from '@/lib/utils'

export default function ProductsPage() {
  const locale = useLocale().replace('/', '') as 'ar' | 'en' || 'ar'
  const products = getProducts(locale)
  const categories = getProductCategories(locale)
  const contact = getContactInfoForLocale(locale)

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-h1 mb-6 text-text-primary">
              {locale === 'ar' ? 'المنتجات' : 'Products'}
            </h1>
            <p className="text-lg text-text-secondary">
              {locale === 'ar'
                ? 'استكشف مجموعتنا من المنتجات عالية الجودة للمنازل والأنظمة الذكية'
                : 'Explore our collection of high-quality smart home and systems products'}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="section bg-background">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-3">
              <button className="badge badge-primary">
                {locale === 'ar' ? 'الكل' : 'All'}
              </button>
              {categories.map(category => (
                <button key={category.id} className="badge badge-secondary">
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="card group">
                {product.image && (
                  <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-h5 text-text-primary">{product.title}</h3>
                  <p className="text-body-small text-text-muted mb-4">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="mb-6 space-y-2">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-small text-text-muted">
                        <Check className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  {product.price && (
                    <div className="mb-4">
                      <span className="text-lg font-semibold text-primary">
                        {product.price}
                      </span>
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/${locale}/products/${product.slug}`}
                      className="btn btn-primary flex-1"
                    >
                      {locale === 'ar' ? 'التفاصيل' : 'Details'}
                    </Link>
                    <a
                      href={createWhatsAppLink(contact.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-h2 mb-6 text-white">
              {locale === 'ar'
                ? 'هل تحتاج إلى مساعدة في اختيار المنتجات؟'
                : 'Need Help Choosing Products?'}
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              {locale === 'ar'
                ? 'فريقنا هنا لمساعدتك في العثور على الحلول المثالية لاحتياجاتك.'
                : 'Our team is here to help you find the perfect solutions for your needs.'}
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