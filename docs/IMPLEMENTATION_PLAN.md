# ATEX Website Implementation Plan

**Project**: Advanced Technical Experts (ATEX) - Premium Bilingual Website  
**Location**: Jeddah, KSA  
**Mode**: Light Mode, Arabic-First  
**Tech Stack**: Next.js 15+ (App Router), TypeScript, TailwindCSS, next-intl, Framer Motion

---

## Phase 0: Brand Extraction & Tokens Foundation

### Objective
Extract and hard-code all brand assets from https://atex.sa/rec/smart-home to serve as single source of truth.

### Deliverables
- [x] `/docs/IMPLEMENTATION_PLAN.md` (This file)
- [ ] `/BRAND_REFERENCE_NOTES.md` - Detailed extraction notes
- [ ] `/src/theme/tokens.ts` - Design system tokens
- [ ] `/public/brand/` - Logo assets (SVG/PNG)
- [ ] `tailwind.config.ts` - Mapped to tokens
- [ ] `/src/app/globals.css` - CSS variables from tokens

### Tasks
1. **Manual Brand Extraction** (Using real browser + DevTools)
   - [ ] Open reference page in browser
   - [ ] Extract header logo (prefer SVG)
   - [ ] Extract footer logo
   - [ ] Capture favicon
   - [ ] Inspect all color values (primary, secondary, accent, backgrounds, borders, text)
   - [ ] Document Arabic font family + weights used
   - [ ] Document English/Latin font family + weights used
   - [ ] Measure/inspect border radius values
   - [ ] Capture shadow presets
   - [ ] Document spacing patterns
   - [ ] Inspect button styles (height, padding, radius, outline)
   - [ ] Inspect card styles (border vs shadow)
   - [ ] Document hover/active states

2. **Token Implementation**
   - [ ] Create `/src/theme/tokens.ts` with all extracted values
   - [ ] Map tokens to Tailwind config
   - [ ] Create CSS variables in globals.css
   - [ ] Save logo assets to `/public/brand/`

3. **Documentation**
   - [ ] Create `/BRAND_REFERENCE_NOTES.md`
   - [ ] Document where each token came from (page element + CSS rule)
   - [ ] Note any assumptions made

### Definition of Done
- All brand tokens are extracted and documented
- Logo assets saved with proper naming
- Token system is single source of truth
- Tailwind config maps to tokens
- CSS variables match token values

---

## Phase 1: Project Scaffold + i18n + Layout + Theme

### Objective
Set up the foundational Next.js project with i18n routing and design system.

### Deliverables
- [ ] `package.json` with all dependencies
- [ ] `next.config.ts` with i18n and image optimization
- [ ] `tailwind.config.ts` with theme mapping
- [ ] `/src/app/[locale]/` directory structure
- [ ] `/src/i18n/` configuration files
- [ ] `/src/components/layout/` - Header, Footer, Layout components
- [ ] `/src/components/ui/` - Design system components
- [ ] `/src/lib/` - Utility functions
- [ ] `.eslintrc.json` + `.prettierrc`

### Tasks

1. **Project Initialization**
   - [ ] Initialize Next.js project with TypeScript
   - [ ] Install dependencies:
     - next-intl (i18n routing)
     - framer-motion (animations)
     - next/image, next-themes
     - eslint, prettier
   - [ ] Configure `next.config.ts` for:
     - i18n routing with [locale] segments
     - next/image remote patterns (Unsplash, Pexels)
     - performance optimizations

2. **i18n Configuration**
   - [ ] Set up next-intl with Arabic (ar) as default
   - [ ] Configure `i18n.ts` for locale negotiation
   - [ ] Create message files: `/src/messages/ar.json`, `/src/messages/en.json`
   - [ ] Configure RTL/LTR per locale
   - [ ] Set up language switcher logic
   - [ ] Configure hreflang + canonical URLs

3. **Layout Structure**
   - [ ] Create root layout: `/src/app/[locale]/layout.tsx`
   - [ ] Create header component with:
     - Logo (responsive)
     - Navigation (desktop + mobile menu)
     - Language switcher
     - Contact CTA
   - [ ] Create footer component with:
     - Logo
     - Quick links
     - Contact info
     - Social links
     - Image credits
   - [ ] Implement responsive behavior

