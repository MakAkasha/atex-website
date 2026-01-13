import { Locale } from '@/i18n/request'

export interface Service {
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
  shortDescription: {
    ar: string
    en: string
  }
  icon: string
  image?: string
  whatIs?: {
    ar: string
    en: string
  }
  benefits?: {
    ar: string[]
    en: string[]
  }
  whatsIncluded?: {
    ar: string[]
    en: string[]
  }
  useCases?: {
    ar: string[]
    en: string[]
  }
  scenarios?: {
    ar: {
      title: string
      description: string
    }[]
    en: {
      title: string
      description: string
    }[]
  }
  gallery?: string[]
  faq?: {
    question: {
      ar: string
      en: string
    }
    answer: {
      ar: string
      en: string
    }
  }[]
  relatedProjects?: string[]
}

export const services: Service[] = [
  {
    id: 'ict-systems',
    slug: 'ict-systems',
    title: {
      ar: 'أنظمة الاتصالات ICT',
      en: 'ICT Systems',
    },
    description: {
      ar: 'بنية تحتية متكاملة لأنظمة الاتصالات والشبكات تربط جميع أنظمة المبنى معاً. نقدم حلولاً متطورة للاتصالات الصوتية، البيانات، والفيديو مع أعلى معايير الجودة والموثوقية.',
      en: 'Integrated infrastructure for telecommunications and network systems connecting all building systems together. We provide advanced solutions for voice, data, and video communications with the highest quality and reliability standards.',
    },
    shortDescription: {
      ar: 'بنية تحتية متكاملة للاتصالات والشبكات',
      en: 'Integrated infrastructure for telecommunications and networks',
    },
    icon: 'network',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'أنظمة الاتصالات ICT هي البنية التحتية التي تربط جميع أنظمة المبنى ببعضها البعض ومع العالم الخارجي. تشمل شبكات البيانات، أنظمة الهاتف، الاتصال المرئي، وأنظمة الأمان المتكاملة.',
      en: 'ICT communication systems are the infrastructure that connects all building systems to each other and to the outside world. This includes data networks, telephone systems, video conferencing, and integrated security systems.',
    },
    benefits: {
      ar: [
        'اتصال سلس ومتكامل',
        'سرعة عالية في نقل البيانات',
        'موثوقية عالية للنظام',
        'سهولة الإدارة والصيانة',
        'قابلية التوسع',
        'تكامل مع جميع الأنظمة',
      ],
      en: [
        'Seamless and integrated connection',
        'High-speed data transfer',
        'High system reliability',
        'Easy management and maintenance',
        'Scalability',
        'Integration with all systems',
      ],
    },
    whatsIncluded: {
      ar: [
        'شبكات البيانات المحلية LAN',
        'شبكات الألياف البصرية',
        'أنظمة الهاتف VoIP',
        'غرف الاتصالات المركزية',
        'أنظمة الاتصال المرئي',
        'بنية الشبكات اللاسلكية',
        'أنظمة إدارة الشبكات',
        'الدعم والصيانة المستمرة',
      ],
      en: [
        'Local Area Networks (LAN)',
        'Fiber optic networks',
        'VoIP telephone systems',
        'Central telecommunications rooms',
        'Video conferencing systems',
        'Wireless network infrastructure',
        'Network management systems',
        'Ongoing support and maintenance',
      ],
    },
    useCases: {
      ar: [
        'المباني التجارية',
        'المراكز الإدارية',
        'المستشفيات والعيادات',
        'المدارس والجامعات',
        'المجمعات السكنية',
      ],
      en: [
        'Commercial buildings',
        'Administrative centers',
        'Hospitals and clinics',
        'Schools and universities',
        'Residential compounds',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1667372393119-c81c0e2717d9?w=800&auto=format&fit=crop',
    ],
    faq: [
      {
        question: {
          ar: 'ما الفرق بين أنظمة ICT والأنظمة التقليدية؟',
          en: 'What is the difference between ICT and traditional systems?',
        },
        answer: {
          ar: 'أنظمة ICT توفر تكاملاً كاملاً بين جميع أنظمة الاتصالات، مما يسمح بتبادل البيانات والمعلومات بشكل فوري وتحكم مركزي.',
          en: 'ICT systems provide complete integration between all communication systems, allowing instant data and information exchange and central control.',
        },
      },
    ],
  },
  {
    id: 'ibs-systems',
    slug: 'ibs-systems',
    title: {
      ar: 'أنظمة اتصالات المباني IBS',
      en: 'IBS Systems',
    },
    description: {
      ar: 'أنظمة اتصالات متكاملة للمباني الذكية تربط جميع الأنظمة الفرعية معاً في منصة موحدة. نقدم حلولاً شاملة للمباني السكنية والتجارية والصناعية.',
      en: 'Integrated communication systems for smart buildings that connect all subsystems together in a unified platform. We provide comprehensive solutions for residential, commercial, and industrial buildings.',
    },
    shortDescription: {
      ar: 'أنظمة اتصالات متكاملة للمباني الذكية',
      en: 'Integrated communication systems for smart buildings',
    },
    icon: 'building',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'أنظمة اتصالات المباني IBS هي البنية التحتية الشاملة التي تدمج جميع أنظمة المبنى في شبكة واحدة متكاملة. تشمل الأنظمة الكهربائية، الميكانيكية، الأمنية، والاتصالات.',
      en: 'IBS building communication systems are the comprehensive infrastructure that integrates all building systems into a single unified network. This includes electrical, mechanical, security, and communication systems.',
    },
    benefits: {
      ar: [
        'تحكم مركزي في جميع الأنظمة',
        'كفاءة تشغيلية أعلى',
        'توفير في استهلاك الطاقة',
        'تحسين إدارة الصيانة',
        'مراقبة مستمرة',
        'تقليل التكاليف التشغيلية',
      ],
      en: [
        'Central control of all systems',
        'Higher operational efficiency',
        'Energy consumption savings',
        'Improved maintenance management',
        'Continuous monitoring',
        'Reduced operational costs',
      ],
    },
    whatsIncluded: {
      ar: [
        'نظام إدارة المباني BMS',
        'التحكم بالإضاءة',
        'نظام التكييف والتهوية',
        'أنظمة الأمان والمراقبة',
        'نظام كشف الحريق',
        'التحكم بالوصول',
        'أنظمة الإنذار',
        'التكامل مع الأنظمة الذكية',
      ],
      en: [
        'Building Management System (BMS)',
        'Lighting control',
        'HVAC systems',
        'Security and surveillance systems',
        'Fire detection system',
        'Access control',
        'Alarm systems',
        'Smart systems integration',
      ],
    },
    useCases: {
      ar: [
        'الأبراج التجارية',
        'المراكز التجارية',
        'المستشفيات',
        'المطارات',
        'المجمعات السكنية',
      ],
      en: [
        'Commercial towers',
        'Shopping centers',
        'Hospitals',
        'Airports',
        'Residential compounds',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    ],
  },
  {
    id: 'electrical-systems',
    slug: 'electrical-systems',
    title: {
      ar: 'الأنظمة الكهربائية',
      en: 'Electrical Systems',
    },
    description: {
      ar: 'حلول كهربائية ذكية وآمنة للمباني تشمل التصميم، التوريد، والتركيب. نقدم أنظمة كهربائية متطورة مع أحدث معايير السلامة والكفاءة.',
      en: 'Smart and safe electrical solutions for buildings including design, supply, and installation. We provide advanced electrical systems with the latest safety and efficiency standards.',
    },
    shortDescription: {
      ar: 'حلول كهربائية ذكية وآمنة للمباني',
      en: 'Smart and safe electrical solutions for buildings',
    },
    icon: 'zap',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'الأنظمة الكهربائية الذكية هي حلول متكاملة لإدارة الطاقة الكهربائية في المباني. تشمل التوزيع، الحماية، القياس، والتحكم الآلي في استهلاك الطاقة.',
      en: 'Smart electrical systems are integrated solutions for managing electrical power in buildings. This includes distribution, protection, metering, and automatic control of energy consumption.',
    },
    benefits: {
      ar: [
        'كفاءة عالية في استهلاك الطاقة',
        'سلامة كهربائية مضمونة',
        'تحكم ذكي في الأحمال',
        'مراقبة مستمرة',
        'تقليل تكاليف الكهرباء',
        'حماية من التذبذب',
      ],
      en: [
        'High energy efficiency',
        'Guaranteed electrical safety',
        'Smart load control',
        'Continuous monitoring',
        'Reduced electricity costs',
        'Surge protection',
      ],
    },
    whatsIncluded: {
      ar: [
        'لوحات التوزيع الكهربائية',
        'أنظمة الحماية من التيار الزائد',
        'عدادات الكهرباء الذكية',
        'أنظمة إدارة الطاقة',
        'التحكم بالإضاءة',
        'أنظمة UPS',
        'التأريض النظامي',
        'الصيانة الدورية',
      ],
      en: [
        'Electrical distribution panels',
        'Surge protection systems',
        'Smart electricity meters',
        'Energy management systems',
        'Lighting control',
        'UPS systems',
        'Systematic grounding',
        'Periodic maintenance',
      ],
    },
    useCases: {
      ar: [
        'الفلل والمباني السكنية',
        'المباني التجارية',
        'المستشفيات والعيادات',
        'المصانع والمنشآت الصناعية',
        'المولات والمراكز التجارية',
      ],
      en: [
        'Villas and residential buildings',
        'Commercial buildings',
        'Hospitals and clinics',
        'Factories and industrial facilities',
        'Malls and commercial centers',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    ],
  },
  {
    id: 'renewable-energy',
    slug: 'renewable-energy',
    title: {
      ar: 'أنظمة الطاقة البديلة',
      en: 'Renewable Energy Systems',
    },
    description: {
      ar: 'حلول الطاقة الشمسية والمتجددة لتوليد الكهرباء النظيفة. نقدم أنظمة شمسية متكاملة مع ضمان أعلى كفاءة وأداء.',
      en: 'Solar and renewable energy solutions for generating clean electricity. We provide integrated solar systems with the highest efficiency and performance guarantee.',
    },
    shortDescription: {
      ar: 'حلول الطاقة الشمسية والمتجددة',
      en: 'Solar and renewable energy solutions',
    },
    icon: 'sun',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'أنظمة الطاقة البديلة هي حلول لتوليد الطاقة من مصادر متجددة كالطاقة الشمسية. تشمل الألواح الشمسية، المحولات، وأنظمة التخزين.',
      en: 'Renewable energy systems are solutions for generating energy from renewable sources such as solar energy. This includes solar panels, inverters, and storage systems.',
    },
    benefits: {
      ar: [
        'توفير كبير في فواتير الكهرباء',
        'طاقة نظيفة صديقة للبيئة',
        'استقلالية في استهلاك الطاقة',
        'عائد استثماري جيد',
        'صيانة منخفضة',
        'ضمان طويل الأمد',
      ],
      en: [
        'Significant savings on electricity bills',
        'Clean environmentally friendly energy',
        'Energy consumption independence',
        'Good return on investment',
        'Low maintenance',
        'Long-term warranty',
      ],
    },
    whatsIncluded: {
      ar: [
        'ألواح الطاقة الشمسية',
        'محولات الطاقة',
        'أنظمة تخزين البطارية',
        'أجهزة القياس الذكي',
        'أنظمة التتبع الشمسي',
        'التكامل مع الشبكة الكهربائية',
        'المراقبة عن بعد',
        'صيانة وضمان',
      ],
      en: [
        'Solar panels',
        'Power inverters',
        'Battery storage systems',
        'Smart meters',
        'Solar tracking systems',
        'Grid integration',
        'Remote monitoring',
        'Maintenance and warranty',
      ],
    },
    useCases: {
      ar: [
        'الفلل والمباني السكنية',
        'المصانع والمنشآت',
        'المزارع والمرافق الزراعية',
        'المباني التجارية',
        'محطات الشحن الكهربائية',
      ],
      en: [
        'Villas and residential buildings',
        'Factories and facilities',
        'Farms and agricultural facilities',
        'Commercial buildings',
        'Electric charging stations',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop',
    ],
  },
  {
    id: 'digital-signage',
    slug: 'digital-signage',
    title: {
      ar: 'أنظمة العرض الرقمي',
      en: 'Digital Signage Systems',
    },
    description: {
      ar: 'شاشات LED ولوحات العرض الرقمية عالية الجودة للترفيه والإعلان. نقدم حلولاً متكاملة من التصميم إلى التركيب والمحتوى.',
      en: 'High-quality LED screens and digital display panels for entertainment and advertising. We provide integrated solutions from design to installation and content.',
    },
    shortDescription: {
      ar: 'شاشات LED ولوحات العرض الرقمية',
      en: 'LED screens and digital display panels',
    },
    icon: 'monitor',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'أنظمة العرض الرقمي هي شاشات إلكترونية لعرض المحتوى المرئي بشكل ديناميكي. تستخدم في الإعلانات، المعلومات، والترفيه.',
      en: 'Digital signage systems are electronic screens for dynamically displaying visual content. Used for advertising, information, and entertainment.',
    },
    benefits: {
      ar: [
        'جودة صورة عالية الدقة',
        'سطوع ممتاز للاستخدام الداخلي والخارجي',
        'مرونة في عرض المحتوى',
        'تحديث المحتوى عن بعد',
        'جذب الانتباه',
        'عمر افتراضي طويل',
      ],
      en: [
        'High-definition picture quality',
        'Excellent brightness for indoor and outdoor use',
        'Content display flexibility',
        'Remote content updates',
        'Attention-grabbing',
        'Long lifespan',
      ],
    },
    whatsIncluded: {
      ar: [
        'شاشات LED داخلية',
        'شاشات LED خارجية',
        'شاشات العرض التفاعلية',
        'نظام إدارة المحتوى',
        'تركيب احترافي',
        'تصميم المحتوى',
        'دعم فني متواصل',
        'صيانة دورية',
      ],
      en: [
        'Indoor LED screens',
        'Outdoor LED screens',
        'Interactive display screens',
        'Content management system',
        'Professional installation',
        'Content design',
        'Ongoing technical support',
        'Periodic maintenance',
      ],
    },
    useCases: {
      ar: [
        'المراكز التجارية',
        'المطارات ومحطات النقل',
        'الفنادق والمطاعم',
        'المؤسسات التعليمية',
        'المباني الحكومية',
      ],
      en: [
        'Shopping centers',
        'Airports and transport stations',
        'Hotels and restaurants',
        'Educational institutions',
        'Government buildings',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    ],
  },
  {
    id: 'low-current',
    slug: 'low-current',
    title: {
      ar: 'أنظمة التيار الخافت',
      en: 'Low Current Systems',
    },
    description: {
      ar: 'أنظمة أمن، مراقبة، وكشف حريق متكاملة. نقدم حلولاً شاملة لحماية المباني والأشخاص بأحدث التقنيات.',
      en: 'Integrated security, surveillance, and fire detection systems. We provide comprehensive solutions for building and people protection using the latest technologies.',
    },
    shortDescription: {
      ar: 'أنظمة أمن، مراقبة، وكشف حريق',
      en: 'Security, surveillance, and fire detection systems',
    },
    icon: 'shield',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'أنظمة التيار الخافت هي الأنظمة الأمنية والإلكترونية التي تعمل على جهد منخفض. تشمل كاميرات المراقبة، أنظمة الإنذار، والتحكم في الوصول.',
      en: 'Low current systems are security and electronic systems that operate at low voltage. This includes surveillance cameras, alarm systems, and access control.',
    },
    benefits: {
      ar: [
        'حماية شاملة للأصول',
        'مراقبة على مدار الساعة',
        'ردع الجرائم',
        'أمان الأشخاص',
        'توثيق الأحداث',
        'استجابة سريعة للطوارئ',
      ],
      en: [
        'Comprehensive asset protection',
        '24/7 monitoring',
        'Crime deterrence',
        'Personal safety',
        'Event documentation',
        'Emergency response',
      ],
    },
    whatsIncluded: {
      ar: [
        'نظام كاميرات المراقبة CCTV',
        'نظام الإنذار ضد السرقة',
        'نظام كشف الحريق',
        'نظام التحكم بالوصول',
        'نظام الاتصال الداخلي',
        'البوابات الإلكترونية',
        'أنظمة المراقبة الذكية',
        'التكامل مع الطوارئ',
      ],
      en: [
        'CCTV surveillance system',
        'Burglar alarm system',
        'Fire detection system',
        'Access control system',
        'Intercom system',
        'Electronic gates',
        'Smart surveillance systems',
        'Emergency integration',
      ],
    },
    useCases: {
      ar: [
        'الفلل والمجمعات السكنية',
        'المباني التجارية',
        'المستشفيات والعيادات',
        'المدارس والجامعات',
        'المصانع والمنشآت',
      ],
      en: [
        'Villas and residential compounds',
        'Commercial buildings',
        'Hospitals and clinics',
        'Schools and universities',
        'Factories and facilities',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523456867975-27a40092c904?w=800&auto=format&fit=crop',
    ],
  },
  {
    id: 'software-solutions',
    slug: 'software-solutions',
    title: {
      ar: 'الأنظمة البرمجية الخاصة',
      en: 'Custom Software Solutions',
    },
    description: {
      ar: 'حلول برمجية مخصصة لإدارة المباني والتحكم في أنظمتها. نقدم برمجيات متطورة تلبي احتياجات كل عميل.',
      en: 'Customized software solutions for building management and system control. We provide advanced software that meets each client\'s needs.',
    },
    shortDescription: {
      ar: 'حلول برمجية مخصصة لإدارة المباني',
      en: 'Customized software solutions for building management',
    },
    icon: 'code',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'الأنظمة البرمجية الخاصة هي تطبيقات مصممة خصيصاً لإدارة المباني والتحكم في أنظمتها المختلفة من واجهة واحدة.',
      en: 'Custom software solutions are applications specifically designed to manage buildings and control their various systems from a single interface.',
    },
    benefits: {
      ar: [
        'تحكم مركزي شامل',
        'واجهة مستخدم سهلة',
        'تقارير وتحليلات مفصلة',
        'أتمتة العمليات',
        'توفير الوقت والجهد',
        'مرونة في التخصيص',
      ],
      en: [
        'Comprehensive central control',
        'Easy user interface',
        'Detailed reports and analytics',
        'Process automation',
        'Time and effort savings',
        'Customization flexibility',
      ],
    },
    whatsIncluded: {
      ar: [
        'أنظمة إدارة المباني',
        'تطبيقات التحكم الذكية',
        'لوحات المعلومات والتحكم',
        'أنظمة الإشعارات',
        'تقارير الاستهلاك',
        'أتمتة السيناريوهات',
        'تكامل مع الأجهزة',
        'دعم فني متخصص',
      ],
      en: [
        'Building management systems',
        'Smart control applications',
        'Dashboard and control panels',
        'Notification systems',
        'Consumption reports',
        'Scenario automation',
        'Device integration',
        'Specialized technical support',
      ],
    },
    useCases: {
      ar: [
        'المباني التجارية',
        'المجمعات السكنية',
        'الفنادق',
        'المستشفيات',
        'المصانع',
      ],
      en: [
        'Commercial buildings',
        'Residential compounds',
        'Hotels',
        'Hospitals',
        'Factories',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    ],
  },
]

export function getServices(locale: Locale) {
  return services.map(service => ({
    ...service,
    title: service.title[locale],
    description: service.description[locale],
    shortDescription: service.shortDescription[locale],
    whatIs: service.whatIs?.[locale],
    benefits: service.benefits?.[locale],
    whatsIncluded: service.whatsIncluded?.[locale],
    useCases: service.useCases?.[locale],
    scenarios: service.scenarios?.[locale],
    faq: service.faq?.map(faq => ({
      question: faq.question[locale],
      answer: faq.answer[locale],
    })),
  }))
}

export function getServiceBySlug(slug: string, locale: Locale) {
  const service = services.find(s => s.slug === slug)
  if (!service) return null
  return getServices(locale).find(s => s.slug === slug)
}

export function getRelatedServices(serviceId: string, locale: Locale) {
  return getServices(locale)
    .filter(s => s.id !== serviceId)
    .slice(0, 3)
}