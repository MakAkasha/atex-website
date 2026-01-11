import { useLocale } from 'next-intl'
import { Target, Shield, Zap, Users, Globe, Award } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const locale = useLocale().replace('/', '') as 'ar' | 'en' || 'ar'

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-h1 mb-6 text-text-primary">
              {locale === 'ar' ? 'من نحن' : 'About Us'}
            </h1>
            <p className="text-lg text-text-secondary">
              {locale === 'ar'
                ? 'ATEX هي الشريك الموثوق لحلول المنازل والأنظمة الذكية في المملكة العربية السعودية'
                : 'ATEX is your trusted partner for smart home and smart systems solutions in Saudi Arabia'}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-h2 mb-8 text-text-primary">
              {locale === 'ar' ? 'قصتنا' : 'Our Story'}
            </h2>
            <div className="space-y-4 text-body text-text-secondary">
              <p>
                {locale === 'ar'
                  ? 'تأسست ATEX في جدة، المملكة العربية السعودية، بمهمة واضحة: جعل المنازل والأنظمة الذكية في متناول الجميع. نحن نؤمن بأن التكنولوجيا يجب أن تبسط الحياة، وليس تعقيدها.'
                  : 'Founded in Jeddah, Saudi Arabia, ATEX was established with a clear mission: to make smart homes and smart systems accessible to everyone. We believe that technology should simplify life, not complicate it.'}
              </p>
              <p>
                {locale === 'ar'
                  ? 'منذ بدايتنا، عملنا على نحو متواصل على تطوير خبراتنا وتوسيع عروضنا لخدمة احتياجات متنوعة، من المنازل السكنية إلى المباني التجارية الكبيرة.'
                  : 'Since our inception, we have continuously worked to develop our expertise and expand our offerings to serve diverse needs, from residential homes to large commercial buildings.'}
              </p>
              <p>
                {locale === 'ar'
                  ? 'نحن نفخر بكوننا شركة سعودية ملتزمة بتقديم حلول عالية الجودة مع التركيز على خدمة العملاء والابتكار المستمرة.'
                  : 'We take pride in being a Saudi company committed to delivering high-quality solutions with a focus on customer service and continuous innovation.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'مهمتنا' : 'Our Mission'}
              </h2>
              <p className="text-body text-text-secondary">
                {locale === 'ar'
                  ? 'تزويد عملائنا بأحدث الحلول الذكية والموثوقية التي تعزز الراحة والأمان والكفاءة، مع الحفاظ على معايير عالية من الجودة والخدمة.'
                  : 'To provide our customers with the latest smart and reliable solutions that enhance comfort, security, and efficiency, while maintaining high standards of quality and service.'}
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Globe className="h-8 w-8" />
              </div>
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h2>
              <p className="text-body text-text-secondary">
                {locale === 'ar'
                  ? 'أن نكون الخيار الأول والرائد في تقديم حلول المنازل والأنظمة الذكية في المملكة العربية السعودية والمنطقة.'
                  : 'To be the first choice and leading provider of smart home and smart systems solutions in Saudi Arabia and the region.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-h2 mb-8 text-center text-text-primary">
              {locale === 'ar' ? 'قيمنا' : 'Our Values'}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-h5 text-text-primary">
                  {locale === 'ar' ? 'الجودة' : 'Quality'}
                </h3>
                <p className="text-body-small text-text-muted">
                  {locale === 'ar'
                    ? 'نستخدم فقط منتجات عالية الجودة من موردين موثوقين.'
                    : 'We only use high-quality products from trusted suppliers.'}
                </p>
              </div>
              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-h5 text-text-primary">
                  {locale === 'ar' ? 'العميل أولاً' : 'Customer First'}
                </h3>
                <p className="text-body-small text-text-muted">
                  {locale === 'ar'
                    ? 'رضا عملائنا هو أولويتنا القصوى.'
                    : 'Our customers satisfaction is our top priority.'}
                </p>
              </div>
              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-h5 text-text-primary">
                  {locale === 'ar' ? 'الابتكار' : 'Innovation'}
                </h3>
                <p className="text-body-small text-text-muted">
                  {locale === 'ar'
                    ? 'نتبنى أحدث التقنيات ونطور حلولاً مبتكرة.'
                    : 'We embrace the latest technologies and develop innovative solutions.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-h2 mb-8 text-center text-text-primary">
              {locale === 'ar' ? 'لماذا تختار ATEX؟' : 'Why Choose ATEX?'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-text-primary">
                    {locale === 'ar' ? 'خبرة محلية' : 'Local Expertise'}
                  </h3>
                  <p className="text-body-small text-text-muted">
                    {locale === 'ar'
                      ? 'فريق سعودي يتمتع بفهم عميق لاحتياجات السوق المحلي.'
                      : 'A Saudi team with deep understanding of local market needs.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-text-primary">
                    {locale === 'ar' ? 'ضمان شامل' : 'Comprehensive Warranty'}
                  </h3>
                  <p className="text-body-small text-text-muted">
                    {locale === 'ar'
                      ? 'نقدم ضماناً شاملاً على جميع منتجاتنا وخدماتنا.'
                      : 'We provide comprehensive warranty on all our products and services.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-text-primary">
                    {locale === 'ar' ? 'دعم 24/7' : '24/7 Support'}
                  </h3>
                  <p className="text-body-small text-text-muted">
                    {locale === 'ar'
                      ? 'دعم فني متاح على مدار الساعة.'
                      : 'Technical support available around the clock.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-text-primary">
                    {locale === 'ar' ? 'فريق محترف' : 'Professional Team'}
                  </h3>
                  <p className="text-body-small text-text-muted">
                    {locale === 'ar'
                      ? 'مهندسون وفنيون محترفون ومؤهلون.'
                      : 'Qualified and professional engineers and technicians.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Globe className="mx-auto mb-6 h-20 w-20 text-primary" />
            <h2 className="text-h2 mb-4 text-text-primary">
              {locale === 'ar' ? 'نطاق التغطية' : 'Coverage Area'}
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              {locale === 'ar'
                ? 'نخدم العملاء في جميع أنحاء المملكة العربية السعودية مع تركيز خاص على:'
                : 'We serve customers across Saudi Arabia with special focus on:'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="badge badge-primary">
                {locale === 'ar' ? 'جدة' : 'Jeddah'}
              </span>
              <span className="badge badge-primary">
                {locale === 'ar' ? 'الرياض' : 'Riyadh'}
              </span>
              <span className="badge badge-primary">
                {locale === 'ar' ? 'الدمام' : 'Dammam'}
              </span>
              <span className="badge badge-primary">
                {locale === 'ar' ? 'مكة المكرمة' : 'Makkah'}
              </span>
              <span className="badge badge-primary">
                {locale === 'ar' ? 'المدينة المنورة' : 'Madinah'}
              </span>
            </div>
          </div>
        </div>
      </section>

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
                ? 'تواصل معنا اليوم لمناقشة احتياجاتك وكيف يمكننا مساعدتك.'
                : 'Contact us today to discuss your needs and how we can help you.'}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="btn h-14 bg-white text-primary hover:bg-background hover:text-primary"
            >
              {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}