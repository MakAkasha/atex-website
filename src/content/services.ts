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
    id: 'smart-home',
    slug: 'smart-home',
    title: {
      ar: 'المنزل الذكي',
      en: 'Smart Home',
    },
    description: {
      ar: 'حلول متكاملة لتحويل منزلك إلى منزل ذكي متصل بالكامل. نقدم أنظمة ذكية للتحكم في الإضاءة، التكييف، الأمن، الترفيه، والمزيد من خلال واجهة واحدة سهلة الاستخدام.',
      en: 'Complete solutions to transform your home into a fully connected smart home. We offer smart systems to control lighting, climate, security, entertainment, and more through a single easy-to-use interface.',
    },
    shortDescription: {
      ar: 'حلول متكاملة لتحويل منزلك إلى منزل ذكي متصل بالكامل',
      en: 'Complete solutions to transform your home into a fully connected smart home',
    },
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'المنزل الذكي هو نظام يربط جميع أجهزتك المنزلية وأجهزتك الإلكترونية معاً، مما يسمح لك بالتحكم فيها تلقائياً أو عن بعد من خلال هاتفك الذكي أو جهازك اللوحي أو الكمبيوتر. يمكنه تعزيز الأمان، توفير الطاقة، وتحسين الراحة في حياتك اليومية.',
      en: 'A smart home is a system that connects all your home appliances and electronic devices together, allowing you to control them automatically or remotely through your smartphone, tablet, or computer. It can enhance security, save energy, and improve comfort in your daily life.',
    },
    benefits: {
      ar: [
        'راحة غير مسبوقة - تحكم في منزلك من أي مكان',
        'توفير الطاقة - تقليل فواتير الكهرباء والأسعار',
        'أمان متقدم - أنظمة أمان ومراقبة ذكية',
        'تخصيص كامل - أنظمة مصممة حسب احتياجاتك',
        'قيمة مضافة - زيادة قيمة منزلك',
        'سهولة الاستخدام - واجهة بسيطة وسهلة',
      ],
      en: [
        'Unprecedented convenience - control your home from anywhere',
        'Energy savings - reduce electricity bills and costs',
        'Enhanced security - smart security and monitoring systems',
        'Complete customization - systems designed for your needs',
        'Added value - increase your home value',
        'Easy to use - simple and intuitive interface',
      ],
    },
    whatsIncluded: {
      ar: [
        'نظام التحكم بالإضاءة الذكي',
        'نظام التكييف الذكي والتحكم في المناخ',
        'نظام الأمان والمراقبة الذكي',
        'نظام الترفيه الذكي (صوتيات وفيديو)',
        'نظام التحكم بالستائر الذكي',
        'نظام قفل الأبواب الذكي',
        'التكامل مع المساعد الصوتي',
        'تطبيق جوال للتحكم الكامل',
      ],
      en: [
        'Smart lighting control system',
        'Smart HVAC and climate control',
        'Smart security and monitoring system',
        'Smart entertainment system (audio/video)',
        'Smart curtain control system',
        'Smart door lock system',
        'Voice assistant integration',
        'Mobile app for complete control',
      ],
    },
    useCases: {
      ar: [
        'الفيلات الفاخرة',
        'الشقق السكنية',
        'المكاتب المنزلية',
        'الفلل المزدوجة',
        'المباني السكنية الصغيرة',
      ],
      en: [
        'Luxury villas',
        'Residential apartments',
        'Home offices',
        'Duplex villas',
        'Small residential buildings',
      ],
    },
    scenarios: {
      ar: [
        {
          title: 'روتين الصباح',
          description: 'في الساعة 7 صباحاً، يستيقظ المنزل تلقائياً: الإضاءة تشرق ببطء، الستائر تفتح، الأجهزة تبدأ بالعمل، والموسيقى الهادئة تعزف. كل شيء جاهز ليومك.',
        },
        {
          title: 'مغادرة المنزل',
          description: 'عندما تغادر المنزل، اضغط "ابدأ وضع المغادرة" لإغلاق جميع الأنظمة غير الضرورية، تفعيل نظام الأمان، وتوفير الطاقة تلقائياً.',
        },
        {
          title: 'العودة للمنزل',
          description: 'عند اقترابك من المنزل، يستشعر النظام وجودك ويبدأ في إعداد المنزل: الإضاءة تضيء، التكييف يضبط درجة الحرارة، والموسيقى تبدأ. مرحباً بك في المنزل!',
        },
        {
          title: 'وضع السينما',
          description: 'اضغط زراً واحداً لتجربة سينمائية كاملة: الإضاءة تغمض، الستائر تغلق، النظام الصوتي يضبط، والتلفزيون يبدأ. استمتع بفيلمك المفضل!',
        },
        {
          title: 'وضع النوم',
          description: 'في وقت النوم، يضبط المنزل تلقائياً: الإضاءة تخفت، الأقفال تُغلق، الأمان يُفعل، ودرجة الحرارة تُضبط لراحتك. ليلة سعيدة!',
        },
        {
          title: 'الوضع الآمن',
          description: 'عندما تخرج في إجازة، يمكنك محاكاة وجودك في المنزل: الإضاءة تتحرك، الستائر تفتح وتغلق، مما يجعل منزلك يبدل مأهولاً.',
        },
      ],
      en: [
        {
          title: 'Morning Routine',
          description: 'At 7 AM, your home wakes up automatically: lights gradually brighten, curtains open, appliances start working, and soft music plays. Everything is ready for your day.',
        },
        {
          title: 'Leaving Home',
          description: 'When you leave home, press "Start Away Mode" to shut down unnecessary systems, activate security, and save energy automatically.',
        },
        {
          title: 'Coming Home',
          description: 'As you approach home, the system senses your presence and starts preparing the house: lights turn on, AC adjusts temperature, and music starts. Welcome home!',
        },
        {
          title: 'Cinema Mode',
          description: 'Press one button for a complete cinema experience: lights dim, curtains close, sound system adjusts, and TV starts. Enjoy your favorite movie!',
        },
        {
          title: 'Sleep Mode',
          description: 'At bedtime, the home adjusts automatically: lights dim, locks engage, security activates, and temperature adjusts for your comfort. Good night!',
        },
        {
          title: 'Safe Mode',
          description: 'When you go on vacation, you can simulate your presence: lights move, curtains open and close, making your home appear occupied.',
        },
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop',
    ],
    faq: [
      {
        question: {
          ar: 'هل يمكنني التحكم في منزلي الذكي من خارج المنزل؟',
          en: 'Can I control my smart home from outside the house?',
        },
        answer: {
          ar: 'نعم، يمكنك التحكم في جميع أنظمة منزلك الذكي من أي مكان في العالم من خلال تطبيق الجوال المثبت على هاتفك الذكي، بشرط وجود اتصال بالإنترنت.',
          en: 'Yes, you can control all your smart home systems from anywhere in the world through the mobile app installed on your smartphone, provided you have an internet connection.',
        },
      },
      {
        question: {
          ar: 'هل يعمل المنزل الذكي في حالة انقطاع الإنترنت؟',
          en: 'Does the smart home work during internet outage?',
        },
        answer: {
          ar: 'نعم، معظم أنظمة المنزل الذكي لدينا تعمل محلياً دون الحاجة إلى الإنترنت. يمكنك التحكم في الإضاءة، الأقفال، وأنظمة الأمان حتى بدون اتصال بالإنترنت. ومع ذلك، لن تتمكن من التحكم عن بعد.',
          en: 'Yes, most of our smart home systems work locally without requiring internet. You can control lights, locks, and security systems even without internet connection. However, remote control will not be available.',
        },
      },
      {
        question: {
          ar: 'كم يستغرق تثبيت نظام المنزل الذكي؟',
          en: 'How long does it take to install a smart home system?',
        },
        answer: {
          ar: 'يعتمد ذلك على حجم وتعقيد المشروع. يمكن تثبيت أنظمة بسيطة في بضعة أيام، بينما قد تستغرق المشاريع الكبيرة والمفصلة عدة أسابيع. سنقوم بتقييم احتياجاتك وتزويدك بجدول زمني دقيق.',
          en: 'It depends on the size and complexity of the project. Simple systems can be installed in a few days, while large and detailed projects may take several weeks. We will assess your needs and provide you with an accurate timeline.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني إضافة أجهزة جديدة للنظام لاحقاً؟',
          en: 'Can I add new devices to the system later?',
        },
        answer: {
          ar: 'نعم، أنظمة المنزل الذكي لدينا قابلة للتوسع بالكامل. يمكنك إشاء أي عدد من الأجهزة الجديدة في أي وقت حسب احتياجاتك.',
          en: 'Yes, our smart home systems are fully scalable. You can add any number of new devices at any time according to your needs.',
        },
      },
      {
        question: {
          ar: 'ما نوع الدعم الفني الذي تقدمونه؟',
          en: 'What kind of technical support do you provide?',
        },
        answer: {
          ar: 'نقدم دعماً فنياً شاملاً 24/7 للأنظمة التي نثبتها. يتضمن ذلك الدعم الهاتفي، الدعم عن بعد، والزيارات الميدانية عند الحاجة.',
          en: 'We provide comprehensive 24/7 technical support for the systems we install. This includes phone support, remote support, and on-site visits when needed.',
        },
      },
      {
        question: {
          ar: 'هل تقدمون ضماناً على الأنظمة؟',
          en: 'Do you offer warranty on systems?',
        },
        answer: {
          ar: 'نعم، نقدم ضماناً شاملاً على جميع الأجهزة والتثبيت. تختلف فترة الضمان حسب نوع الجهاز، لكنها تتراوح عموماً بين 1-3 سنوات.',
          en: 'Yes, we provide a comprehensive warranty on all devices and installation. Warranty periods vary by device type, but generally range from 1-3 years.',
        },
      },
    ],
    relatedProjects: ['luxury-villa-jeddah', 'apartment-automation-riyadh'],
  },
  {
    id: 'smart-locks',
    slug: 'smart-locks',
    title: {
      ar: 'الأقفال الذكية',
      en: 'Smart Locks',
    },
    description: {
      ar: 'نظام أقفال ذكية آمنة ومريحة لمنزلك ومكتبك. قل وداعاً للمفاتيح واستمتع بأمان متقدم مع سهولة الوصول من خلال بصمة الإصبع، رمز PIN، البطاقة، أو هاتفك الذكي.',
      en: 'Secure and convenient smart lock systems for your home and office. Say goodbye to keys and enjoy advanced security with easy access through fingerprint, PIN code, card, or your smartphone.',
    },
    shortDescription: {
      ar: 'نظام أقفال ذكية آمنة ومريحة لمنزلك ومكتبك',
      en: 'Secure and convenient smart lock systems for your home and office',
    },
    icon: 'lock',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'الأقفال الذكية هي أنظمة أمان إلكترونية متطورة تتيح لك فتح وإغلاق أبوابك دون الحاجة لمفاتيح تقليدية. يمكنك التحكم فيها من خلال بطاقات RFID، رموز PIN، بصمات الإصبع، أو حتى هاتفك الذكي من أي مكان.',
      en: 'Smart locks are advanced electronic security systems that allow you to open and close your doors without traditional keys. You can control them through RFID cards, PIN codes, fingerprints, or even your smartphone from anywhere.',
    },
    benefits: {
      ar: [
        'لا مفاتيح - لا تقلق بشأن فقدان المفاتيح',
        'أمان متقدم - تقنيات تشفير عالية',
        'سهولة الوصول - طرق متعددة للدخول',
        'مراقبة في الوقت الفعلي - اعرف من يدخل ومتى',
        'تحكم عن بعد - فتح وإغلاق من أي مكان',
        'سجلات الوصول - تتبع جميع عمليات الدخول والخروج',
      ],
      en: [
        'No keys - no worry about losing keys',
        'Advanced security - high encryption technologies',
        'Easy access - multiple entry methods',
        'Real-time monitoring - know who enters and when',
        'Remote control - open and close from anywhere',
        'Access logs - track all entries and exits',
      ],
    },
    whatsIncluded: {
      ar: [
        'أقفال ذكية مع لمسات',
        'نظام بصمة الإصبع',
        'قارئ بطاقات RFID',
        'لوحة مفاتيح رقمية',
        'تطبيق جوال للتحكم عن بعد',
        'تكامل مع نظام المنزل الذكي',
        'تقارير الوصول والأنشطة',
        'وضع الباب المفتوح',
      ],
      en: [
        'Smart locks with touchpads',
        'Fingerprint system',
        'RFID card reader',
        'Digital keypad',
        'Mobile app for remote control',
        'Smart home system integration',
        'Access and activity reports',
        'Door open status',
      ],
    },
    useCases: {
      ar: [
        'المنازل السكنية',
        'الشقق',
        'المكاتب',
        'الفنادق',
        'المباني التجارية',
      ],
      en: [
        'Residential homes',
        'Apartments',
        'Offices',
        'Hotels',
        'Commercial buildings',
      ],
    },
    scenarios: {
      ar: [
        {
          title: 'تأخرت في العمل',
          description: 'يمكنك فتح الباب لمقدم الخدمة أو الأسرة من خلال تطبيق الجوال أثناء وجودك في العمل.',
        },
        {
          title: 'نسيان المفاتيح',
          description: 'استخدم بصمة إصبعك أو رمز PIN للدخول دون الحاجة لمفاتيح.',
        },
        {
          title: 'المسافرون المتكررون',
          description: 'أنشئ رموز PIN مؤقتة للضيوف أو قصر العمال، ثم احذفها بسهولة.',
        },
        {
          title: 'التحكم في الوصول',
          description: 'حدد ساعات الوصول المسموح بها لكل مستخدم لزيادة الأمان.',
        },
        {
          title: 'إشعارات الأمان',
          description: 'احصل على إشعار فوري عند فتح الباب أو محاولة دخول غير مصرح بها.',
        },
      ],
      en: [
        {
          title: 'Late at Work',
          description: 'You can open the door for service providers or family through the mobile app while you are at work.',
        },
        {
          title: 'Forgot Keys',
          description: 'Use your fingerprint or PIN code to enter without needing keys.',
        },
        {
          title: 'Frequent Travelers',
          description: 'Create temporary PIN codes for guests or housekeepers, then delete them easily.',
        },
        {
          title: 'Access Control',
          description: 'Set allowed access hours for each user to enhance security.',
        },
        {
          title: 'Security Alerts',
          description: 'Get instant notifications when the door is opened or unauthorized access is attempted.',
        },
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523456867975-27a40092c904?w=800&auto=format&fit=crop',
    ],
    faq: [
      {
        question: {
          ar: 'ماذا يحدث إذا انقطعت البطارية؟',
          en: 'What happens if the battery runs out?',
        },
        answer: {
          ar: 'تتمتع معظم أقفالنا الذكية ببطارية احتياطية أو يمكنك استخدام مفتاح في حالات الطوارئ. كما يتم إرسال إشعار عند انخفاض البطارية.',
          en: 'Most of our smart locks have backup batteries or you can use a key in emergency cases. You also receive a notification when the battery is low.',
        },
      },
      {
        question: {
          ar: 'هل يمكنني تثبيت القفل الذكي على بابي الحالي؟',
          en: 'Can I install a smart lock on my current door?',
        },
        answer: {
          ar: 'نعم، معظم أقفالنا الذكية متوافقة مع الأبواب القياسية. سيتحقق فريقنا من توافق بابك قبل التثبيت.',
          en: 'Yes, most of our smart locks are compatible with standard doors. Our team will verify your door compatibility before installation.',
        },
      },
      {
        question: {
          ar: 'هل النظام آمن من الاختراق؟',
          en: 'Is the system secure from hacking?',
        },
        answer: {
          ar: 'نعم، نستخدم أحدث تقنيات التشفير والأمان لحماية بياناتك ومنع الوصول غير المصرح به.',
          en: 'Yes, we use the latest encryption and security technologies to protect your data and prevent unauthorized access.',
        },
      },
    ],
    relatedProjects: ['office-access-riyadh'],
  },
  {
    id: 'smart-systems',
    slug: 'smart-systems',
    title: {
      ar: 'الأنظمة الذكية',
      en: 'Smart Systems',
    },
    description: {
      ar: 'أنظمة إدارة المباني الذكية والتحكم المركزي. نقدم حلولاً متكاملة للمباني التجارية والسكنية لتحسين الكفاءة وتوفير الطاقة وتعزيز الأمان.',
      en: 'Smart building management systems and central control solutions. We offer integrated solutions for commercial and residential buildings to improve efficiency, save energy, and enhance security.',
    },
    shortDescription: {
      ar: 'أنظمة إدارة المباني الذكية والتحكم المركزي',
      en: 'Smart building management systems and central control solutions',
    },
    icon: 'building',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'الأنظمة الذكية هي حلول شاملة لإدارة المباني التي تدمج جميع الأنظمة معاً في وحدة تحكم مركزية واحدة. تشمل الإضاءة، التكييف، الأمان، الصوتيات، وأنظمة أخرى، مما يسمح بإدارة فعالة وذكية للمبنى.',
      en: 'Smart systems are comprehensive building management solutions that integrate all systems together in a single central control unit. They include lighting, HVAC, security, audio, and other systems, allowing for efficient and intelligent building management.',
    },
    benefits: {
      ar: [
        'تحكم مركزي كامل',
        'توفير كبير في الطاقة',
        'أمان محسّن',
        'أداء أفضل للمبنى',
        'سهولة الصيانة',
        'تحليلات وتقارير مفصلة',
      ],
      en: [
        'Complete central control',
        'Significant energy savings',
        'Enhanced security',
        'Better building performance',
        'Easier maintenance',
        'Detailed analytics and reports',
      ],
    },
    whatsIncluded: {
      ar: [
        'نظام إدارة المبنى (BMS)',
        'التحكم المركزي بالإضاءة',
        'نظام التكييف الذكي',
        'نظام الأمان والمراقبة',
        'نظام إدارة الطاقة',
        'لوحة تحكم مركزية',
        'تطبيق جوال للإدارة',
        'تقارير وتحليلات الأداء',
      ],
      en: [
        'Building Management System (BMS)',
        'Central lighting control',
        'Smart HVAC system',
        'Security and monitoring system',
        'Energy management system',
        'Central control panel',
        'Mobile management app',
        'Performance analytics and reports',
      ],
    },
    useCases: {
      ar: [
        'الأبراج التجارية',
        'المجمعات السكنية',
        'الفنادق',
        'المستشفيات',
        'المدارس والجامعات',
      ],
      en: [
        'Commercial towers',
        'Residential complexes',
        'Hotels',
        'Hospitals',
        'Schools and universities',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    ],
    faq: [
      {
        question: {
          ar: 'ما حجم المبنى الذي يمكنه دعم النظام؟',
          en: 'What building size can the system support?',
        },
        answer: {
          ar: 'يمكن تخصيص نظامنا للعمل مع أي حجم مبنى، من المباني الصغيرة إلى الأبراج الكبيرة.',
          en: 'Our system can be customized to work with any building size, from small buildings to large towers.',
        },
      },
    ],
    relatedProjects: ['commercial-tower-riyadh'],
  },
  {
    id: 'smart-hotel',
    slug: 'smart-hotel',
    title: {
      ar: 'الفندق الذكي',
      en: 'Smart Hotel',
    },
    description: {
      ar: 'حلول الفنادق الذكية لتعزيز تجربة الضيوف وتحسين الكفاءة التشغيلية. نقدم أنظمة متكاملة لإدارة الغرف، التحكم في المناخ، الأمان، والترفيه.',
      en: 'Smart hotel solutions to enhance guest experience and improve operational efficiency. We offer integrated systems for room management, climate control, security, and entertainment.',
    },
    shortDescription: {
      ar: 'حلول الفنادق الذكية لتعزيز تجربة الضيوف',
      en: 'Smart hotel solutions to enhance guest experience',
    },
    icon: 'hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'الفندق الذكي هو نظام متكامل يربط جميع أنظمة الفندق معاً للتحكم الذكي والآلي. يشمل ذلك إدارة الغرف، التحكم في الإضاءة والمناخ، نظام القفل الذكي للغرف، والترفيه، كلها تعمل معاً لتوفير تجربة فريدة للضيوف.',
      en: 'A smart hotel is an integrated system that connects all hotel systems together for smart and automated control. This includes room management, lighting and climate control, smart room lock system, and entertainment, all working together to provide a unique guest experience.',
    },
    benefits: {
      ar: [
        'تجربة ضيف محسّنة',
        'توفير الطاقة',
        'كفاءة تشغيلية أفضل',
        'تكامل سلس',
        'سهولة الإدارة',
        'تحليلات وتقارير شاملة',
      ],
      en: [
        'Enhanced guest experience',
        'Energy savings',
        'Better operational efficiency',
        'Seamless integration',
        'Easy management',
        'Comprehensive analytics and reports',
      ],
    },
    whatsIncluded: {
      ar: [
        'نظام إدارة الغرف (RMS)',
        'تحكم ذكي بالإضاءة والمناخ',
        'أقفال ذكية للغرف',
        'نظام الترفيه',
        'تحكم صوتي',
        'تطبيق للضيوف',
        'لوحة تحكم للطاقم',
        'تقارير الطاقة والاستهلاك',
      ],
      en: [
        'Room Management System (RMS)',
        'Smart lighting and climate control',
        'Smart room locks',
        'Entertainment system',
        'Voice control',
        'Guest app',
        'Staff control panel',
        'Energy and consumption reports',
      ],
    },
    useCases: {
      ar: [
        'الفنادق الفاخرة',
        'فنادق الأعمال',
        'الشقق الفندقية',
        'المنتجعات السياحية',
      ],
      en: [
        'Luxury hotels',
        'Business hotels',
        'Hotel apartments',
        'Resorts',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop',
    ],
    faq: [
      {
        question: {
          ar: 'هل يمكن للضيوف التحكم في أنظمة الغرفة؟',
          en: 'Can guests control room systems?',
        },
        answer: {
          ar: 'نعم، يمكن للضيوف التحكم في الإضاءة، التكييف، الستائر، والترفيه من خلال لوحة تحكم في الغرفة أو تطبيق جوال.',
          en: 'Yes, guests can control lighting, climate, curtains, and entertainment through a control panel in the room or a mobile app.',
        },
      },
    ],
    relatedProjects: ['five-star-hotel-jeddah'],
  },
  {
    id: 'smart-parking',
    slug: 'smart-parking',
    title: {
      ar: 'أنظمة المواقف الذكية',
      en: 'Smart Parking Systems',
    },
    description: {
      ar: 'حلول إدارة مواقف السيارات الذكية والتعرف على اللوحات. نقدم أنظمة متكاملة لإدارة الدخول والخروج، الدفع الإلكتروني، وتحليل استخدام المواقف.',
      en: 'Smart parking management solutions and license plate recognition. We offer integrated systems for entry/exit management, electronic payment, and parking usage analytics.',
    },
    shortDescription: {
      ar: 'حلول إدارة مواقف السيارات الذكية والتعرف على اللوحات',
      en: 'Smart parking management solutions and license plate recognition',
    },
    icon: 'car',
    image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'أنظمة المواقف الذكية هي حلول تقنية متقدمة لإدارة مواقف السيارات بكفاءة. تشمل التعرف التلقائي على لوحات المركبات، إدارة الدخول والخروج، أنظمة الدفع الإلكتروني، وتحليلات استخدام المواقف، مما يقلل من الازدحام ويحسن تجربة المستخدم.',
      en: 'Smart parking systems are advanced technology solutions for efficient parking management. They include automatic license plate recognition, entry/exit management, electronic payment systems, and parking usage analytics, reducing congestion and improving user experience.',
    },
    benefits: {
      ar: [
        'إدارة آلية للمواقف',
        'تقليل الازدحام',
        'سهولة الدفع الإلكتروني',
        'تحليلات مفصلة للاستخدام',
        'كفاءة عالية',
        'تجربة مستخدم محسّنة',
      ],
      en: [
        'Automated parking management',
        'Reduced congestion',
        'Easy electronic payment',
        'Detailed usage analytics',
        'High efficiency',
        'Enhanced user experience',
      ],
    },
    whatsIncluded: {
      ar: [
        'نظام التعرف على اللوحات (LPR)',
        'أجهزة الحاجز الآلية',
        'بوابات الدفع الإلكتروني',
        'أجهزة استشعار المواقف',
        'تطبيق للمستخدمين',
        'لوحة تحكم للإدارة',
        'تقارير وتحليلات',
        'تكامل مع الأنظمة الأخرى',
      ],
      en: [
        'License Plate Recognition (LPR) system',
        'Automatic barrier gates',
        'Electronic payment gates',
        'Parking sensors',
        'User app',
        'Management control panel',
        'Reports and analytics',
        'Integration with other systems',
      ],
    },
    useCases: {
      ar: [
        'مراكز التسوق',
        'المطارات',
        'الفنادق',
        'المستشفيات',
        'المباني التجارية',
      ],
      en: [
        'Shopping malls',
        'Airports',
        'Hotels',
        'Hospitals',
        'Commercial buildings',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&auto=format&fit=crop',
    ],
    faq: [
      {
        question: {
          ar: 'كيف يعمل التعرف على اللوحات؟',
          en: 'How does license plate recognition work?',
        },
        answer: {
          ar: 'يستخدم النظام الكاميرات لالتقاط صور لوحات المركبات، ثم يحللها برمجياً لقراءة الرقم وتسجيل الدخول والخروج تلقائياً.',
          en: 'The system uses cameras to capture images of license plates, then analyzes them programmatically to read the number and record entry/exit automatically.',
        },
      },
    ],
    relatedProjects: ['smart-parking-mall-dammam'],
  },
  {
    id: 'modular-led-panels',
    slug: 'modular-led-panels',
    title: {
      ar: 'لوحات عرض LED',
      en: 'Modular LED Display Panels',
    },
    description: {
      ar: 'لوحات عرض LED معيارية داخلية وخارجية. نقدم شاشات LED عالية الجودة بمختلف الأحجام والأشكال لأغراض الإعلانات، المعلومات، والترفيه.',
      en: 'Indoor and outdoor modular LED display panels. We offer high-quality LED screens in various sizes and shapes for advertising, information, and entertainment purposes.',
    },
    shortDescription: {
      ar: 'لوحات عرض LED معيارية داخلية وخارجية',
      en: 'Indoor and outdoor modular LED display panels',
    },
    icon: 'monitor',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop',
    whatIs: {
      ar: 'لوحات عرض LED المعيارية هي شاشات عرض رقمية متطورة تستخدم مصابيح LED لعرض المحتوى بدقة عالية وسطوع ممتاز. يمكن تجميعها في أشكال وأحجام مختلفة حسب الحاجة، وتستخدم للإعلانات، عرض المعلومات، والترفيه في الأماكن الداخلية والخارجية.',
      en: 'Modular LED display panels are advanced digital display screens that use LED lights to display content with high resolution and excellent brightness. They can be assembled in various shapes and sizes as needed, and are used for advertising, information display, and entertainment in indoor and outdoor locations.',
    },
    benefits: {
      ar: [
        'جودة عرض عالية',
        'سطوع ممتاز',
        'قابلية التخصيص',
        'استهلاك طاقة منخفض',
        'عمر طويل',
        'سهولة الصيانة',
      ],
      en: [
        'High display quality',
        'Excellent brightness',
        'Customizable',
        'Low energy consumption',
        'Long lifespan',
        'Easy maintenance',
      ],
    },
    whatsIncluded: {
      ar: [
        'شاشات LED داخلية',
        'شاشات LED خارجية',
        'نظام إدارة المحتوى',
        'تركيب وتثبيت',
        'صيانة ودعم فني',
        'تدريب على الاستخدام',
      ],
      en: [
        'Indoor LED screens',
        'Outdoor LED screens',
        'Content management system',
        'Installation',
        'Maintenance and technical support',
        'Usage training',
      ],
    },
    useCases: {
      ar: [
        'المراكز التجارية',
        'الملاعب الرياضية',
        'المطارات',
        'الفنادق',
        'المباني الحكومية',
      ],
      en: [
        'Shopping malls',
        'Sports stadiums',
        'Airports',
        'Hotels',
        'Government buildings',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    ],
    faq: [
      {
        question: {
          ar: 'ما الفرق بين الشاشات الداخلية والخارجية؟',
          en: 'What is the difference between indoor and outdoor screens?',
        },
        answer: {
          ar: 'الشاشات الخارجية لديها سطوع أعلى وتكون مقاومة للعوامل الجوية، بينما الشاشات الداخلية تتمتع بدقة أعلى وتبعد مشاهدة أقرب.',
          en: 'Outdoor screens have higher brightness and are weather-resistant, while indoor screens offer higher resolution and closer viewing distance.',
        },
      },
    ],
    relatedProjects: ['led-display-stadium-jeddah'],
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