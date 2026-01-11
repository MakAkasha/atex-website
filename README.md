# ATEX - Advanced Technical Experts

A production-ready, high-end bilingual (Arabic-first + English) website for ATEX, a smart home and smart systems solutions provider based in Jeddah, Saudi Arabia.

![ATEX Logo](public/logo.svg)

## 🌟 Overview

ATEX is a premium website showcasing smart home solutions, smart locks, smart systems, smart hotel solutions, smart parking systems, and modular LED display panels. The site is fully bilingual with Arabic (RTL) as the default language and English (LTR) as secondary.

## ✨ Key Features

- **Bilingual Support**: Arabic-first with full RTL support, plus English
- **SEO Optimized**: Structured for search engines with proper metadata, schemas, and sitemaps
- **Modern Design**: Clean luxury aesthetic with subtle animations
- **Visual-First**: Image-heavy layouts with galleries and case studies
- **Responsive**: Fully responsive design for all devices
- **Content-Rich**: Detailed service pages, project case studies, blog, and product catalog
- **Lead Generation**: Contact forms and quote request functionality
- **Fast Performance**: Built with Next.js 14 and optimized for speed

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Forms**: Native HTML forms with honeypot anti-spam
- **SEO**: Custom sitemap, robots.txt, and structured data support

## 📁 Project Structure

```
├── public/                  # Static assets
│   ├── logo.svg            # Logo files
│   ├── favicon.ico         # Favicon
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # SEO sitemap
├── src/
│   ├── app/                # Next.js app directory
│   │   └── [locale]/       # Localized routes
│   │       ├── page.tsx    # Homepage
│   │       ├── services/   # Services pages
│   │       ├── projects/   # Projects pages
│   │       ├── products/   # Products pages
│   │       ├── blog/       # Blog pages
│   │       ├── about.tsx   # About page
│   │       ├── contact.tsx # Contact page
│   │       └── quote.tsx   # Quote request page
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # Site header with nav
│   │   └── Footer.tsx      # Site footer
│   ├── content/            # Site content data
│   │   ├── site.ts         # General site info
│   │   ├── services.ts     # Services data
│   │   ├── projects.ts     # Projects data
│   │   ├── products.ts     # Products data
│   │   ├── blog.ts         # Blog posts data
│   │   ├── media.ts        # Media/imagery data
│   │   └── nav.ts          # Navigation structure
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Helper functions
│   ├── theme/              # Design system
│   │   └── tokens.ts       # Design tokens
│   ├── messages/           # i18n translations
│   │   ├── ar.json         # Arabic translations
│   │   └── en.json         # English translations
│   └── middleware.ts       # Next.js middleware for i18n
├── docs/
│   └── IMPLEMENTATION_PLAN.md  # Project implementation plan
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Email (optional, for form submissions)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
```

### Tailwind Configuration

The design system uses custom tokens defined in `src/theme/tokens.ts`. Tailwind is configured to use these tokens for consistent styling.

### i18n Configuration

Internationalization is handled by `next-intl`. The middleware in `src/middleware.ts` handles locale detection and routing.

## 📝 Content Editing

### Services
Edit services in `src/content/services.ts`. Each service includes:
- Title and description
- Features and benefits
- Use cases and scenarios
- Gallery images
- FAQ section

### Projects
Edit projects in `src/content/projects.ts`. Each project includes:
- Client and location
- Objective, challenge, solution
- Outcomes and timeline
- Gallery images
- Related services

### Blog Posts
Edit blog posts in `src/content/blog.ts`. Each post includes:
- Title, excerpt, content
- Category and tags
- Author and reading time
- Featured image

### Products
Edit products in `src/content/products.ts`. Each product includes:
- Name and description
- Features list
- Specifications
- Pricing
- Images

### Site Information
General site info is in `src/content/site.ts`:
- Company name and description
- Contact information
- Social media links
- Working hours

### Translations
Edit translations in `src/messages/`:
- `ar.json` - Arabic translations
- `en.json` - English translations

## 🌍 Internationalization

### Supported Languages
- **Arabic (ar)** - Default, RTL
- **English (en)** - LTR

### URL Structure
- Arabic: `https://atex.sa/ar/...`
- English: `https://atex.sa/en/...`

### Language Switching
The language switcher in the header preserves the current page when switching languages.

### RTL/LTR Support
All components properly support both RTL (Arabic) and LTR (English) layouts using Next.js's built-in direction handling.

## 🖼️ Media & Images

### Adding Images

1. For general images, place in `public/images/`
2. For content images, reference external URLs or use Unsplash/Pexels
3. Update `src/content/media.ts` with image metadata

### Image Credits

Images are sourced from:
- Unsplash (free stock photos)
- Pexels (free stock photos)

Credit information should be maintained for each image used.

### Alt Text

Always provide descriptive alt text in both Arabic and English for accessibility and SEO.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

The project is optimized for Vercel's platform.

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway

## 🔍 SEO & Performance

### SEO Features

- **Sitemap**: Generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Meta Tags**: Proper title, description, OG tags
- **Structured Data**: JSON-LD schemas for:
  - Organization/LocalBusiness
  - BreadcrumbList
  - FAQPage (on service pages)
  - Article (on blog posts)

### Performance

- Image optimization with Next.js Image component
- Lazy loading for images
- Static generation for faster page loads
- CSS-in-JS with Tailwind CSS
- Minimal JavaScript bundle