4. **Design System Components**
   - [ ] Button (primary, secondary, text, ghost)
   - [ ] Card (elevated, bordered, hover states)
   - [ ] Section wrapper (with animation)
   - [ ] Typography components (H1-H6, body, caption)
   - [ ] Form inputs (text, email, textarea, select)
   - [ ] Loading states
   - [ ] Error states

5. **Utility Functions**
   - [ ] SEO metadata builder
   - [ ] Schema.org JSON-LD builders
   - [ ] Format utilities (phone, email, dates)
   - [ ] Animation presets

### Definition of Done
- Project builds successfully
- i18n routing works (/ar, /en)
- Layout is responsive (mobile, tablet, desktop)
- RTL works correctly for Arabic
- Design system components are reusable
- Language switcher preserves current page

---

## Phase 2: Home + Services Overview + 2 Service Subpages

### Objective
Build the homepage and establish the services section structure.

### Deliverables
- [ ] `/src/app/[locale]/page.tsx` - Homepage
- [ ] `/src/app/[locale]/services/page.tsx` - Services overview
- [ ] `/src/app/[locale]/services/smart-home/page.tsx` - Smart Home detail
- [ ] `/src/app/[locale]/services/smart-locks/page.tsx` - Smart Locks detail
- [ ] `/src/content/services.ts` - Services data
- [ ] `/src/content/media.ts` - Media assets (images/videos)
- [ ] Service-specific components (Hero, Benefits, Gallery, FAQ, CTA)

### Tasks

1. **Homepage Sections**
   - [ ] Hero section (video background or cinematic image + 2 CTAs)
   - [ ] Services preview (cards, mobile horizontal scroll)
   - [ ] Products preview (catalog highlights)
   - [ ] Projects preview (3-6 featured case studies)
   - [ ] Trust signals (partners/clients)
   - [ ] Why ATEX (3-6 pillars)
   - [ ] Process timeline (survey → design → install → handover)
   - [ ] Testimonials (data-driven)
   - [ ] Blog insights preview
   - [ ] Final CTA (quote form)

2. **Services Overview**
   - [ ] Hero section with visual
   - [ ] Services grid (6 main services)
   - [ ] Quick filtering (by category/use-case)
   - [ ] CTA to explore each service

3. **Smart Home Service Page**
   - [ ] Hero with high-end IoT lifestyle visual
   - [ ] What it is (simple explanation)
   - [ ] Benefits (security, comfort, energy savings, ROI)
   - [ ] What's included (modules: lighting, climate, security, entertainment)
   - [ ] Use cases (villas, apartments, offices)
   - [ ] Example scenarios (6 scenarios: morning routine, leaving home, arrival, etc.)
   - [ ] Project samples (2-3 linked to projects)
   - [ ] Gallery (8-12 images + video)
   - [ ] FAQ (6-10 questions with FAQ schema)
   - [ ] Strong CTA block

4. **Smart Locks Service Page**
   - [ ] Hero with security-focused visual
   - [ ] What it is
   - [ ] Benefits (security, convenience, access control)
   - [ ] What's included (biometric, keypad, remote, integration)
   - [ ] Use cases (homes, offices, hotels)
   - [ ] Example scenarios (5-6 scenarios)
   - [ ] Project samples (2-3)
   - [ ] Gallery (8-10 images)
   - [ ] FAQ (6-10 questions with FAQ schema)
   - [ ] CTA block

5. **Content Management**
   - [ ] Create `/src/content/services.ts` with all service data (AR + EN)
   - [ ] Create `/src/content/media.ts` with curated images/videos
   - [ ] Add alt text for all images (keyword-aware, natural)
   - [ ] Map media to services/projects

### Definition of Done
- Homepage loads with all sections
- Services overview lists all 6 services
- Smart Home and Smart Locks pages are complete with all sections
- Content is bilingual and natural-sounding in Arabic
- Images are optimized and responsive
- FAQ schema is implemented
- Internal links work correctly

