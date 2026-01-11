import type { MetadataRoute } from 'next'
import { getServices } from '@/content/services'
import { getProducts } from '@/content/products'
import { getProjects } from '@/content/projects'
import { getBlogPosts } from '@/content/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://atex.sa'
  const locales = ['ar', 'en'] as const

  // Static pages
  const staticPaths = [
    '',
    '/about',
    '/services',
    '/products',
    '/projects',
    '/blog',
    '/contact',
    '/quote',
  ]

  // Generate static URLs
  const staticUrls: MetadataRoute.Sitemap = []
  for (const locale of locales) {
    for (const path of staticPaths) {
      staticUrls.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'daily' : 'weekly',
        priority: path === '' ? 1 : 0.8,
      })
    }
  }

  // Generate service URLs
  const services = getServices('ar')
  const serviceUrls: MetadataRoute.Sitemap = []
  for (const locale of locales) {
    for (const service of services) {
      serviceUrls.push({
        url: `${baseUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  }

  // Generate product URLs
  const products = getProducts('ar')
  const productUrls: MetadataRoute.Sitemap = []
  for (const locale of locales) {
    for (const product of products) {
      productUrls.push({
        url: `${baseUrl}/${locale}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }

  // Generate project URLs
  const projects = getProjects('ar')
  const projectUrls: MetadataRoute.Sitemap = []
  for (const locale of locales) {
    for (const project of projects) {
      projectUrls.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }

  // Generate blog URLs
  const blogPosts = getBlogPosts('ar')
  const blogUrls: MetadataRoute.Sitemap = []
  for (const locale of locales) {
    for (const post of blogPosts) {
      blogUrls.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      })
    }
  }

  return [...staticUrls, ...serviceUrls, ...productUrls, ...projectUrls, ...blogUrls]
}