### Analytics

Add Google Analytics or similar tracking by setting the `NEXT_PUBLIC_GA_ID` environment variable.

## 🧪 Troubleshooting

### Build Errors

**Problem**: TypeScript errors
```
Solution: Run `npm run lint` to identify and fix TypeScript issues
```

**Problem**: Tailwind classes not working
```
Solution: Ensure Tailwind config is correct and run `npm run build` to regenerate CSS
```

### Development Issues

**Problem**: Port 3000 already in use
```
Solution: Run on a different port: `PORT=3001 npm run dev`
```

**Problem**: Hot reload not working
```
Solution: Restart the dev server and clear `.next` cache: `rm -rf .next && npm run dev`
```

### i18n Issues

**Problem**: Wrong language showing
```
Solution: Check browser language settings or manually specify locale in URL
```

**Problem**: RTL/LTR not switching
```
Solution: Ensure `dir` attribute is set on the root layout
```

## 📋 Issues Log

### Version Compatibility Issues (Resolved)

**Issue**: ESLint Config Mismatch
- **Severity**: Critical
- **Date**: 2026-01-10
- **Problem**: `eslint-config-next: ^15.0.3` was incompatible with `next: 14.2.5`
- **Error Message**: `EISDIR: illegal operation on a directory, readlink 'd:\ATEX\webapps\main\node_modules\next\dist\pages\_app.js'`
- **Root Cause**: Version mismatch caused webpack resolution failures and corrupted symlinks on Windows
- **Solution**: Downgraded `eslint-config-next` to `14.2.5` to match Next.js version
- **File Changed**: `package.json`

**Issue**: Next.js Config TypeScript Support
- **Severity**: Critical
- **Date**: 2026-01-10
- **Problem**: `next.config.ts` not supported in Next.js 14
- **Error Message**: `Configuring Next.js via 'next.config.ts' is not supported`
- **Solution**: Converted to `next.config.mjs` (ES modules)
- **Files Changed**: `next.config.ts` → `next.config.mjs`

### Windows File System Issues (Ongoing)

**Issue**: Corrupted node_modules from repeated deletion
- **Severity**: Medium
- **Date**: 2026-01-10
- **Problem**: Repeatedly deleting `node_modules` during troubleshooting caused symlink corruption
- **Error Message**: `EISDIR: illegal operation on a directory`
- **Workaround**: Use `pnpm` for cleaner installs or ensure single clean install
- **Recommendation**: Never delete node_modules multiple times during same session

### Deprecated Dependencies (Warning Only)

The following dependencies show deprecation warnings but are still functional:

| Package | Current Version | Status | Recommendation |
|---------|----------------|--------|----------------|
| eslint | 8.57.1 | Deprecated | Upgrade to ESLint 9 when next-intl supports it |
| rimraf | 3.0.2 | Deprecated | Already using native Windows `rmdir` |
| glob | 7.2.3 | Deprecated | No immediate replacement needed |
| inflight | 1.0.6 | Deprecated | Not actively used |
| next | 14.2.5 | Security Warning | See CVE-2025-66478 |

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Build fails with `swcMinify` warning | Removed in Next.js 15 | Removed `swcMinify: true` from config |
| Webpack cache warnings | Windows path resolution | Ignore - warnings only, doesn't affect functionality |
| Dev server won't start | Port in use | Kill process: `taskkill /F /IM node.exe` |
| Node_modules missing after install | Install interrupted | Re-run `npm install` |
| Build fails with EISDIR error | Corrupted node_modules | `rm -rf node_modules && npm install` |
| Images not loading | External URL issue | Check `next.config.mjs` remotePatterns |

### Performance Notes

- **Webpack Cache Warnings**: The `[webpack.cache.PackFileCacheStrategy] Caching failed` warnings are cosmetic and don't affect functionality
- **TypeScript Path Resolution**: The `Resolving '../../../typescript/lib/typescript'` warnings are Windows-specific path issues and don't affect builds
- **Build Time**: Initial build may take 2-5 minutes; subsequent builds are faster

### Recovery Steps

If the project becomes corrupted:

1. **Stop all running processes**: `taskkill /F /IM node.exe`
2. **Clean installation**:
   ```bash
   rmdir /s /q node_modules
   rmdir /s /q .next
   del package-lock.json
   npm install
   ```
3. **Start fresh**:
   ```bash
   npm run dev
   ```

### Environment-Specific Notes

**Windows 11**:
- Use PowerShell or Command Prompt with administrator rights for cleanup
- Use `rmdir /s /q` instead of `rm -rf`
- Path issues may occur with external drives (e.g., Mobile SSD)

**Hostinger VPS (Linux)**:
- Use `rm -rf node_modules .next` instead
- Ensure Node.js 18+ is installed
- Use `npm run build && npm start` for production

## 📄 Documentation

- **Implementation Plan**: `docs/IMPLEMENTATION_PLAN.md` - Detailed development roadmap
- **Brand Notes**: `BRAND_REFERENCE_NOTES.md` - Brand guidelines and design tokens

## 🤝 Support

For support and inquiries:
- Email: info@atex.sa
- Phone: +966 52 134 5567
- Location: Jeddah, Saudi Arabia

## 📜 License

Copyright © 2026 ATEX - Advanced Technical Experts. All rights reserved.

## 🙏 Credits

- Design and development by ATEX team
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/) and [Pexels](https://pexels.com/)