---

## Phase 3: Remaining Service Pages + Products Overview

### Objective
Complete all service pages and build the products catalog.

### Deliverables
- [ ] `/src/app/[locale]/services/smart-systems/page.tsx`
- [ ] `/src/app/[locale]/services/smart-hotel/page.tsx`
- [ ] `/src/app/[locale]/services/smart-parking/page.tsx`
- [ ] `/src/app/[locale]/services/modular-led-panels/page.tsx`
- [ ] `/src/app/[locale]/products/page.tsx` - Products overview
- [ ] `/src/app/[locale]/products/[slug]/page.tsx` - Product detail

### Tasks

1. **Remaining Service Pages** (each needs same structure as Phase 2)
   - [ ] Smart Systems (الأنظمة الذكية)
     - Focus on building automation, BMS, integration
   - [ ] Smart Hotel (فندق ذكي)
     - Focus on hotel-specific solutions, guest experience
   - [ ] Smart Parking Systems (أنظمة المواقف الذكية)
     - Focus on LPR, payment, management
   - [ ] Modular LED Display Panels (لوحات عرض LED معيارية)
     - Focus on indoor/outdoor applications, content management

2. **Products Overview**
   - [ ] Hero section
   - [ ] Category filters (smart home, locks, displays, etc.)
   - [ ] Product grid with cards
   - [ ] Product cards include: image, title, short description, category, CTAs
   - [ ] Comparison table (lightweight, expandable)
   - [ ] Mobile-optimized layout

3. **Product Detail Pages**
   - [ ] Hero with product visual
   - [ ] Product overview
   - [ ] Key features (with icons)
   - [ ] Technical specifications (marketing-safe)
   - [ ] Use cases
   - [ ] Related products
   - [ ] Request Quote CTA
   - [ ] WhatsApp CTA

4. **Content Updates**
   - [ ] Complete `/src/content/services.ts` with all services
   - [ ] Create `/src/content/products.ts` with product data
   - [ ] Update `/src/content/media.ts` with product images

### Definition of Done
- All 6 service pages are complete and consistent
- Products overview lists all product families
- Product detail pages work with dynamic routing
- All content is bilingual and SEO-optimized
- Internal linking between services/products

---

## Phase 4: Projects + Case Study Details

### Objective
Build the projects showcase and detailed case studies.

### Deliverables
- [ ] `/src/app/[locale]/projects/page.tsx` - Projects listing
- [ ] `/src/app/[locale]/projects/[slug]/page.tsx` - Project detail
- [ ] `/src/content/projects.ts` - Project data (6+ seed projects)
- [ ] Project gallery components

### Tasks

1. **Projects Listing**
   - [ ] Hero section
   - [ ] Project filters (by service type, location, year)
   - [ ] Project grid with cards
   - [ ] Project cards include: thumbnail, title, location, services, date
   - [ ] Load more / pagination

2. **Project Detail Pages**
   - [ ] Hero with project visual(s)
   - [ ] Project overview (objective, client, location, timeline)
   - [ ] Challenge section
   - [ ] Solution section
   - [ ] Implementation details
   - [ ] Outcomes/results (with metrics if available)
   - [ ] Gallery (10-15 images, carousel)
   - [ ] Video embed (if available)
   - [ ] Related services links
   - [ ] Related projects
   - [ ] Request Quote CTA

3. **Seed Projects** (6 realistic KSA-style projects)
   - [ ] Luxury Villa Smart Home (Jeddah)
   - [ ] Commercial Tower Smart Systems (Riyadh)
   - [ ] 5-Star Hotel Automation (Jeddah)
   - [ ] Smart Parking for Mall (Dammam)
   - [ ] Corporate Office Access Control (Riyadh)
   - [ ] LED Display for Stadium (Jeddah)

4. **Content Updates**
   - [ ] Create `/src/content/projects.ts` with all project data
   - [ ] Add project images to `/src/content/media.ts`

### Definition of Done
- Projects listing displays all seeded projects
- Filtering works correctly
- Each project detail page is comprehensive
- Galleries are interactive
- Related content links work
- All content is bilingual

