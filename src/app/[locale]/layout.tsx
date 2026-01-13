import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { locales } from '@/i18n/request'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  
  return (
    <div className="flex min-h-screen flex-col" dir={dir} lang={locale}>
      <Header key={locale} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}