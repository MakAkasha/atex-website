import { Locale } from '@/i18n/request'

export interface Product {
  id: string
  slug: string
  title: {
    ar: string
    en: string
  }
  description: {
    ar: string
    en: string
  }
  category: string
  icon: string
  image?: string
  features: {
    ar: string[]
    en: string[]
  }
  specifications?: {
    ar: {
      label: string
      value: string
    }[]
    en: {
      label: string
      value: string
    }[]
  }
  price?: {
    ar: string
    en: string
  }
  cta: {
    ar: string
    en: string
  }
}

export const products: Product[] = [
  {
    id: 'smart-home-hub',
    slug: 'smart-home-hub',
    title: {
      ar: 'مركز التحكم بالمنزل الذكي',
      en: 'Smart Home Control Hub',
    },
    description: {
      ar: 'مركز تحكم شامل يربط جميع أجهزة المنزل الذكي معاً للتحكم السهل والمريح.',
      en: 'Comprehensive control hub that connects all smart home devices together for easy and convenient control.',
    },
    category: 'smart-home',
    icon: 'cpu',
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&auto=format&fit=crop',
    features: {
      ar: [
        'دعم حتى 200 جهاز',
        'التحكم بالأوامر الصوتية',
        'تطبيق جوال سهل الاستخدام',
        'التكامل مع جميع الأنظمة الرئيسية',
        'العمل بدون إنترنت',
      ],
      en: [
        'Support up to 200 devices',
        'Voice control commands',
        'Easy-to-use mobile app',
        'Integration with all major systems',
        'Works without internet',
      ],
    },
    specifications: {
      ar: [
        { label: 'الاتصال', value: 'WiFi, Bluetooth, Zigbee' },
        { label: 'الذاكرة', value: '4GB RAM, 32GB Storage' },
        { label: 'الاستهلاك', value: 'أقل من 10 وات' },
      ],
      en: [
        { label: 'Connectivity', value: 'WiFi, Bluetooth, Zigbee' },
        { label: 'Memory', value: '4GB RAM, 32GB Storage' },
        { label: 'Power', value: 'Less than 10W' },
      ],
    },
    price: {
      ar: 'يبدأ من 1,500 ريال',
      en: 'Starting from 1,500 SAR',
    },
    cta: {
      ar: 'اطلب عرض سعر',
      en: 'Request Quote',
    },
  },
  {
    id: 'smart-lock-pro',
    slug: 'smart-lock-pro',
    title: {
      ar: 'قفل ذكي محترف',
      en: 'Pro Smart Lock',
    },
    description: {
      ar: 'قفل ذكي متطور مع بصمة الإصبع ورمز PIN والتحكم عن بعد.',
      en: 'Advanced smart lock with fingerprint, PIN code, and remote control.',
    },
    category: 'smart-locks',
    icon: 'lock',
    image: 'https://images.unsplash.com/photo-1523456867975-27a40092c904?w=800&auto=format&fit=crop',
    features: {
      ar: [
        'بصمة الإصبع حتى 100 مستخدم',
        'رمز PIN قابل للتخصيص',
        'التحكم عبر التطبيق',
        'بطاريات تدوم حتى سنة',
        'سجل الوصول التفصيلي',
      ],
      en: [
        'Fingerprint for up to 100 users',
        'Customizable PIN code',
        'App-based control',
        'Battery lasts up to a year',
        'Detailed access log',
      ],
    },
    price: {
      ar: 'يبدأ من 2,000 ريال',
      en: 'Starting from 2,000 SAR',
    },
    cta: {
      ar: 'اطلب عرض سعر',
      en: 'Request Quote',
    },
  },
  {
    id: 'smart-thermostat',
    slug: 'smart-thermostat',
    title: {
      ar: 'منظم حرارة ذكي',
      en: 'Smart Thermostat',
    },
    description: {
      ar: 'منظم حرارة ذكي يتعلم من عاداتك ويوفر الطاقة تلقائياً.',
      en: 'Smart thermostat that learns from your habits and saves energy automatically.',
    },
    category: 'smart-home',
    icon: 'thermometer',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop',
    features: {
      ar: [
        'التعلم التلقائي من العادات',
        'التحكم بالأوامر الصوتية',
        'توفير الطاقة حتى 23%',
        'تطبيق جوال للتحكم',
        'التكامل مع جميع الأنظمة',
      ],
      en: [
        'Automatic learning from habits',
        'Voice control commands',
        'Energy savings up to 23%',
        'Mobile app control',
        'Integration with all systems',
      ],
    },
    price: {
      ar: 'يبدأ من 800 ريال',
      en: 'Starting from 800 SAR',
    },
    cta: {
      ar: 'اطلب عرض سعر',
      en: 'Request Quote',
    },
  },
  {
    id: 'smart-lighting-kit',
    slug: 'smart-lighting-kit',
    title: {
      ar: 'طقم إضاءة ذكي',
      en: 'Smart Lighting Kit',
    },
    description: {
      ar: 'طقم إضاءة ذكي كامل مع مركز تحكم وعدة مصابيح قابلة للتخصيص.',
      en: 'Complete smart lighting kit with control hub and customizable bulbs.',
    },
    category: 'smart-home',
    icon: 'lightbulb',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop',
    features: {
      ar: [
        '16 مليون لون قابل للتعديل',
        'توقيت آلي للمصابيح',
        'التحكم بالصوت',
        'الوضع الليلي والنهاري',
        'سهولة التثبيت',
      ],
      en: [
        '16 million customizable colors',
        'Automatic bulb scheduling',
        'Voice control',
        'Day and night modes',
        'Easy installation',
      ],
    },
    price: {
      ar: 'يبدأ من 1,200 ريال',
      en: 'Starting from 1,200 SAR',
    },
    cta: {
      ar: 'اطلب عرض سعر',
      en: 'Request Quote',
    },
  },
  {
    id: 'bms-controller',
    slug: 'bms-controller',
    title: {
      ar: 'وحدة تحكم BMS',
      en: 'BMS Controller',
    },
    description: {
      ar: 'وحدة تحكم متقدمة لإدارة المباني الذكية للمنشآت التجارية والسكنية.',
      en: 'Advanced controller unit for smart building management for commercial and residential facilities.',
    },
    category: 'smart-systems',
    icon: 'server',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    features: {
      ar: [
        'دعم حتى 500 نقطة',
        'مراقبة في الوقت الفعلي',
        'تقارير تحليلية مفصلة',
        'تنبيهات فورية',
        'سهولة التكامل',
      ],
      en: [
        'Support up to 500 points',
        'Real-time monitoring',
        'Detailed analytical reports',
        'Instant alerts',
        'Easy integration',
      ],
    },
    price: {
      ar: 'يبدأ من 15,000 ريال',
      en: 'Starting from 15,000 SAR',
    },
    cta: {
      ar: 'اطلب عرض سعر',
      en: 'Request Quote',
    },
  },
  {
    id: 'lpr-camera',
    slug: 'lpr-camera',
    title: {
      ar: 'كاميرا التعرف على اللوحات',
      en: 'License Plate Recognition Camera',
    },
    description: {
      ar: 'كاميرا متطورة للتعرف التلقائي على لوحات المركبات.',
      en: 'Advanced camera for automatic license plate recognition.',
    },
    category: 'smart-parking',
    icon: 'camera',
    image: 'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?w=800&auto=format&fit=crop',
    features: {
      ar: [
        'دقة تعرف تصل إلى 99.7%',
        'دعم جميع لوحات المركبات',
        'العمل ليلاً ونهاراً',
        'التكامل مع جميع الأنظمة',
        'سهولة التثبيت',
      ],
      en: [
        'Recognition accuracy up to 99.7%',
        'Supports all license plates',
        'Works day and night',
        'Integration with all systems',
        'Easy installation',
      ],
    },
    price: {
      ar: 'يبدأ من 3,000 ريال',
      en: 'Starting from 3,000 SAR',
    },
    cta: {
      ar: 'اطلب عرض سعر',
      en: 'Request Quote',
    },
  },
  {
    id: 'led-display-indoor',
    slug: 'led-display-indoor',
    title: {
      ar: 'شاشة LED داخلية',
      en: 'Indoor LED Display',
    },
    description: {
      ar: 'شاشة LED داخلية عالية الجودة للعرض الداخلي في الفنادق والمكاتب.',
      en: 'High-quality indoor LED display for indoor use in hotels and offices.',
    },
    category: 'led-display',
    icon: 'monitor',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    features: {
      ar: [
        'دقة عالية ووضوح ممتاز',
        'سهولة إدارة المحتوى',
        'دعم جميع تنسيقات الفيديو',
        'استهلاك طاقة منخفض',
        'عمر طويل',
      ],
      en: [
        'High resolution and excellent clarity',
        'Easy content management',
        'Supports all video formats',
        'Low energy consumption',
        'Long lifespan',
      ],
    },
    price: {
      ar: 'يبدأ من 5,000 ريال للمتر مربع',
      en: 'Starting from 5,000 SAR per sqm',
    },
    cta: {
      ar: 'اطلب عرض سعر',
      en: 'Request Quote',
    },
  },
  {
    id: 'led-display-outdoor',
    slug: 'led-display-outdoor',
    title: {
      ar: 'شاشة LED خارجية',
      en: 'Outdoor LED Display',
    },
    description: {
      ar: 'شاشة LED خارجية مقاومة للعوامل الجوية مع سطوع عالي.',
      en: 'Weather-resistant outdoor LED display with high brightness.',
    },
    category: 'led-display',
    icon: 'monitor',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop',
    features: {
      ar: [
        'سطوع عالي للعرض الخارجي',
        'مقاومة للعوامل الجوية',
        'سهولة الصيانة',
        'دعم جميع الأحجام',
        'ضمان 5 سنوات',
      ],
      en: [
        'High brightness for outdoor display',
        'Weather resistant',
        'Easy maintenance',
        'Supports all sizes',
        '5-year warranty',
      ],
    },
    price: {
      ar: 'يبدأ من 8,000 ريال للمتر مربع',
      en: 'Starting from 8,000 SAR per sqm',
    },
    cta: {
      ar: 'اطلب عرض سعر',
      en: 'Request Quote',
    },
  },
  {
    id: 'smart-doorbell',
    slug: 'smart-doorbell',
    title: {
      ar: 'جرس باب ذكي',
      en: 'Smart Doorbell',
    },
    description: {
      ar: 'جرس باب ذكي مع كاميرا عالية الدقة ومساحقة ثنائية الاتجاه.',
      en: 'Smart doorbell with HD camera and two-way audio.',
    },
    category: 'smart-locks',
    icon: 'bell',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop',
    features: {
      ar: [
        'كاميرا HD 1080p',
        'رؤية ليلية',
        'مساحقة ثنائية الاتجاه',
        'الكشف عن الحركة',
        'التكامل مع جميع الأقفال الذكية',
      ],
      en: [
        '1080p HD camera',
        'Night vision',
        'Two-way audio',
        'Motion detection',
        'Integration with all smart locks',
      ],
    },
    price: {
      ar: 'يبدأ من 600 ريال',
      en: 'Starting from 600 SAR',
    },
    cta: {
      ar: 'اطلب عرض سعر',
      en: 'Request Quote',
    },
  },
  {
    id: 'smart-motion-sensor',
    slug: 'smart-motion-sensor',
    title: {
      ar: 'مستشعر حركة ذكي',
      en: 'Smart Motion Sensor',
    },
    description: {
      ar: 'مستشعر حركة ذكي ذكي يمكن تبرمجته لمشاهد مختلفة.',
      en: 'Smart motion sensor that can be programmed for different scenes.',
    },
    category: 'smart-home',
    icon: 'activity',
    features: {
      ar: [
        'الكشف عن الحركة بدقة عالية',
        'قابل للبرمجة',
        'سهولة التثبيت',
        'التكامل مع جميع الأنظمة',
        'بطاريات طويلة الأمد',
      ],
      en: [
        'High accuracy motion detection',
        'Programmable',
        'Easy installation',
        'Integration with all systems',
        'Long-lasting batteries',
      ],
    },
    price: {
      ar: 'يبدأ من 300 ريال',
      en: 'Starting from 300 SAR',
    },
    cta: {
      ar: 'اطلب عرض سعر',
      en: 'Request Quote',
    },
  },
]