---

## Phase 5: Blog + Seed Posts

### Objective
Build the blog/insights section with SEO-focused content.

### Deliverables
- [ ] `/src/app/[locale]/blog/page.tsx` - Blog listing
- [ ] `/src/app/[locale]/blog/[slug]/page.tsx` - Blog post detail
- [ ] `/src/content/blog.ts` - Blog post data (10+ seed posts)
- [ ] Category/tag system
- [ ] Article schema implementation

### Tasks

1. **Blog Listing**
   - [ ] Hero section
   - [ ] Category filter
   - [ ] Tag cloud
   - [ ] Blog post grid (cards with thumbnail, title, excerpt, date, category)
   - [ ] Featured posts section
   - [ ] Load more / pagination

2. **Blog Post Detail**
   - [ ] Hero with featured image
   - [ ] Post title (H1)
   - [ ] Metadata (date, author, reading time, category, tags)
   - [ ] Table of contents (if long post)
   - [ ] Content body (MDX support)
   - [ ] Author bio
   - [ ] Related posts
   - [ ] Share buttons (social)
   - [ ] Newsletter signup
   - [ ] Article schema JSON-LD

3. **Seed Blog Posts** (10+ posts, bilingual targeting keyword clusters)
   - [ ] "Complete Guide to Smart Home Automation in KSA" (AR + EN)
   - [ ] "Benefits of Smart Locks for Saudi Homes" (AR + EN)
   - [ ] "How Smart Parking Systems Transform Retail" (AR + EN)
   - [ ] "Hotel Automation: Guest Experience Trends" (AR + EN)
   - [ ] "LED Display Panels for Modern Business" (AR + EN)
   - [ ] "Smart Home ROI: Is It Worth It?" (AR + EN)
   - [ ] "Security Features in Modern Access Control" (AR)
   - [ ] "Energy Savings with Smart Systems" (AR)
   - [ ] "Choosing the Right LED Display" (EN)
   - [ ] "Smart Hotel Technology in Saudi Arabia" (EN)

4. **Content Updates**
   - [ ] Create `/src/content/blog.ts` with all blog data
   - [ ] Add blog images to `/src/content/media.ts`

### Definition of Done
- Blog listing displays all posts
- Categories and tags work
- Each post detail is complete with schema
- Internal linking to services/products/projects
- All content is SEO-optimized

---

## Phase 6: Contact + Quote Flow + Forms

### Objective
Build conversion-focused contact and quote functionality.

### Deliverables
- [ ] `/src/app/[locale]/contact/page.tsx` - Contact page
- [ ] `/src/app/[locale]/quote/page.tsx` - Quote landing page
- [ ] `/src/app/[locale]/quote/thank-you/page.tsx` - Thank you page
- [ ] Form components with validation
- [ ] Anti-spam measures

### Tasks

1. **Contact Page**
   - [ ] Hero section
   - [ ] Contact form (name, email, phone, subject, message)
   - [ ] Contact info cards:
     - HQ address (Arabic + English)
     - Phone numbers
     - Email addresses
     - Working hours
   - [ ] Map embed (Google Maps)
   - [ ] WhatsApp CTA
   - [ ] Social links
   - [ ] Form validation
   - [ ] Anti-spam (honeypot field)
   - [ ] Rate limiting (if backend implemented)

2. **Quote Landing Page**
   - [ ] Hero with value proposition
   - [ ] What happens next section
   - [ ] Quote form (multi-step if needed):
     - Contact info
     - Service interest
     - Project details
     - Budget range
     - Preferred timeline
   - [ ] Trust signals (reviews, projects count, years)
   - [ ] FAQs about quoting process
   - [ ] Success stories/testimonials
   - [ ] Form validation

3. **Thank You Page**
   - [ ] Confirmation message
   - [ ] Next steps timeline
   - [ ] Contact info for immediate needs
   - [ ] Return to home button

4. **Form Components**
   - [ ] Reusable form input components
   - [ ] Validation logic (Zod or similar)
   - [ ] Error states
   - [ ] Loading states
   - [ ] Success states

