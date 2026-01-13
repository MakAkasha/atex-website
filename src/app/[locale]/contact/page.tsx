'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Check, Building, ShoppingCart, Wrench } from 'lucide-react'
import { getContactInfoForLocale } from '@/content/site'
import { formatPhoneNumber, createWhatsAppLink, createEmailLink } from '@/lib/utils'

export default function ContactPage() {
  const t = useTranslations()
  const locale = useLocale().replace('/', '') as 'ar' | 'en' || 'ar'
  const contact = getContactInfoForLocale(locale)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    honeypot: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.honeypot) return // Anti-spam check

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactDepartments = [
    {
      icon: Building,
      title: t('contact.general'),
      email: contact.email.general,
      phone: contact.phone,
    },
    {
      icon: ShoppingCart,
      title: t('contact.sales'),
      email: contact.email.sales,
      phone: contact.phone,
    },
    {
      icon: Building,
      title: t('contact.projects'),
      email: contact.email.projects,
      phone: contact.phone,
    },
    {
      icon: Wrench,
      title: t('contact.support'),
      email: contact.email.support,
      phone: contact.phone,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background-tertiary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-h1 mb-6 text-text-primary">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-text-secondary">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Address */}
            <div className="card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-text-primary">
                {t('contact.info.address')}
              </h3>
              <p className="text-body-small text-text-muted">{contact.address}</p>
            </div>

            {/* Phone */}
            <div className="card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-text-primary">
                {t('contact.info.phone')}
              </h3>
              <a
                href={`tel:${contact.phone}`}
                className="text-body-small text-text-muted hover:text-primary transition-colors"
              >
                {formatPhoneNumber(contact.phone)}
              </a>
            </div>

            {/* Email */}
            <div className="card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-text-primary">
                {t('contact.info.email')}
              </h3>
              <a
                href={createEmailLink(contact.email.general)}
                className="text-body-small text-text-muted hover:text-primary transition-colors"
              >
                {contact.email.general}
              </a>
            </div>

            {/* Working Hours */}
            <div className="card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-text-primary">
                {t('contact.info.workingHours')}
              </h3>
              <p className="text-body-small text-text-muted">{contact.workingHours}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Departments */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-h2 mb-8 text-center text-text-primary">
              {locale === 'ar' ? 'أقسام التواصل' : 'Contact Departments'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {contactDepartments.map((dept, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <dept.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-h5 text-text-primary">{dept.title}</h3>
                  </div>
                  <div className="space-y-2">
                    <a
                      href={createEmailLink(dept.email)}
                      className="flex items-center gap-2 text-body-small text-text-muted hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {dept.email}
                    </a>
                    <a
                      href={`tel:${dept.phone}`}
                      className="flex items-center gap-2 text-body-small text-text-muted hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {formatPhoneNumber(dept.phone)}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-background">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="text-h2 mb-4 text-text-primary">
                {locale === 'ar' ? 'أرسل رسالة خاصة' : 'Send a Private Message'}
              </h2>
              <p className="text-body text-text-secondary">
                {locale === 'ar'
                  ? 'املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت.'
                  : 'Fill out the form below and we will get back to you as soon as possible.'}
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="card p-8">
                <div className="space-y-6">
                  {/* Honeypot for anti-spam */}
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
                        {t('contact.form.name')} *
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
                        {t('contact.form.email')} *
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

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-body-small font-medium text-text-primary">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-body-small font-medium text-text-primary">
                        {t('contact.form.subject')} *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="input w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-body-small font-medium text-text-primary">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="textarea w-full"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Send className={`${locale === 'ar' ? 'ml-2' : 'mr-2'} h-5 w-5 animate-spin`} />
                        {locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send className={`${locale === 'ar' ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="card p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Check className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-h2 mb-4 text-text-primary">
                  {t('contact.form.success')}
                </h3>
                <button
                  onClick={() => {
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '', honeypot: '' })
                    setIsSubmitted(false)
                  }}
                  className="btn btn-primary"
                >
                  {locale === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 mb-8 text-text-primary">
              {locale === 'ar' ? 'تواصل معنا مباشرة' : 'Contact Us Directly'}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href={createWhatsAppLink(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center justify-center gap-4 p-6 hover:border-primary transition-colors"
              >
                <MessageCircle className="h-8 w-8 text-green-600" />
                <span className="font-medium text-text-primary">{t('common.whatsapp')}</span>
              </a>
              <a
                href={`/${locale}/quote`}
                className="card flex items-center justify-center gap-4 p-6 hover:border-primary transition-colors"
              >
                <Send className="h-8 w-8 text-primary" />
                <span className="font-medium text-text-primary">{t('common.quote')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}