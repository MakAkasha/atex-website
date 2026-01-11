import { getRequestConfig } from 'next-intl/server'

// Locales
export const locales = ['ar', 'en'] as const
export const defaultLocale = 'ar' as const

export type Locale = (typeof locales)[number]

// Check if a locale is valid
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export default getRequestConfig(async ({ requestLocale }) => {
  // Get locale from request
  let locale = await requestLocale

  // Validate locale - fallback to default instead of notFound()
  if (!locale || !isValidLocale(locale)) {
    locale = defaultLocale
  }

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
    timeZone: 'Asia/Riyadh',
    now: new Date(),
  }
})