### Definition of Done
- Contact form validates correctly
- Quote form captures all needed info
- Forms have anti-spam protection
- Thank you pages work
- All contact info is accurate and verified from reference site

---

## Phase 7: SEO (Metadata, Schema, Sitemap) + Performance Pass

### Objective
Implement comprehensive SEO and optimize performance.

### Deliverables
- [ ] Per-page metadata (title, description, OG, Twitter) for all pages
- [ ] JSON-LD schemas:
  - Organization/LocalBusiness (site-wide)
  - BreadcrumbList (on relevant pages)
  - FAQPage (on service pages)
  - Article (on blog posts)
  - Product (on product pages)
- [ ] `sitemap.xml` generation
- [ ] `robots.txt` configuration
- [ ] Performance optimizations

### Tasks

1. **Metadata Implementation**
   - [ ] Create `/src/lib/seo.ts` helper functions
   - [ ] Implement metadata for homepage
   - [ ] Implement metadata for all service pages
   - [ ] Implement metadata for products overview
   - [ ] Implement metadata for each product
   - [ ] Implement metadata for projects listing and details
   - [ ] Implement metadata for blog listing and posts
   - [ ] Implement metadata for contact and quote pages
   - [ ] Add OG images for key pages
   - [ ] Add Twitter card meta tags

2. **Schema.org Implementation**
   - [ ] Create `/src/lib/schema.ts` helper functions
   - [ ] Implement Organization schema (root layout)
   - [ ] Implement LocalBusiness schema (root layout)
   - [ ] Implement BreadcrumbList schema (pages with hierarchy)
   - [ ] Implement FAQPage schema (service pages)
   - [ ] Implement Article schema (blog posts)
   - [ ] Implement Product schema (product pages)
   - [ ] Implement Service schema (service pages - optional)

3. **Sitemap & Robots**
   - [ ] Create `sitemap.ts` for dynamic generation
   - [ ] Include all pages in sitemap
   - [ ] Set proper priority and changefreq
   - [ ] Create `robots.txt`
   - [ ] Configure crawl directives

4. **Performance Optimization**
   - [ ] Audit site with Lighthouse
   - [ ] Optimize images (next/image, WebP)
   - [ ] Implement lazy loading for below-fold images
   - [ ] Minimize JavaScript bundles
   - [ ] Implement code splitting
   - [ ] Add font optimization (display: swap)
   - [ ] Optimize animations (reduce-motion support)
   - [ ] Target 90+ Lighthouse score

### Definition of Done
- All pages have complete metadata
- All schemas validate with Google Rich Results Test
- Sitemap generates correctly
- Lighthouse score is 90+ across categories
- Core Web Vitals are green
- Reduced-motion support works

---

## Phase 8: QA (RTL, Mobile, Accessibility) + Final Polish

### Objective
Ensure quality across all dimensions.

### Deliverables
- [ ] QA checklist completed
- [ ] All bugs fixed
- [ ] Final README.md
- [ ] Production-ready code

### Tasks

1. **RTL Testing** (Arabic)
   - [ ] Check all pages in RTL mode
   - [ ] Verify text direction and alignment
   - [ ] Check layout mirroring (flex/grid)
   - [ ] Test navigation in RTL
   - [ ] Verify forms in RTL
   - [ ] Check icons and symbols in RTL
   - [ ] Test language switcher functionality

2. **Mobile Responsiveness**
   - [ ] Test homepage on mobile (375px, 414px)
   - [ ] Test all service pages on mobile
   - [ ] Test products on mobile
   - [ ] Test projects on mobile
   - [ ] Test blog on mobile
   - [ ] Test contact/quote forms on mobile
   - [ ] Check horizontal scroll rails
   - [ ] Test tap targets (minimum 44x44px)
   - [ ] Verify touch gestures

3. **Accessibility**
   - [ ] Run accessibility audit (Lighthouse)
   - [ ] Check color contrast ratios
   - [ ] Verify semantic HTML
   - [ ] Test keyboard navigation
   - [ ] Verify ARIA labels
   - [ ] Check focus states
   - [ ] Test screen reader compatibility
   - [ ] Verify alt text on all images
   - [ ] Test reduced-motion support

