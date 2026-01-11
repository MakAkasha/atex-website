'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { FileText, Check, Clock, Shield, Send, Zap } from 'lucide-react'
import { getContactInfoForLocale } from '@/content/site'
import { createWhatsAppLink } from '@/lib/utils'

export default function QuotePage() {
  const locale = useLocale().replace('/', '') as 'ar' | 'en' || 'ar'
  const contact = getContactInfoForLocale(locale)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    message: '',
    honeypot: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.honeypot) return

    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const services = [
    { id: 'smart-home', name: locale === 'ar' ? 'المنزل الذكي' : 'Smart Home' },
    { id: 'smart-locks', name: locale === 'ar' ? 'الأقفال الذكية' : 'Smart Locks' },
    { id: 'smart-systems', name: locale === 'ar' ? 'الأنظمة الذكية' : 'Smart Systems' },
    { id: 'smart-hotel', name: locale === 'ar' ? 'الفندق الذكي' : 'Smart Hotel' },
    { id: 'smart-parking', name: locale === 'ar' ? 'أنظمة المواقف' : 'Smart Parking' },
    { id: 'led-panels', name: locale === 'ar' ? 'لوحات عرض LED' : 'LED Panels' },
  ]

  const projectTypes = [
    { id: 'residential', name: locale === 'ar' ? 'سكني' : 'Residential' },
    { id: 'commercial', name: locale === 'ar' ? 'تجاري' : 'Commercial' },
    { id: 'industrial', name: locale === 'ar' ? 'صناعي' : 'Industrial' },
    { id: 'hotel', name: locale === 'ar' ? 'فندقي' : 'Hotel' },
    { id: 'other', name: locale === 'ar' ? 'أخرى' : 'Other' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <FileText className="mx-auto mb-6 h-20 w-20 text-primary" />
            <h1 className="text-h1 mb-6 text-text-primary">
              {locale === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              {locale === 'ar'
                ? 'املأ النموذج أدناه وسيقوم فريقنا بتقديم عرض سعر مخصص لك خلال 24 ساعة.'
                : 'Fill out the form below and our team will provide you with a customized quote within 24 hours.'}
            </p>
            <a
              href={createWhatsAppLink(contact.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn h-14 px-8"
            >
              {locale === 'ar' ? 'تحدث معنا عبر واتساب' : 'Chat with us on WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-h2 mb-8 text-center text-text-primary">
              {locale === 'ar' ? 'ماذا يحدث بعد تقديم الطلب؟' : 'What Happens Next?'}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-h5 text-text-primary">
                  {locale === 'ar' ? 'استلام' : 'Receipt'}
                </h3>
                <p className="text-body-small text-text-muted">
                  {locale === 'ar'
                    ? 'نستلم طلبك ونراجعه بعناية'
                    : 'We receive and carefully review your request'}
                </p>
              </div>
              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-h5 text-text-primary">
                  {locale === 'ar' ? 'التقييم' : 'Evaluation'}
                </h3>
                <p className="text-body-small text-text-muted">
                  {locale === 'ar'
                    ? 'نقوم بتقييم احتياجاتك ومتطلباتك'
                    : 'We assess your needs and requirements'}
                </p>
              </div>
              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-h5 text-text-primary">
                  {locale === 'ar' ? 'العرض' : 'Quote'}
                </h3>
                <p className="text-body-small text-text-muted">
                  {locale === 'ar'
                    ? 'نقدم عرض سعر مخصص في غضون 24 ساعة'
                    : 'We provide a customized quote within 24 hours'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="card p-8">
                <h2 className="text-h2 mb-6 text-center text-text-primary">
                  {locale === 'ar' ? 'تفاصيل طلب عرض السعر' : 'Quote Request Details'}
                </h2>

                <div className="space-y-6">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-body-small font-medium text-text-primary">
                        {locale === 'ar' ? 'الاسم' : 'Name'} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-body-small font-medium text-text-primary">
                        {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-body-small font-medium text-text-primary">
                      {locale === 'ar' ? 'رقم الهاتف' : 'Phone Number'} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-body-small font-medium text-text-primary">
                      {locale === 'ar' ? 'نوع الخدمة' : 'Service Type'} *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="input w-full"
                    >
                      <option value="">
                        {locale === 'ar' ? 'اختر الخدمة' : 'Select Service'}
                      </option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="mb-2 block text-body-small font-medium text-text-primary">
                      {locale === 'ar' ? 'نوع المشروع' : 'Project Type'} *
                    </label>
                    <select
                      id="projectType"
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="input w-full"
                    >
                      <option value="">
                        {locale === 'ar' ? 'اختر نوع المشروع' : 'Select Project Type'}
                      </option>
                      {projectTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-body-small font-medium text-text-primary">
                      {locale === 'ar' ? 'تفاصيل المشروع' : 'Project Details'} *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="textarea w-full"
                      placeholder={
                        locale === 'ar'
                          ? 'أخبرنا المزيد عن مشروعك، الميزانيتك، وأي متطلبات خاصة...'
                          : 'Tell us more about your project, budget, and any specific requirements...'
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Send className="mr-2 h-5 w-5 animate-spin" />
                        {locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {locale === 'ar' ? 'إرسال طلب عرض السعر' : 'Send Quote Request'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="card p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Check className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-h2 mb-4 text-text-primary">
                  {locale === 'ar' ? 'تم استلام طلبك!' : 'Request Received!'}
                </h3>
                <p className="text-body text-text-secondary mb-6">
                  {locale === 'ar'
                    ? 'شكراً لاهتمامك. سنقوم بمراجعة طلبك والتواصل معك في غضون 24 ساعة.'
                    : 'Thank you for your interest. We will review your request and get back to you within 24 hours.'}
                </p>
                <a
                  href={createWhatsAppLink(contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn"
                >
                  {locale === 'ar' ? 'تواصل معنا على واتساب' : 'Contact us on WhatsApp'}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-h2 mb-8 text-text-primary">
              {locale === 'ar' ? 'لماذا تختار ATEX؟' : 'Why Choose ATEX?'}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="card">
                <Check className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-h5 text-text-primary">
                  {locale === 'ar' ? 'خبرة واسعة' : 'Extensive Experience'}
                </h3>
                <p className="text-body-small text-text-muted">
                  {locale === 'ar'
                    ? 'سنوات من الخبرة في المنازل والأنظمة الذكية'
                    : 'Years of experience in smart homes and systems'}
                </p>
              </div>
              <div className="card">
                <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-h5 text-text-primary">
                  {locale === 'ar' ? 'ضمان الجودة' : 'Quality Guarantee'}
                </h3>
                <p className="text-body-small text-text-muted">
                  {locale === 'ar'
                    ? 'منتجات وخدمات عالية الجودة مع ضمان شامل'
                    : 'High-quality products and services with comprehensive warranty'}
                </p>
              </div>
              <div className="card">
                <Zap className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-h5 text-text-primary">
                  {locale === 'ar' ? 'دعم 24/7' : '24/7 Support'}
                </h3>
                <p className="text-body-small text-text-muted">
                  {locale === 'ar'
                    ? 'دعم فني على مدار الساعة طوال أيام الأسبوع'
                    : 'Technical support around the clock, all week'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}