export function getProducts(locale: Locale) {
  return products.map(product => ({
    ...product,
    title: product.title[locale],
    description: product.description[locale],
    features: product.features[locale],
    specifications: product.specifications?.[locale],
    price: product.price?.[locale],
    cta: product.cta[locale],
  }))
}

export function getProductBySlug(slug: string, locale: Locale) {
  const product = products.find(p => p.slug === slug)
  if (!product) return null
  return getProducts(locale).find(p => p.slug === slug)
}

export function getProductsByCategory(category: string, locale: Locale) {
  return getProducts(locale).filter(p => p.category === category)
}

export const productCategories = {
  ar: [
    { id: 'smart-home', name: 'المنزل الذكي' },
    { id: 'smart-locks', name: 'الأقفال الذكية' },
    { id: 'smart-systems', name: 'الأنظمة الذكية' },
    { id: 'smart-parking', name: 'أنظمة المواقف' },
    { id: 'led-display', name: 'لوحات عرض LED' },
  ],
  en: [
    { id: 'smart-home', name: 'Smart Home' },
    { id: 'smart-locks', name: 'Smart Locks' },
    { id: 'smart-systems', name: 'Smart Systems' },
    { id: 'smart-parking', name: 'Parking Systems' },
    { id: 'led-display', name: 'LED Displays' },
  ],
}

export function getProductCategories(locale: Locale) {
  return productCategories[locale]
}