4. **Cross-Browser Testing**
   - [ ] Test in Chrome
   - [ ] Test in Safari
   - [ ] Test in Firefox
   - [ ] Test in Edge
   - [ ] Test mobile browsers

5. **Content Quality**
   - [ ] Proofread all Arabic content
   - [ ] Proofread all English content
   - [ ] Verify all links work
   - [ ] Check for broken images
   - [ ] Verify all forms validate
   - [ ] Test language switching preserves content
   - [ ] Verify contact information accuracy

6. **Final Polish**
   - [ ] Add smooth scroll behavior
   - [ ] Add loading states
   - [ ] Add error boundaries
   - [ ] Optimize animations
   - [ ] Clean up unused code
   - [ ] Remove console.log statements
   - [ ] Verify TypeScript types

### Definition of Done
- All QA checks pass
- No critical bugs
- RTL works perfectly
- Mobile is fully functional
- Accessibility score is 95+
- All content is accurate and professional
- Code is clean and production-ready

---

## Component Inventory

### Layout Components
- `Header` - Logo, nav, language switcher, CTA
- `Footer` - Logo, links, contact, credits
- `Layout` - Wraps page with header/footer

### UI Components (Design System)
- `Button` - Primary, secondary, text, ghost variants
- `Card` - Elevated, bordered variants with hover
- `Section` - Wraps content with animation
- `Typography` - H1-H6, body, caption
- `Input` - Text, email, textarea, select
- `Form` - Form wrapper with validation
- `Modal` - Overlay dialog
- `Carousel` - Image/slider gallery
- `Badge` - Category/tags
- `Divider` - Visual separator
- `Skeleton` - Loading states

### Feature Components
- `Hero` - Page hero with CTA
- `ServiceCard` - Service preview card
- `ServiceHero` - Service page hero
- `ServiceBenefits` - Benefits section
- `ServiceGallery` - Image/video gallery
- `ServiceFAQ` - FAQ with accordion
- `ProductCard` - Product preview card
- `ProductDetail` - Product detail view
- `ProjectCard` - Project preview card
- `ProjectGallery` - Project image carousel
- `BlogCard` - Blog post preview
- `BlogContent` - MDX renderer
- `Timeline` - Process/implementation timeline
- `TestimonialCard` - Customer testimonial
- `TrustSignals` - Partners/clients showcase
- `ContactForm` - Contact form
- `QuoteForm` - Quote request form
- `LanguageSwitcher` - Language toggle
- `CTA` - Call-to-action blocks

### Utility Components
- `SEOHead` - Metadata + schema
- `Image` - Optimized next/image wrapper
- `Video` - Video embed/player
- `Map` - Map embed
- `SocialLinks` - Social media icons
- `ScrollReveal` - Scroll-triggered animation
- `SmoothScroll` - Smooth scroll behavior

---

## File Structure (Final)

