import { Locale } from '@/i18n/request'

export interface Project {
  id: string
  slug: string
  title: {
    ar: string
    en: string
  }
  client: {
    ar: string
    en: string
  }
  location: {
    ar: string
    en: string
  }
  date: string
  duration: {
    ar: string
    en: string
  }
  description: {
    ar: string
    en: string
  }
  objective: {
    ar: string
    en: string
  }
  solution: {
    ar: string
    en: string
  }
  challenge: {
    ar: string
    en: string
  }
  outcomes: {
    ar: string[]
    en: string[]
  }
  services: string[]
  gallery: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'luxury-villa-jeddah',
    slug: 'luxury-villa-jeddah',
    title: {
      ar: 'فيلا فاخرة - جدة',
      en: 'Luxury Villa - Jeddah',
    },
    client: {
      ar: 'عميل خاص',
      en: 'Private Client',
    },
    location: {
      ar: 'حي الروضة، جدة',
      en: 'Al Rawdah District, Jeddah',
    },
    date: '2024-08-15',
    duration: {
      ar: '3 أشهر',
      en: '3 months',
    },
    description: {
      ar: 'تحويل فيلا فاخرة في جدة إلى منزل ذكي متكامل مع أنظمة التحكم بالإضاءة، التكييف، الأمان، والترفيه.',
      en: 'Transforming a luxury villa in Jeddah into a fully integrated smart home with lighting, HVAC, security, and entertainment control systems.',
    },
    objective: {
      ar: 'تحقيق الراحة والأمان مع توفير الطاقة من خلال نظام منزل ذكي شامل يتحكم في جميع جوانب الحياة اليومية.',
      en: 'Achieve comfort and security while saving energy through a comprehensive smart home system that controls all aspects of daily life.',
    },
    challenge: {
      ar: 'دمج أنظمة متعددة من موردين مختلفين في واجهة تحكم واحدة سهلة الاستخدام لجميع أفراد الأسرة.',
      en: 'Integrating multiple systems from different vendors into a single, easy-to-use control interface for all family members.',
    },
    solution: {
      ar: 'نصب نظام منزل ذكي شامل يشمل التحكم المركزي بالإضاءة، نظام التكييف الذكي، أنظمة الأمان المتقدمة، نظام الترفيه المتكامل، والتطبيق الجوال للتحكم عن بعد.',
      en: 'Installed a comprehensive smart home system including central lighting control, smart HVAC, advanced security systems, integrated entertainment, and mobile app for remote control.',
    },
    outcomes: {
      ar: [
        'توفير 30% من استهلاك الطاقة',
        'تحسين الأمان بمستويات متعددة من الحماية',
        'سهولة التحكم من أي مكان عبر التطبيق',
        'تخصيص سيناريوهات مختلفة لكل نشاط',
        'زيادة قيمة الفيلا بنسبة 15%',
      ],
      en: [
        '30% reduction in energy consumption',
        'Enhanced security with multiple protection levels',
        'Easy control from anywhere via the app',
        'Customized scenarios for each activity',
        '15% increase in villa value',
      ],
    },
    services: ['smart-home', 'smart-locks'],
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'commercial-tower-riyadh',
    slug: 'commercial-tower-riyadh',
    title: {
      ar: 'برج تجاري - الرياض',
      en: 'Commercial Tower - Riyadh',
    },
    client: {
      ar: 'شركة استثمارية كبرى',
      en: 'Major Investment Company',
    },
    location: {
      ar: 'حي العليا، الرياض',
      en: 'Al Olaya District, Riyadh',
    },
    date: '2024-06-20',
    duration: {
      ar: '6 أشهر',
      en: '6 months',
    },
    description: {
      ar: 'نظام إدارة المباني الذكية (BMS) لبرج تجاري مكون من 20 طابقاً مع التحكم المركزي في جميع الأنظمة.',
      en: 'Smart Building Management System (BMS) for a 20-story commercial tower with central control of all systems.',
    },
    objective: {
      ar: 'تحسين كفاءة المبنى، توفير الطاقة، وتبسيط إدارة جميع الأنظمة من خلال واجهة تحكم مركزية واحدة.',
      en: 'Improve building efficiency, save energy, and simplify management of all systems through a single central control interface.',
    },
    challenge: {
      ar: 'إدارة 20 طابقاً مع أكثر من 100 مكتب، مع الحاجة لمراقبة وتحليل استهلاك الطاقة في الوقت الفعلي.',
      en: 'Managing 20 floors with over 100 offices, with the need to monitor and analyze energy consumption in real-time.',
    },
    solution: {
      ar: 'تثبيت نظام BMS متقدم مع أجهزة استشعار ذكية في جميع الطوابق، لوحات تحكم مركزية، وتقارير تحليلية مفصلة.',
      en: 'Installed advanced BMS system with smart sensors on all floors, central control panels, and detailed analytical reports.',
    },
    outcomes: {
      ar: [
        'توفير 40% من تكاليف الطاقة',
        'تحسين استجابة الصيانة بنسبة 50%',
        'مراقبة شاملة في الوقت الفعلي',
        'تحليلات تفصيلية لاتخاذ القرارات',
        'تحسين تجربة المستأجرين',
      ],
      en: [
        '40% reduction in energy costs',
        '50% improvement in maintenance response',
        'Comprehensive real-time monitoring',
        'Detailed analytics for decision-making',
        'Improved tenant experience',
      ],
    },
    services: ['smart-systems', 'smart-parking'],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'five-star-hotel-jeddah',
    slug: 'five-star-hotel-jeddah',
    title: {
      ar: 'فندق خمس نجوم - جدة',
      en: 'Five-Star Hotel - Jeddah',
    },
    client: {
      ar: 'سلسلة فنادق عالمية',
      en: 'International Hotel Chain',
    },
    location: {
      ar: 'الكورنيش، جدة',
      en: 'Corniche, Jeddah',
    },
    date: '2024-04-10',
    duration: {
      ar: '8 أشهر',
      en: '8 months',
    },
    description: {
      ar: 'حلول الفندق الذكي لفندق خمس نجوم مع 200 غرفة، بما في ذلك إدارة الغرف، التحكم الذكي، وأنظمة الترفيه.',
      en: 'Smart hotel solutions for a five-star hotel with 200 rooms, including room management, smart control, and entertainment systems.',
    },
    objective: {
      ar: 'تعزيز تجربة الضيوف، تحسين الكفاءة التشغيلية، وتوفير الطاقة من خلال أنظمة الفندق الذكي.',
      en: 'Enhance guest experience, improve operational efficiency, and save energy through smart hotel systems.',
    },
    challenge: {
      ar: 'توفير تجربة فريدة ومخصصة لكل ضيف مع الحفاظ على الكفاءة التشغيلية وتوفير الطاقة.',
      en: 'Provide a unique and personalized experience for each guest while maintaining operational efficiency and energy savings.',
    },
    solution: {
      ar: 'نظام RMS متقدم، أقفال ذكية للغرف، تحكم ذكي بالإضاءة والمناخ، نظام ترفيه متكامل، وتطبيق للضيوف.',
      en: 'Advanced RMS system, smart room locks, smart lighting and climate control, integrated entertainment system, and guest app.',
    },
    outcomes: {
      ar: [
        'زيادة رضا الضيوف بنسبة 35%',
        'توفير 25% من تكاليف الطاقة',
        'تقليل وقت إعداد الغرفة بنسبة 40%',
        'تحسين كفاءة الطاقم',
        'تجربة فريدة للضيوف',
      ],
      en: [
        '35% increase in guest satisfaction',
        '25% reduction in energy costs',
        '40% reduction in room preparation time',
        'Improved staff efficiency',
        'Unique guest experience',
      ],
    },
    services: ['smart-hotel', 'smart-locks'],
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'smart-parking-mall-dammam',
    slug: 'smart-parking-mall-dammam',
    title: {
      ar: 'مركز تسوق - الدمام',
      en: 'Shopping Mall - Dammam',
    },
    client: {
      ar: 'شركة مراكز تسوق',
      en: 'Malls Company',
    },
    location: {
      ar: 'حي الشاطئ، الدمام',
      en: 'Al Corniche, Dammam',
    },
    date: '2024-02-28',
    duration: {
      ar: '4 أشهر',
      en: '4 months',
    },
    description: {
      ar: 'نظام مواقف ذكي لمركز تسوق كبير مع 1000 موقف سيارة، يشمل التعرف على اللوحات والدفع الإلكتروني.',
      en: 'Smart parking system for a large shopping mall with 1000 parking spaces, including license plate recognition and electronic payment.',
    },
    objective: {
      ar: 'تقليل الازدحام، تحسين تجربة الزوار، وتسهيل إدارة المواقف بشكل آلي.',
      en: 'Reduce congestion, improve visitor experience, and facilitate automated parking management.',
    },
    challenge: {
      ar: 'إدارة 1000 موقف سيارة مع تدفق عالي من الزوار، خاصة في أوقات الذروة والأعياد.',
      en: 'Managing 1000 parking spaces with high visitor flow, especially during peak times and holidays.',
    },
    solution: {
      ar: 'نظام LPR متطور، بوابات حاجز آلية، تطبيق للمستخدمين، نظام دفع إلكتروني، وتحليلات الاستخدام.',
      en: 'Advanced LPR system, automatic barrier gates, user app, electronic payment system, and usage analytics.',
    },
    outcomes: {
      ar: [
        'تقليل وقت الدخول بنسبة 70%',
        'تحسين استخدام المواقف بنسبة 40%',
        'تقليل الازدحام بنسبة 60%',
        'تجربة مستخدم محسّنة',
        'إدارة آلية بالكامل',
      ],
      en: [
        '70% reduction in entry time',
        '40% improvement in parking utilization',
        '60% reduction in congestion',
        'Enhanced user experience',
        'Fully automated management',
      ],
    },
    services: ['smart-parking'],
    gallery: [
      'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'office-access-riyadh',
    slug: 'office-access-riyadh',
    title: {
      ar: 'مكتب شركة - الرياض',
      en: 'Company Office - Riyadh',
    },
    client: {
      ar: 'شركة تقنية سعودية',
      en: 'Saudi Tech Company',
    },
    location: {
      ar: 'حي الملك فهد، الرياض',
      en: 'King Fahd District, Riyadh',
    },
    date: '2023-11-15',
    duration: {
      ar: 'شهران',
      en: '2 months',
    },
    description: {
      ar: 'نظام تحكم في الوصول لمكتب شركة كبير مع 150 موظفاً، يشمل أقفال ذكية وسجلات الوصول.',
      en: 'Access control system for a large company office with 150 employees, including smart locks and access logs.',
    },
    objective: {
      ar: 'تحسين الأمان، تحكم دقيق في الوصول، ومراقبة دخول وخروج جميع الموظفين والزوار.',
      en: 'Enhance security, precise access control, and monitor entry and exit of all employees and visitors.',
    },
    challenge: {
      ar: 'إدارة الوصول لـ 150 موظفاً مع مستويات أمان مختلفة وساعات عمل متغيرة.',
      en: 'Managing access for 150 employees with different security levels and varying working hours.',
    },
    solution: {
      ar: 'أقفال ذكية في جميع المداخل، نظام بصمة الإصبع، رموز PIN، وتطبيق إدارة سجلات الوصول.',
      en: 'Smart locks at all entrances, fingerprint system, PIN codes, and access logs management app.',
    },
    outcomes: {
      ar: [
        'تحسين الأمان بنسبة 80%',
        'تتبع دقيق لجميع الوصولات',
        'إدارة مرنة للموظفين',
        'تقارير تفصيلية للأنشطة',
        'سهولة إضافة وإزالة المستخدمين',
      ],
      en: [
        '80% improvement in security',
        'Precise tracking of all access',
        'Flexible employee management',
        'Detailed activity reports',
        'Easy user addition and removal',
      ],
    },
    services: ['smart-locks', 'smart-systems'],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523456867975-27a40092c904?w=800&auto=format&fit=crop',
    ],
    featured: false,
  },
  {
    id: 'led-display-stadium-jeddah',
    slug: 'led-display-stadium-jeddah',
    title: {
      ar: 'ملعب رياضي - جدة',
      en: 'Sports Stadium - Jeddah',
    },
    client: {
      ar: 'وزارة الرياضة',
      en: 'Ministry of Sports',
    },
    location: {
      ar: 'حي الملك عبدالله، جدة',
      en: 'King Abdullah District, Jeddah',
    },
    date: '2023-09-01',
    duration: {
      ar: '3 أشهر',
      en: '3 months',
    },
    description: {
      ar: 'لوحات عرض LED خارجية كبيرة لملعب رياضي بقدرة عرض عالية ووضوح ممتاز.',
      en: 'Large outdoor LED display panels for a sports stadium with high display capacity and excellent clarity.',
    },
    objective: {
      ar: 'توفير تجربة مشاهدة محسّنة للمتفرجين مع عرض واضح للنتائج والإعلانات.',
      en: 'Provide enhanced viewing experience for spectators with clear display of results and advertisements.',
    },
    challenge: {
      ar: 'توفير شاشات عالية السطوع مقاومة للعوامل الجوية مع وضوح ممتاز في ظروف الإضاءة المختلفة.',
      en: 'Providing high brightness screens that are weather-resistant with excellent clarity under various lighting conditions.',
    },
    solution: {
      ar: 'لوحات LED خارجية عالية السطوع، نظام إدارة المحتوى المتقدم، وصيانة دورية شاملة.',
      en: 'High brightness outdoor LED panels, advanced content management system, and comprehensive regular maintenance.',
    },
    outcomes: {
      ar: [
        'وضوح ممتاز في جميع الظروف',
        'تحسين تجربة المتفرجين بنسبة 50%',
        'عرض إعلاني فعال',
        'سهولة إدارة المحتوى',
        'متانة عالية مقاومة للطقس',
      ],
      en: [
        'Excellent clarity in all conditions',
        '50% improvement in spectator experience',
        'Effective advertising display',
        'Easy content management',
        'High weather resistance durability',
      ],
    },
    services: ['modular-led-panels'],
    gallery: [
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop',
    ],
    featured: true,
  },
]

export function getProjects(locale: Locale) {
  return projects.map(project => ({
    ...project,
    title: project.title[locale],
    client: project.client[locale],
    location: project.location[locale],
    description: project.description[locale],
    objective: project.objective[locale],
    solution: project.solution[locale],
    challenge: project.challenge[locale],
    outcomes: project.outcomes[locale],
    duration: project.duration[locale],
  }))
}

export function getProjectBySlug(slug: string, locale: Locale) {
  const project = projects.find(p => p.slug === slug)
  if (!project) return null
  return getProjects(locale).find(p => p.slug === slug)
}

export function getFeaturedProjects(locale: Locale) {
  return getProjects(locale).filter(p => p.featured)
}

export function getProjectsByService(serviceId: string, locale: Locale) {
  return getProjects(locale).filter(p => p.services.includes(serviceId))
}