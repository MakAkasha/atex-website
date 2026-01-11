
export interface MediaItem {
  id: string
  url: string
  source: 'unsplash' | 'pexels'
  photographer?: string
  photographerUrl?: string
  alt: {
    ar: string
    en: string
  }
  category: string
  tags: string[]
}

export const media: MediaItem[] = [
  // Smart Home Images
  {
    id: 'smart-home-living-room',
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Erik Mclean',
    photographerUrl: 'https://unsplash.com/@binarymagma',
    alt: {
      ar: 'غرفة معيشة ذكية مع تحكم متقدم في الإضاءة والأنظمة',
      en: 'Smart living room with advanced lighting and systems control',
    },
    category: 'smart-home',
    tags: ['living room', 'smart home', 'lighting', 'interior'],
  },
  {
    id: 'smart-home-kitchen',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Sidekix Media',
    photographerUrl: 'https://unsplash.com/@sidekix',
    alt: {
      ar: 'مطبخ ذكي حديث مع أنظمة متقدمة',
      en: 'Modern smart kitchen with advanced systems',
    },
    category: 'smart-home',
    tags: ['kitchen', 'smart home', 'interior', 'technology'],
  },
  {
    id: 'smart-home-bedroom',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Spacejoy',
    photographerUrl: 'https://unsplash.com/@spacejoy',
    alt: {
      ar: 'غرفة نوم ذكية مع أتمتة متكاملة',
      en: 'Smart bedroom with complete automation',
    },
    category: 'smart-home',
    tags: ['bedroom', 'smart home', 'automation', 'interior'],
  },
  {
    id: 'smart-home-exterior',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'R. Architekten',
    photographerUrl: 'https://unsplash.com/@rarchitekten',
    alt: {
      ar: 'واجهة منزل ذكي حديث',
      en: 'Modern smart home exterior',
    },
    category: 'smart-home',
    tags: ['exterior', 'smart home', 'architecture', 'modern'],
  },
  {
    id: 'smart-home-control',
    url: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Krisztina Papp',
    photographerUrl: 'https://unsplash.com/@papa_krisztina',
    alt: {
      ar: 'لوحة تحكم المنزل الذكي',
      en: 'Smart home control panel',
    },
    category: 'smart-home',
    tags: ['control', 'smart home', 'technology', 'interface'],
  },

  // Smart Locks Images
  {
    id: 'smart-lock-door',
    url: 'https://images.unsplash.com/photo-1523456867975-27a40092c904?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Sidekix Media',
    photographerUrl: 'https://unsplash.com/@sidekix',
    alt: {
      ar: 'قفل ذكي على باب عصري',
      en: 'Smart lock on modern door',
    },
    category: 'smart-locks',
    tags: ['door', 'smart lock', 'security', 'technology'],
  },
  {
    id: 'smart-lock-fingerprint',
    url: 'https://images.unsplash.com/photo-1594318347104-b8f24d2c6b47?w=1200&auto=format&fit=crop',
    source: 'pexels',
    alt: {
      ar: 'قفل ذكي مع بصمة الإصبع',
      en: 'Smart lock with fingerprint scanner',
    },
    category: 'smart-locks',
    tags: ['fingerprint', 'smart lock', 'security', 'biometric'],
  },
  {
    id: 'smart-lock-app',
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Pavel Danilyuk',
    photographerUrl: 'https://unsplash.com/@paveldanilyuk',
    alt: {
      ar: 'تطبيق جوال للتحكم في القفل الذكي',
      en: 'Mobile app for smart lock control',
    },
    category: 'smart-locks',
    tags: ['app', 'smart lock', 'mobile', 'technology'],
  },

  // Smart Systems Images
  {
    id: 'smart-building-control',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Paul Hanaoka',
    photographerUrl: 'https://unsplash.com/@plhn',
    alt: {
      ar: 'نظام إدارة المباني الذكي',
      en: 'Smart building management system',
    },
    category: 'smart-systems',
    tags: ['building', 'management', 'smart systems', 'control'],
  },
  {
    id: 'smart-office',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Headway',
    photographerUrl: 'https://unsplash.com/@headway_io',
    alt: {
      ar: 'مكتب ذكي حديث',
      en: 'Modern smart office',
    },
    category: 'smart-systems',
    tags: ['office', 'smart systems', 'workspace', 'modern'],
  },
  {
    id: 'hvac-system',
    url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Timothy Paule II',
    photographerUrl: 'https://unsplash.com/@timothypaule',
    alt: {
      ar: 'نظام تكييف ذكي',
      en: 'Smart HVAC system',
    },
    category: 'smart-systems',
    tags: ['hvac', 'climate', 'smart systems', 'air conditioning'],
  },

  // Smart Hotel Images
  {
    id: 'smart-hotel-room',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Ivan Dmitri',
    photographerUrl: 'https://unsplash.com/@ivandmitri',
    alt: {
      ar: 'غرفة فندقية ذكية فاخرة',
      en: 'Luxury smart hotel room',
    },
    category: 'smart-hotel',
    tags: ['hotel', 'smart room', 'luxury', 'interior'],
  },
  {
    id: 'smart-hotel-lobby',
    url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Denys Nevozhai',
    photographerUrl: 'https://unsplash.com/@nevozhai',
    alt: {
      ar: 'استقبال فندق ذكي',
      en: 'Smart hotel lobby',
    },
    category: 'smart-hotel',
    tags: ['hotel', 'lobby', 'smart systems', 'reception'],
  },
  {
    id: 'smart-hotel-control',
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Sergey Zolkin',
    photographerUrl: 'https://unsplash.com/@sergeyzolkin',
    alt: {
      ar: 'لوحة تحكم الغرفة الفندقية',
      en: 'Hotel room control panel',
    },
    category: 'smart-hotel',
    tags: ['control', 'hotel', 'smart room', 'technology'],
  },

  // Smart Parking Images
  {
    id: 'smart-parking-lot',
    url: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Amirali Mirhashemian',
    photographerUrl: 'https://unsplash.com/@amirali_mirhashemian',
    alt: {
      ar: 'موقف سيارات ذكي حديث',
      en: 'Modern smart parking lot',
    },
    category: 'smart-parking',
    tags: ['parking', 'smart systems', 'cars', 'modern'],
  },
  {
    id: 'smart-parking-gate',
    url: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Anders Jildén',
    photographerUrl: 'https://unsplash.com/@andersjilden',
    alt: {
      ar: 'بوابة مواقف سيارات ذكية',
      en: 'Smart parking gate',
    },
    category: 'smart-parking',
    tags: ['parking', 'gate', 'smart systems', 'barrier'],
  },
  {
    id: 'license-plate-recognition',
    url: 'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Daniel Frank',
    photographerUrl: 'https://unsplash.com/@danielcrane',
    alt: {
      ar: 'نظام التعرف على لوحات المركبات',
      en: 'License plate recognition system',
    },
    category: 'smart-parking',
    tags: ['lpr', 'parking', 'technology', 'cars'],
  },

  // LED Display Images
  {
    id: 'led-display-outdoor',
    url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Frankie Lopez',
    photographerUrl: 'https://unsplash.com/@frankielopez',
    alt: {
      ar: 'شاشة عرض LED خارجية كبيرة',
      en: 'Large outdoor LED display screen',
    },
    category: 'led-display',
    tags: ['led', 'display', 'outdoor', 'advertising'],
  },
  {
    id: 'led-display-stadium',
    url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Raphaël Biscaldi',
    photographerUrl: 'https://unsplash.com/@raphbisc',
    alt: {
      ar: 'شاشة LED في ملعب رياضي',
      en: 'LED display in sports stadium',
    },
    category: 'led-display',
    tags: ['led', 'stadium', 'display', 'sports'],
  },
  {
    id: 'led-display-indoor',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Austin Distel',
    photographerUrl: 'https://unsplash.com/@austindistel',
    alt: {
      ar: 'شاشة LED داخلية للمؤتمرات',
      en: 'Indoor LED display for conferences',
    },
    category: 'led-display',
    tags: ['led', 'display', 'indoor', 'conference'],
  },

  // Project Images
  {
    id: 'project-villa-jeddah',
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Monica Silvestre',
    photographerUrl: 'https://unsplash.com/@picas_monia',
    alt: {
      ar: 'فيلا فاخرة في جدة',
      en: 'Luxury villa in Jeddah',
    },
    category: 'projects',
    tags: ['villa', 'jeddah', 'smart home', 'luxury'],
  },
  {
    id: 'project-tower-riyadh',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Paul Hanaoka',
    photographerUrl: 'https://unsplash.com/@plhn',
    alt: {
      ar: 'برج تجاري في الرياض',
      en: 'Commercial tower in Riyadh',
    },
    category: 'projects',
    tags: ['tower', 'riyadh', 'commercial', 'modern'],
  },
  {
    id: 'project-hotel-jeddah',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Ivan Dmitri',
    photographerUrl: 'https://unsplash.com/@ivandmitri',
    alt: {
      ar: 'فندق فاخر في جدة',
      en: 'Luxury hotel in Jeddah',
    },
    category: 'projects',
    tags: ['hotel', 'jeddah', 'luxury', 'architecture'],
  },
  {
    id: 'project-parking-dammam',
    url: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Amirali Mirhashemian',
    photographerUrl: 'https://unsplash.com/@amirali_mirhashemian',
    alt: {
      ar: 'موقف سيارات في الدمام',
      en: 'Parking lot in Dammam',
    },
    category: 'projects',
    tags: ['parking', 'dammam', 'mall', 'modern'],
  },
  {
    id: 'project-office-riyadh',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Headway',
    photographerUrl: 'https://unsplash.com/@headway_io',
    alt: {
      ar: 'مكتب شركة في الرياض',
      en: 'Company office in Riyadh',
    },
    category: 'projects',
    tags: ['office', 'riyadh', 'modern', 'workspace'],
  },
  {
    id: 'project-stadium-jeddah',
    url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Nevada31',
    photographerUrl: 'https://unsplash.com/@nevada31',
    alt: {
      ar: 'ملعب رياضي في جدة',
      en: 'Sports stadium in Jeddah',
    },
    category: 'projects',
    tags: ['stadium', 'jeddah', 'sports', 'led'],
  },

  // Blog Images
  {
    id: 'blog-smart-home-guide',
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Erik Mclean',
    photographerUrl: 'https://unsplash.com/@binarymagma',
    alt: {
      ar: 'دليل المنزل الذكي',
      en: 'Smart home guide',
    },
    category: 'blog',
    tags: ['smart home', 'guide', 'education'],
  },
  {
    id: 'blog-technology',
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Jason Leung',
    photographerUrl: 'https://unsplash.com/@jasonleung',
    alt: {
      ar: 'تقنية حديثة',
      en: 'Modern technology',
    },
    category: 'blog',
    tags: ['technology', 'innovation', 'modern'],
  },
  {
    id: 'blog-iot-devices',
    url: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Michael Gough',
    photographerUrl: 'https://unsplash.com/@m_gough',
    alt: {
      ar: 'أجهزة إنترنت الأشياء',
      en: 'IoT devices',
    },
    category: 'blog',
    tags: ['iot', 'devices', 'smart home', 'technology'],
  },

  // Hero Images
  {
    id: 'hero-smart-home',
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Erik Mclean',
    photographerUrl: 'https://unsplash.com/@binarymagma',
    alt: {
      ar: 'منزل ذكي حديث مع تقنيات متقدمة',
      en: 'Modern smart home with advanced technologies',
    },
    category: 'hero',
    tags: ['smart home', 'modern', 'technology', 'interior'],
  },
  {
    id: 'hero-technology',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'NASA',
    photographerUrl: 'https://unsplash.com/@nasa',
    alt: {
      ar: 'شبكة تكنولوجيا متصلة',
      en: 'Connected technology network',
    },
    category: 'hero',
    tags: ['technology', 'network', 'connected', 'digital'],
  },
  {
    id: 'hero-automation',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'ThisisEngineering RAEng',
    photographerUrl: 'https://unsplash.com/@thisisengineering',
    alt: {
      ar: 'أتمتة وذكاء اصطناعي',
      en: 'Automation and artificial intelligence',
    },
    category: 'hero',
    tags: ['automation', 'ai', 'technology', 'smart'],
  },

  // IoT & Smart Devices
  {
    id: 'iot-smart-speaker',
    url: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Mika Baumeister',
    photographerUrl: 'https://unsplash.com/@mbaumi',
    alt: {
      ar: 'مساعد ذكي منزلي',
      en: 'Smart home assistant speaker',
    },
    category: 'iot',
    tags: ['iot', 'smart speaker', 'voice assistant', 'automation'],
  },
  {
    id: 'iot-smart-thermostat',
    url: 'https://images.unsplash.com/photo-1558002038-1091a1661116?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Thermostat',
    alt: {
      ar: 'منظم حرارة ذكي',
      en: 'Smart thermostat',
    },
    category: 'iot',
    tags: ['iot', 'thermostat', 'climate control', 'smart home'],
  },
  {
    id: 'iot-smart-camera',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    alt: {
      ar: 'كاميرا مراقبة ذكية',
      en: 'Smart security camera',
    },
    category: 'iot',
    tags: ['iot', 'camera', 'security', 'smart home'],
  },
  {
    id: 'iot-smart-plug',
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    alt: {
      ar: 'قابس ذكي للتحكم بالأجهزة',
      en: 'Smart plug for device control',
    },
    category: 'iot',
    tags: ['iot', 'smart plug', 'energy', 'automation'],
  },
  {
    id: 'iot-smart-lighting',
    url: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Krisztina Papp',
    photographerUrl: 'https://unsplash.com/@papa_krisztina',
    alt: {
      ar: 'نظام إضاءة ذكي',
      en: 'Smart lighting system',
    },
    category: 'iot',
    tags: ['iot', 'lighting', 'smart home', 'control'],
  },
  {
    id: 'iot-smart-sensor',
    url: 'https://images.unsplash.com/photo-1585338107529-13c919b94662?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    alt: {
      ar: 'حساسات ذكية للمنزل',
      en: 'Smart home sensors',
    },
    category: 'iot',
    tags: ['iot', 'sensors', 'automation', 'smart home'],
  },
  {
    id: 'iot-smart-doorbell',
    url: 'https://images.unsplash.com/photo-1523456867975-27a40092c904?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'Sidekix Media',
    photographerUrl: 'https://unsplash.com/@sidekix',
    alt: {
      ar: 'جرس ذكي مع كاميرا',
      en: 'Smart doorbell with camera',
    },
    category: 'iot',
    tags: ['iot', 'doorbell', 'security', 'smart home'],
  },
  {
    id: 'iot-smart-appliances',
    url: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    alt: {
      ar: 'أجهزة منزلية ذكية',
      en: 'Smart home appliances',
    },
    category: 'iot',
    tags: ['iot', 'appliances', 'kitchen', 'smart home'],
  },
  {
    id: 'iot-smart-energy',
    url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'American Public Power',
    photographerUrl: 'https://unsplash.com/@americanpublicpower',
    alt: {
      ar: 'إدارة الطاقة الذكية',
      en: 'Smart energy management',
    },
    category: 'iot',
    tags: ['iot', 'energy', 'solar', 'sustainability'],
  },
  {
    id: 'iot-network',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop',
    source: 'unsplash',
    photographer: 'NASA',
    photographerUrl: 'https://unsplash.com/@nasa',
    alt: {
      ar: 'شبكة إنترنت الأشياء',
      en: 'IoT network and connectivity',
    },
    category: 'iot',
    tags: ['iot', 'network', 'connectivity', 'technology'],
  },
]

export function getMediaByCategory(category: string) {
  return media.filter(item => item.category === category)
}

export function getMediaByTag(tag: string) {
  return media.filter(item => item.tags.includes(tag))
}

export function getMediaById(id: string) {
  return media.find(item => item.id === id)
}

export function getRandomMedia(count: number, category?: string) {
  const filtered = category ? getMediaByCategory(category) : [...media]
  return filtered.sort(() => Math.random() - 0.5).slice(0, count)
}

export function getMediaCredits() {
  const uniquePhotographers = Array.from(
    new Map(media.filter(m => m.photographer).map(m => [m.photographerUrl, m] as [string, MediaItem]))
  ).map(([, m]) => ({
    name: m.photographer,
    url: m.photographerUrl,
    source: m.source,
  }))

  return uniquePhotographers
}