```
d:\ATEX\webapps\
├── main\
│   ├── public\
│   │   ├── brand\
│   │   │   ├── logo.svg
│   │   │   ├── logo-footer.svg
│   │   │   └── favicon.ico
│   │   └── ... (other public assets)
│   ├── src\
│   │   ├── app\
│   │   │   ├── [locale]\
│   │   │   │   ├── page.tsx (Home)
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── services\
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── smart-home\
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── smart-locks\
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── smart-systems\
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── smart-hotel\
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── smart-parking\
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── modular-led-panels\
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── products\
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]\
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── projects\
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]\
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── blog\
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]\
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── about\
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── contact\
│   │   │   │   │   └── page.tsx
│   │   │   │   └── quote\
│   │   │   │       ├── page.tsx
│   │   │   │       └── thank-you\
│   │   │   │           └── page.tsx
│   │   │   ├── layout.tsx (Root)
│   │   │   ├── globals.css
│   │   │   ├── sitemap.ts
│   │   │   └── robots.txt
│   │   ├── components\
│   │   │   ├── layout\
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Layout.tsx
│   │   │   ├── ui\
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Section.tsx
│   │   │   │   ├── Typography.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Form.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Carousel.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Divider.tsx
│   │   │   │   └── Skeleton.tsx
│   │   │   ├── features\
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── ServiceCard.tsx
│   │   │   │   ├── ServiceHero.tsx
│   │   │   │   ├── ServiceBenefits.tsx
│   │   │   │   ├── ServiceGallery.tsx
│   │   │   │   ├── ServiceFAQ.tsx
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductDetail.tsx
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── ProjectGallery.tsx
│   │   │   │   ├── BlogCard.tsx
│   │   │   │   ├── BlogContent.tsx
│   │   │   │   ├── Timeline.tsx
│   │   │   │   ├── TestimonialCard.tsx
│   │   │   │   ├── TrustSignals.tsx
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── QuoteForm.tsx
│   │   │   │   ├── LanguageSwitcher.tsx
│   │   │   │   └── CTA.tsx
│   │   │   └── utility\
│   │   │       ├── SEOHead.tsx
│   │   │       ├── Image.tsx
│   │   │       ├── Video.tsx
│   │   │       ├── Map.tsx
│   │   │       ├── SocialLinks.tsx
│   │   │       ├── ScrollReveal.tsx
│   │   │       └── SmoothScroll.tsx
│   │   ├── content\
│   │   │   ├── services.ts
│   │   │   ├── products.ts
│   │   │   ├── projects.ts
│   │   │   ├── blog.ts
│   │   │   ├── media.ts
│   │   │   ├── nav.ts
│   │   │   └── site.ts
│   │   ├── i18n\
│   │   │   ├── i18n.ts
│   │   │   ├── request.ts
│   │   │   ├── ar.json
│   │   │   └── en.json
│   │   ├── lib\
│   │   │   ├── seo.ts
│   │   │   ├── schema.ts
│   │   │   ├── utils.ts
│   │   │   └── analytics.ts
│   │   └── theme\
│   │       └── tokens.ts
│   ├── docs\
│   │   └── IMPLEMENTATION_PLAN.md
│   ├── BRAND_REFERENCE_NOTES.md
│   ├── README.md
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── .eslintrc.json
│   └── .prettierrc
```

---

## Progress Tracking

This plan will be updated with checkboxes as we complete each phase. Current status:

- [ ] Phase 0: Brand Extraction & Tokens Foundation
- [ ] Phase 1: Project Scaffold + i18n + Layout + Theme
- [ ] Phase 2: Home + Services Overview + 2 Service Subpages
- [ ] Phase 3: Remaining Service Pages + Products Overview
- [ ] Phase 4: Projects + Case Study Details
- [ ] Phase 5: Blog + Seed Posts
- [ ] Phase 6: Contact + Quote Flow + Forms
- [ ] Phase 7: SEO (Metadata, Schema, Sitemap) + Performance Pass
- [ ] Phase 8: QA (RTL, Mobile, Accessibility) + Final Polish

---

## Notes & Assumptions

1. **Brand Extraction**: Will use manual browser inspection since automated fetch may be blocked by WAF.
2. **Contact Info**: Initial values are from task requirements; will verify against actual footer.
3. **Media**: Using Unsplash and Pexels for images; all credits will be documented.
4. **Forms**: Client-side validation only; backend submission can be added later.
5. **Animations**: Using Framer Motion with reduced-motion support.
6. **SEO**: Comprehensive metadata and schema implementation for better search visibility.
7. **Performance**: Targeting 90+ Lighthouse score across all metrics.

---

## Success Criteria

1. ✅ Production-ready, professional website
2. ✅ Bilingual (Arabic-first) with proper RTL support
3. ✅ SEO-optimized for target keywords
4. ✅ Image/video-forward design
5. ✅ Subtle, premium animations
6. ✅ All required pages and sections implemented
7. ✅ Responsive and accessible
8. ✅ Complete documentation (README + BRAND_REFERENCE_NOTES.md)
9. ✅ Brand consistency with reference site
10. ✅ Deployable to Vercel

---

**Last Updated**: January 10, 2026
**Status**: In Progress - Phase 0