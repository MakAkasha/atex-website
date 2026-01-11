import { Locale } from '@/i18n/request'
import { getReadingTime } from '@/lib/utils'

export interface BlogPost {
  id: string
  slug: string
  title: {
    ar: string
    en: string
  }
  excerpt: {
    ar: string
    en: string
  }
  content: {
    ar: string
    en: string
  }
  category: {
    ar: string
    en: string
  }
  tags: {
    ar: string[]
    en: string[]
  }
  image?: string
  author: {
    ar: string
    en: string
  }
  date: string
  readingTime: number
  featured: boolean
  relatedServices?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'complete-guide-smart-home-automation-ksa',
    slug: 'complete-guide-smart-home-automation-ksa',
    title: {
      ar: 'الدليل الشامل لأتمتة المنازل الذكية في المملكة العربية السعودية',
      en: 'Complete Guide to Smart Home Automation in Saudi Arabia',
    },
    excerpt: {
      ar: 'اكتشف كل ما تحتاج معرفته عن أتمتة المنازل الذكية في السعودية: الفوائد، التكاليف، الأنظمة المتاحة، وكيف تبدأ في تحويل منزلك.',
      en: 'Discover everything you need to know about smart home automation in Saudi Arabia: benefits, costs, available systems, and how to start transforming your home.',
    },
    content: {
      ar: '# مقدمة\n\nأتمتة المنازل الذكية أصبحت واقعاً في المملكة العربية السعودية، مع تزايد الوعي بأهميتها وفوائدها. في هذا الدليل الشامل، سنستكشف كل ما تحتاج معرفته قبل البدء في مشروع أتمتة منزلك.\n\n## ما هو المنزل الذكي؟\n\nالمنزل الذكي هو نظام يربط جميع أجهزتك المنزلية وأجهزتك الإلكترونية معاً، مما يسمح لك بالتحكم فيها تلقائياً أو عن بعد من خلال هاتفك الذكي أو جهازك اللوحي.\n\n## فوائد المنزل الذكي\n\n### 1. الراحة\n\nالتحكم في منزلك من أي مكان في العالم. يمكنك تشغيل التكييف قبل الوصول، فتح الأقفال لأفراد الأسرة، أو إطفاء الأضواء إذا نسيت.\n\n### 2. توفير الطاقة\n\nالأنظمة الذكية تقلل من استهلاك الطاقة بشكل كبير. يمكنك توفير ما يصل إلى 30% من فواتير الكهرباء.\n\n### 3. الأمان\n\nأنظمة الأمان الذكية توفر حماية متقدمة مع مراقبة في الوقت الفعلي وإشعارات فورية.\n\n## تكلفة المنزل الذكي\n\nتختلف التكلفة بناءً على حجم المشروع والأنظمة المختارة. يمكن أن يبدأ من 5,000 ريال للأنظمة البسيطة وصولاً إلى 100,000 ريال للفيلا الفاخرة.\n\n## كيف تبدأ؟\n\n1. حدد احتياجاتك وميزانيتك\n2. استشر خبيراً في المنازل الذكية\n3. اختر الأنظمة المناسبة\n4. قم بالتثبيت والتدريب\n5. استمتع بمنزلك الذكي!\n\n## خاتمة\n\nالمنزل الذكي ليس مستقبل فقط، بل هو حاضر متاح للجميع. ابدأ رحلتك اليوم واستمتع بالراحة والأمان وتوفير الطاقة.',
      en: '# Introduction\n\nSmart home automation has become a reality in Saudi Arabia, with increasing awareness of its importance and benefits. In this comprehensive guide, we will explore everything you need to know before starting your home automation project.\n\n## What is a Smart Home?\n\nA smart home is a system that connects all your home appliances and electronic devices together, allowing you to control them automatically or remotely through your smartphone or tablet.\n\n## Benefits of a Smart Home\n\n### 1. Convenience\n\nControl your home from anywhere in the world. You can turn on the AC before arriving, unlock doors for family members, or turn off lights if you forgot.\n\n### 2. Energy Savings\n\nSmart systems significantly reduce energy consumption. You can save up to 30% on your electricity bills.\n\n### 3. Security\n\nSmart security systems provide advanced protection with real-time monitoring and instant notifications.\n\n## Cost of a Smart Home\n\nCosts vary based on project size and selected systems. It can start from 5,000 SAR for simple systems up to 100,000 SAR for luxury villas.\n\n## How to Start?\n\n1. Determine your needs and budget\n2. Consult a smart home expert\n3. Choose the right systems\n4. Install and train\n5. Enjoy your smart home!\n\n## Conclusion\n\nSmart home is not just the future, but a present available to everyone. Start your journey today and enjoy convenience, security, and energy savings.',
    },
    category: {
      ar: 'المنزل الذكي',
      en: 'Smart Home',
    },
    tags: {
      ar: ['المنزل الذكي', 'أتمتة', 'السعودية', 'نصائح', 'توفير الطاقة'],
      en: ['smart home', 'automation', 'Saudi Arabia', 'tips', 'energy savings'],
    },
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-12-01',
    readingTime: getReadingTime('# Introduction\n\nSmart home automation has become a reality in Saudi Arabia, with increasing awareness of its importance and benefits. In this comprehensive guide, we will explore everything you need to know before starting your home automation project.\n\n## What is a Smart Home?\n\nA smart home is a system that connects all your home appliances and electronic devices together, allowing you to control them automatically or remotely through your smartphone or tablet.\n\n## Benefits of a Smart Home\n\n### 1. Convenience\n\nControl your home from anywhere in the world. You can turn on the AC before arriving, unlock doors for family members, or turn off lights if you forgot.\n\n### 2. Energy Savings\n\nSmart systems significantly reduce energy consumption. You can save up to 30% on your electricity bills.\n\n### 3. Security\n\nSmart security systems provide advanced protection with real-time monitoring and instant notifications.\n\n## Cost of a Smart Home\n\nCosts vary based on project size and selected systems. It can start from 5,000 SAR for simple systems up to 100,000 SAR for luxury villas.\n\n## How to Start?\n\n1. Determine your needs and budget\n2. Consult a smart home expert\n3. Choose the right systems\n4. Install and train\n5. Enjoy your smart home!\n\n## Conclusion\n\nSmart home is not just the future, but a present available to everyone. Start your journey today and enjoy convenience, security, and energy savings.'),
    featured: true,
    relatedServices: ['smart-home'],
  },
  {
    id: 'benefits-smart-locks-saudi-homes',
    slug: 'benefits-smart-locks-saudi-homes',
    title: {
      ar: 'فوائد الأقفال الذكية للمنازل السعودية',
      en: 'Benefits of Smart Locks for Saudi Homes',
    },
    excerpt: {
      ar: 'اكتشف لماذا الأقفال الذكية أصبحت الخيار المفضل للمنازل السعودية: أمان محسّن، راحة، وسهولة الاستخدام.',
      en: 'Discover why smart locks have become the preferred choice for Saudi homes: enhanced security, convenience, and ease of use.',
    },
    content: {
      ar: '# مقدمة\n\nالأقفال الذكية أصبحت جزءاً أساسياً من المنازل الحديثة في السعودية. في هذا المقال، سنستكشف فوائدها المتعددة.',
      en: '# Introduction\n\nSmart locks have become an essential part of modern homes in Saudi Arabia. In this article, we will explore their multiple benefits.',
    },
    category: {
      ar: 'الأقفال الذكية',
      en: 'Smart Locks',
    },
    tags: {
      ar: ['الأقفال الذكية', 'أمان', 'المنزل', 'التقنية'],
      en: ['smart locks', 'security', 'home', 'technology'],
    },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-11-28',
    readingTime: 5,
    featured: true,
    relatedServices: ['smart-locks'],
  },
  {
    id: 'smart-parking-transforms-retail',
    slug: 'smart-parking-transforms-retail',
    title: {
      ar: 'كيف تحول أنظمة المواقف الذكية تجارة التجزئة',
      en: 'How Smart Parking Systems Transform Retail',
    },
    excerpt: {
      ar: 'تكتشف كيف تحسن أنظمة المواقف الذكية تجربة العملاء في مراكز التسوق وتزيد من الكفاءة التشغيلية.',
      en: 'Discover how smart parking systems improve customer experience in shopping malls and increase operational efficiency.',
    },
    content: {
      ar: '# مقدمة\n\nأنظمة المواقف الذكية تحول تجربة التسوق في مراكز التسوق الحديثة.',
      en: '# Introduction\n\nSmart parking systems are transforming the shopping experience in modern malls.',
    },
    category: {
      ar: 'أنظمة المواقف',
      en: 'Parking Systems',
    },
    tags: {
      ar: ['المواقف الذكية', 'مراكز التسوق', 'تجربة العملاء', 'الكفاءة'],
      en: ['smart parking', 'shopping malls', 'customer experience', 'efficiency'],
    },
    image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-11-25',
    readingTime: 6,
    featured: false,
    relatedServices: ['smart-parking'],
  },
  {
    id: 'hotel-automation-guest-experience-trends',
    slug: 'hotel-automation-guest-experience-trends',
    title: {
      ar: 'أتمتة الفنادق: اتجاهات تجربة الضيوف',
      en: 'Hotel Automation: Guest Experience Trends',
    },
    excerpt: {
      ar: 'استكشف أحدث اتجاهات أتمتة الفنادق وكيف تعزز تجربة الضيوف في الفنادق السعودية.',
      en: 'Explore the latest hotel automation trends and how they enhance guest experience in Saudi hotels.',
    },
    content: {
      ar: '# مقدمة\n\nأتمتة الفنادق تتحول بسرعة لتصبح معياراً في صناعة الضيافة.',
      en: '# Introduction\n\nHotel automation is rapidly becoming a standard in the hospitality industry.',
    },
    category: {
      ar: 'الفندق الذكي',
      en: 'Smart Hotel',
    },
    tags: {
      ar: ['الفندق الذكي', 'تجربة الضيوف', 'الضيافة', 'التقنية'],
      en: ['smart hotel', 'guest experience', 'hospitality', 'technology'],
    },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-11-22',
    readingTime: 5,
    featured: false,
    relatedServices: ['smart-hotel'],
  },
  {
    id: 'led-display-modern-business',
    slug: 'led-display-modern-business',
    title: {
      ar: 'لوحات عرض LED للأعمال الحديثة',
      en: 'LED Display Panels for Modern Business',
    },
    excerpt: {
      ar: 'اكتشف كيف يمكن لشاشات LED تحسين تجربة عملائك وزيادة مبيعاتك.',
      en: 'Discover how LED display panels can improve your customer experience and increase your sales.',
    },
    content: {
      ar: '# مقدمة\n\nلوحات عرض LED أصبحت أداة تسويقية قوية للأعمال الحديثة.',
      en: '# Introduction\n\nLED display panels have become a powerful marketing tool for modern businesses.',
    },
    category: {
      ar: 'لوحات عرض LED',
      en: 'LED Displays',
    },
    tags: {
      ar: ['LED', 'التسويق', 'الأعمال', 'العرض'],
      en: ['LED', 'marketing', 'business', 'display'],
    },
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-11-20',
    readingTime: 5,
    featured: false,
    relatedServices: ['modular-led-panels'],
  },
  {
    id: 'smart-home-roi-worth-it',
    slug: 'smart-home-roi-worth-it',
    title: {
      ar: 'المنزل الذكي: هل يستحق العائد على الاستثمار؟',
      en: 'Smart Home ROI: Is It Worth It?',
    },
    excerpt: {
      ar: 'حليل شامل للعائد على الاستثمار للمنزل الذكي: هل يستحق التكلفة؟',
      en: 'Comprehensive analysis of smart home ROI: is it worth the investment?',
    },
    content: {
      ar: '# مقدمة\n\nقبل الاستثمار في المنزل الذكي، من المهم فهم العائد على الاستثمار.',
      en: '# Introduction\n\nBefore investing in a smart home, it is important to understand the return on investment.',
    },
    category: {
      ar: 'المنزل الذكي',
      en: 'Smart Home',
    },
    tags: {
      ar: ['المنزل الذكي', 'الاستثمار', 'التوفير', 'القيمة'],
      en: ['smart home', 'investment', 'savings', 'value'],
    },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-11-18',
    readingTime: 6,
    featured: true,
    relatedServices: ['smart-home'],
  },
  {
    id: 'security-features-modern-access-control',
    slug: 'security-features-modern-access-control',
    title: {
      ar: 'ميزات الأمان في أنظمة التحكم في الوصول الحديثة',
      en: 'Security Features in Modern Access Control Systems',
    },
    excerpt: {
      ar: 'اكتشف أحدث ميزات الأمان في أنظمة التحكم في الوصول وكيف تحمي منزلك ومكتبك.',
      en: 'Discover the latest security features in access control systems and how they protect your home and office.',
    },
    content: {
      ar: '# مقدمة\n\nأنظمة التحكم في الوصول الحديثة توفر مستويات متعددة من الحماية.',
      en: '# Introduction\n\nModern access control systems provide multiple levels of protection.',
    },
    category: {
      ar: 'الأقفال الذكية',
      en: 'Smart Locks',
    },
    tags: {
      ar: ['الأمان', 'التحكم في الوصول', 'الحماية', 'التقنية'],
      en: ['security', 'access control', 'protection', 'technology'],
    },
    image: 'https://images.unsplash.com/photo-1523456867975-27a40092c904?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-11-15',
    readingTime: 5,
    featured: false,
    relatedServices: ['smart-locks', 'smart-systems'],
  },
  {
    id: 'energy-savings-smart-systems',
    slug: 'energy-savings-smart-systems',
    title: {
      ar: 'توفير الطاقة مع الأنظمة الذكية',
      en: 'Energy Savings with Smart Systems',
    },
    excerpt: {
      ar: 'كيف تساعدك الأنظمة الذكية على توفير الطاقة وتقليل فواتير الكهرباء.',
      en: 'How smart systems help you save energy and reduce your electricity bills.',
    },
    content: {
      ar: '# مقدمة\n\nالأنظمة الذكية تساهم بشكل كبير في توفير الطاقة.',
      en: '# Introduction\n\nSmart systems contribute significantly to energy savings.',
    },
    category: {
      ar: 'الأنظمة الذكية',
      en: 'Smart Systems',
    },
    tags: {
      ar: ['توفير الطاقة', 'الأنظمة الذكية', 'الكفاءة', 'البيئة'],
      en: ['energy savings', 'smart systems', 'efficiency', 'environment'],
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-11-12',
    readingTime: 5,
    featured: false,
    relatedServices: ['smart-home', 'smart-systems'],
  },
  {
    id: 'choosing-right-led-display',
    slug: 'choosing-right-led-display',
    title: {
      ar: 'اختيار شاشة LED المناسبة',
      en: 'Choosing the Right LED Display',
    },
    excerpt: {
      ar: 'دليل شامل لاختيار شاشة LED المناسبة لعملك: العوامل التي يجب مراعاتها.',
      en: 'Comprehensive guide to choosing the right LED display for your business: factors to consider.',
    },
    content: {
      ar: '# مقدمة\n\nاختيار شاشة LED المناسبة يتطلب دراسة عدة عوامل.',
      en: '# Introduction\n\nChoosing the right LED display requires considering several factors.',
    },
    category: {
      ar: 'لوحات عرض LED',
      en: 'LED Displays',
    },
    tags: {
      ar: ['LED', 'الاختيار', 'العرض', 'الأعمال'],
      en: ['LED', 'selection', 'display', 'business'],
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-11-10',
    readingTime: 6,
    featured: false,
    relatedServices: ['modular-led-panels'],
  },
  {
    id: 'smart-hotel-technology-saudi-arabia',
    slug: 'smart-hotel-technology-saudi-arabia',
    title: {
      ar: 'تقنية الفندق الذكي في المملكة العربية السعودية',
      en: 'Smart Hotel Technology in Saudi Arabia',
    },
    excerpt: {
      ar: 'اكتشف كيف تتطور تقنية الفندق الذكي في السعودية وكيف تستفيد الفنادق منها.',
      en: 'Discover how smart hotel technology is evolving in Saudi Arabia and how hotels benefit from it.',
    },
    content: {
      ar: '# مقدمة\n\nتقنية الفندق الذكي في السعودية تشهد نمواً متسارعاً.',
      en: '# Introduction\n\nSmart hotel technology in Saudi Arabia is witnessing rapid growth.',
    },
    category: {
      ar: 'الفندق الذكي',
      en: 'Smart Hotel',
    },
    tags: {
      ar: ['الفندق الذكي', 'السعودية', 'التقنية', 'الضيافة'],
      en: ['smart hotel', 'Saudi Arabia', 'technology', 'hospitality'],
    },
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-11-08',
    readingTime: 5,
    featured: false,
    relatedServices: ['smart-hotel'],
  },
  {
    id: 'smart-building-management-benefits',
    slug: 'smart-building-management-benefits',
    title: {
      ar: 'فوائد إدارة المباني الذكية',
      en: 'Benefits of Smart Building Management',
    },
    excerpt: {
      ar: 'كيف تحسن أنظمة إدارة المباني الذكية الكفاءة والأمان والراحة في المباني التجارية والسكنية.',
      en: 'How smart building management systems improve efficiency, security, and comfort in commercial and residential buildings.',
    },
    content: {
      ar: '# مقدمة\n\nإدارة المباني الذكية تحول طريقة عمل المباني الحديثة.',
      en: '# Introduction\n\nSmart building management is transforming the way modern buildings operate.',
    },
    category: {
      ar: 'الأنظمة الذكية',
      en: 'Smart Systems',
    },
    tags: {
      ar: ['إدارة المباني', 'الأنظمة الذكية', 'الكفاءة', 'الأمان'],
      en: ['building management', 'smart systems', 'efficiency', 'security'],
    },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    author: {
      ar: 'فريق ATEX',
      en: 'ATEX Team',
    },
    date: '2024-11-05',
    readingTime: 6,
    featured: false,
    relatedServices: ['smart-systems'],
  },
]

export function getBlogPosts(locale: Locale) {
  return blogPosts.map(post => ({
    ...post,
    title: post.title[locale],
    excerpt: post.excerpt[locale],
    content: post.content[locale],
    category: post.category[locale],
    tags: post.tags[locale],
    author: post.author[locale],
  }))
}

export function getBlogPostBySlug(slug: string, locale: Locale) {
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return null
  return getBlogPosts(locale).find(p => p.slug === slug)
}

export function getFeaturedBlogPosts(locale: Locale) {
  return getBlogPosts(locale).filter(p => p.featured)
}

export function getBlogPostsByCategory(category: string, locale: Locale) {
  return getBlogPosts(locale).filter(p => p.category === category)
}

export function getBlogPostsByTag(tag: string, locale: Locale) {
  return getBlogPosts(locale).filter(p => p.tags.includes(tag))
}

export function getRelatedBlogPosts(postId: string, locale: Locale) {
  const currentPost = blogPosts.find(p => p.id === postId)
  if (!currentPost) return []

  const currentCategory = currentPost.category[locale]

  return getBlogPosts(locale)
    .filter(p => p.id !== postId)
    .filter(p =>
      currentPost.relatedServices
        ? p.relatedServices?.some(service => currentPost.relatedServices?.includes(service))
        : p.category === currentCategory
    )
    .slice(0, 3)
}

export const categories = {
  ar: ['المنزل الذكي', 'الأقفال الذكية', 'الأنظمة الذكية', 'الفندق الذكي', 'أنظمة المواقف', 'لوحات عرض LED'],
  en: ['Smart Home', 'Smart Locks', 'Smart Systems', 'Smart Hotel', 'Parking Systems', 'LED Displays'],
}

export const tags = {
  ar: ['المنزل الذكي', 'أتمتة', 'السعودية', 'نصائح', 'توفير الطاقة', 'الأمان', 'الأقفال الذكية', 'الفندق الذكي', 'الضيافة', 'LED', 'التسويق'],
  en: ['smart home', 'automation', 'Saudi Arabia', 'tips', 'energy savings', 'security', 'smart locks', 'smart hotel', 'hospitality', 'LED', 'marketing'],
}