import { Metadata } from 'next'
import { Locale } from '@/i18n/request'

interface SEOProps {
  title: string
  description: string
  path: string
  locale: Locale
  image?: string
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}

export function generateMetadata({
  title,
  description,
  path,
  locale,
  image,
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
}: SEOProps): Metadata {
  const siteName = locale === 'ar' ? 'ATEX | الخبراء المتقدمون للتقنيات' : 'ATEX | Advanced Technical Experts'
  const baseUrl = 'https://atex.sa'
  const canonicalUrl = `${baseUrl}/${locale}${path}`
  const defaultImage = `${baseUrl}/og-image.jpg`

  return {
    title: `${title} | ${siteName}`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `${baseUrl}/ar${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: section === 'blog' ? 'article' : 'website',
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ] : [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
      publishedTime,
      modifiedTime,
      authors,
      section,
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image || defaultImage,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

interface OrganizationData {
  alternateName?: string
  description?: string
  streetAddress?: string
  city?: string
  region?: string
  phone?: string
  socialLinks?: string[]
}

interface WebPageData {
  title: string
  description: string
  path: string
  locale: Locale
}

interface ArticleData {
  title: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
  path: string
  locale: Locale
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQData {
  faqItems: FAQItem[]
}

interface BreadcrumbItem {
  name: string
  path: string
}

interface BreadcrumbData {
  items: BreadcrumbItem[]
  locale: Locale
}

interface ProductData {
  name: string
  description: string
  image?: string
  path: string
  locale: Locale
}

export function generateSchemaOrg(
  type: 'organization' | 'webpage' | 'article' | 'faq' | 'breadcrumb' | 'product',
  data: OrganizationData | WebPageData | ArticleData | FAQData | BreadcrumbData | ProductData
) {
  const baseUrl = 'https://atex.sa'

  switch (type) {
    case 'organization':
      const orgData = data as OrganizationData
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ATEX',
        alternateName: orgData.alternateName || 'Advanced Technical Experts',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: orgData.description || '',
        address: {
          '@type': 'PostalAddress',
          streetAddress: orgData.streetAddress,
          addressLocality: orgData.city,
          addressRegion: orgData.region,
          addressCountry: 'SA',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: orgData.phone,
          contactType: 'sales',
        },
        sameAs: orgData.socialLinks || [],
      }

    case 'webpage':
      const webpageData = data as WebPageData
      return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: webpageData.title,
        description: webpageData.description,
        url: `${baseUrl}/${webpageData.locale}${webpageData.path}`,
        isPartOf: {
          '@type': 'WebSite',
          url: baseUrl,
        },
        inLanguage: webpageData.locale,
      }

    case 'article':
      const articleData = data as ArticleData
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: articleData.title,
        description: articleData.description,
        image: [articleData.image],
        datePublished: articleData.datePublished,
        dateModified: articleData.dateModified,
        author: {
          '@type': 'Person',
          name: articleData.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'ATEX',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${baseUrl}/${articleData.locale}${articleData.path}`,
        },
      }

    case 'faq':
      const faqData = data as FAQData
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }

    case 'breadcrumb':
      const breadcrumbData = data as BreadcrumbData
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbData.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${baseUrl}/${breadcrumbData.locale}${item.path}`,
        })),
      }

    case 'product':
      const productData = data as ProductData
      return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productData.name,
        description: productData.description,
        image: productData.image,
        brand: {
          '@type': 'Brand',
          name: 'ATEX',
        },
        offers: {
          '@type': 'AggregateOffer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'SAR',
          url: `${baseUrl}/${productData.locale}${productData.path}`,
        },
      }

    default:
      return {}
  }
}