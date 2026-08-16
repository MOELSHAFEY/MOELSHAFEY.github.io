/**
 * Mohamed Elshafey - Professional Freelance Portfolio Structured Data
 * 11-Section Framework with STAR Method Project Case Studies
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Mohamed Elshafey",
    title: "Production Flutter Developer | Android & iOS Specialist",
    tagline: "I build high-performance mobile apps that turn visitors into loyal users.",
    location: "Menoufia, Egypt (Available for Worldwide Remote & Contract Work)",
    email: "shafymo15@gmail.com",
    phone: "+20 1062590686",
    linkedin: "https://linkedin.com/in/mohamed-mohamed-elshafey",
    github: "https://github.com/MOELSHAFEY",
    availability: "Open for Work: Freelance · Full-Time · Part-Time (Worldwide Remote)",
    experienceYears: "2+ Years Production",
    publishedApps: "8+ Published Apps",
    verifiedInstalls: "15,000+",
    avgRating: "4.9 ★"
  },

  // 1. COVER METRICS
  proofBar: [
    { number: "15,000+", label: "Verified Store Installs", subtitle: "Across Google Play & App Store" },
    { number: "4.9 ★", label: "Average User Rating", subtitle: "250+ authentic reviews" },
    { number: "8+ Apps", label: "Production Deployments", subtitle: "Dual-store Android & iOS releases" },
    { number: "Egypt & KSA", label: "Cross-Border Markets", subtitle: "Institutional & Commercial platforms" }
  ],

  // 2. ABOUT ME
  about: {
    hook: "What if your next customer is already looking for your business on their phone?",
    story: "Today, a mobile app is an important way for businesses to reach their customers faster, show their products and services, take orders and bookings, and most importantly, reach new customers and increase sales. I’m Mohamed Elshafey, a Mobile Developer specializing in Flutter. I help businesses and startups turn their ideas into professional and easy-to-use mobile apps that help them reach their customers and grow their business.",
    flagshipExperience: "One of the projects I’m proud of is developing the official mobile app for Menoufia University, a public university in Egypt. It was an important experience for me and gave me real experience in building apps used by many people.",
    cta: "Have an app idea? Let’s turn it into a real product that helps your business grow and increase sales."
  },

  // 3. UNIQUE SELLING POINT (USP)
  usp: [
    {
      id: "production-proven",
      title: "Production-Proven with 15k+ Real Users",
      description: "Unlike developers who only build demo prototypes, I have delivered official institutional and commercial apps with 15,000+ verified downloads and a 4.9 ★ rating in live production.",
      icon: "trophy"
    },
    {
      id: "clean-architecture",
      title: "Clean Architecture & Zero Technical Debt",
      description: "Strict separation of Data, Domain, and Presentation layers using BLoC and Provider. Your codebase stays modular, highly testable, and effortless to scale as your business expands.",
      icon: "layers"
    },
    {
      id: "arabic-gulf-mastery",
      title: "Deep Arabic RTL & Gulf Market Mastery",
      description: "Specialized in seamless Right-to-Left (RTL) localization, native Arabic font typography, and custom business flows tailored for clients in Egypt, Saudi Arabia, and the wider MENA region.",
      icon: "globe"
    },
    {
      id: "dual-store-delivery",
      title: "End-to-End Store Approval Guarantee",
      description: "From setting up certificates and test tracks to passing Apple App Store Connect and Google Play Console review guidelines on the first submission.",
      icon: "check-circle"
    }
  ],

  // 4. EDUCATION & CERTIFICATIONS
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Physics",
      institution: "Menoufia University",
      period: "2022 – 2026",
      location: "Menoufia, Egypt",
      gpa: "3.33 / 4.00 (Very Good / جـيد جـداً)",
      details: "Strong core foundation in Data Structures, Algorithms, Object-Oriented Programming (OOP), Software Engineering Principles, Relational Databases (SQL), Operating Systems, and Computational Logic."
    },
    {
      degree: "Advanced Flutter & Clean Architecture Specialization",
      institution: "Udemy Course · Professional Track",
      period: "2023 – 2024",
      location: "Online / Practical Production",
      details: "Comprehensive mastery of Clean Architecture in Flutter (Data, Domain, Presentation), Reactive State Management (BLoC/Cubit, Provider), REST API design, SQLite offline caching, and automated App Store/Google Play release workflows."
    }
  ],

  // 5. SKILLS (Technical & Professional)
  skills: [
    {
      category: "Flutter & Mobile Core",
      icon: "flutter",
      description: "Cross-platform iOS & Android engineering",
      tags: ["Flutter", "Dart", "Android SDK", "iOS / Xcode", "Responsive UI", "60fps Animations", "Arabic RTL Support"]
    },
    {
      category: "Architecture & State Management",
      icon: "architecture",
      description: "Scalable, modular code structure",
      tags: ["Clean Architecture", "BLoC / Cubit", "Provider", "SOLID Principles", "MVVM & Repository", "Dependency Injection (GetIt)"]
    },
    {
      category: "Backend & Cloud Services",
      icon: "cloud",
      description: "APIs, real-time sync & local databases",
      tags: ["REST APIs (Dio)", "Firebase Auth", "Cloud Firestore", "Push Alerts (FCM)", "SQLite / Sqflite", "Shared Preferences"]
    },
    {
      category: "Integrations & SDKs",
      icon: "integrations",
      description: "Payment, maps, scanning & voice",
      tags: ["Payment Gateways", "Google Maps SDK", "Camera QR Scanning", "Voice Search Engine", "Deep Linking"]
    },
    {
      category: "Release Ops & Tools",
      icon: "tools",
      description: "Project delivery & store publishing",
      tags: ["App Store Connect", "Google Play Console", "Git / GitHub", "Postman", "Figma to Flutter", "CI/CD Pipelines"]
    },
    {
      category: "Professional & Soft Skills",
      icon: "users",
      description: "Communication, ownership & delivery",
      tags: ["Client Communication", "Problem Solving", "End-to-End Ownership", "Time Management", "Agile Collaboration", "Root-Cause Debugging"]
    }
  ],

  // 6. WORK EXPERIENCE
  experience: [
    {
      company: "Computality IT",
      position: "Flutter Developer (Project-Based / Freelance)",
      period: "November 2023 – Present",
      location: "Remote",
      badge: "Production Contractor",
      summary: "Lead mobile engineer responsible for architecting, building, and publishing high-profile institutional and commercial applications across Egyptian and Gulf markets.",
      bullets: [
        "Architected and deployed 5+ Flutter applications on Google Play and Apple App Store with over 15,000+ total active installs.",
        "Implemented Clean Architecture (Data, Domain, Presentation) with BLoC and Provider, decreasing bug resolution time and accelerating feature shipping by 40%.",
        "Integrated critical third-party services including payment gateways, Google Maps, Firebase Cloud Messaging push notifications, and high-speed QR scanners.",
        "Handled end-to-end store release workflows, managing Apple App Store Connect certificates, provisioning profiles, and Google Play Console compliance."
      ],
      technologies: ["Flutter", "Dart", "Clean Architecture", "BLoC", "Provider", "Firebase", "REST APIs", "Google Play", "App Store Connect"]
    },
    {
      company: "Independent Freelance Mobile Consultant",
      position: "Mobile App Consultant & Developer",
      period: "2023 – Present",
      location: "Worldwide Remote",
      badge: "Freelance",
      summary: "Partnering with startups, business owners, and academic organizations to scope, build, and optimize cross-platform mobile products.",
      bullets: [
        "Consulted clients on mobile product feasibility, UI/UX workflow optimization, and cost-effective cross-platform tech stack selection.",
        "Refactored legacy codebases to Clean Architecture, improving app boot time, memory efficiency, and offline database responsiveness.",
        "Delivered 100% on-time project milestones with transparent progress updates and comprehensive post-launch code documentation."
      ],
      technologies: ["Flutter", "Dart", "SQLite", "Clean Architecture", "UI/UX Consultation", "Store Publishing"]
    }
  ],

  // 7. OFFERED SERVICES
  services: [
    {
      id: "custom-mobile-app",
      title: "End-to-End Flutter App Development",
      description: "Turn your business concept or Figma designs into a blazing-fast, responsive mobile application for iOS and Android using a single clean codebase.",
      keywords: ["Cross-Platform Mobile App", "iOS App Development", "Android App Development", "Figma to Flutter"],
      features: [
        "Pixel-perfect responsive UI across all phone & tablet sizes",
        "Native performance with locked 60fps animations",
        "Scalable Clean Architecture built for long-term growth"
      ]
    },
    {
      id: "store-publishing",
      title: "App Store & Google Play Publishing",
      description: "Take the stress out of app deployment. Complete configuration of developer accounts, certificates, privacy disclosures, and guaranteed store approval.",
      keywords: ["Google Play Console", "Apple App Store Connect", "Store Policy Compliance", "App Release"],
      features: [
        "Store listing asset optimization (screenshots & metadata)",
        "Provisioning profiles, signing certificates, and release builds",
        "Handling review feedback and store compliance guidelines"
      ]
    },
    {
      id: "architecture-refactoring",
      title: "Code Refactoring & Clean Architecture",
      description: "Upgrade messy spaghetti code or legacy applications into a maintainable, testable Clean Architecture structure with BLoC or Provider.",
      keywords: ["Clean Architecture Migration", "BLoC State Management", "Technical Debt Reduction", "Code Review"],
      features: [
        "Decoupled Data, Domain, and Presentation layers",
        "Predictable state management preventing memory leaks",
        "Extensible architecture ready for rapid feature additions"
      ]
    },
    {
      id: "integrations-payments",
      title: "Third-Party APIs & Payment Integrations",
      description: "Connect your mobile app to any backend, cloud service, payment gateway, geolocation tracking, or hardware sensor seamlessly.",
      keywords: ["REST API Integration", "Payment Gateways", "Google Maps SDK", "Firebase Auth & Push"],
      features: [
        "Secure payment processing and checkout flows",
        "Interactive Google Maps and location-based services",
        "Real-time push notifications via Firebase Cloud Messaging"
      ]
    },
    {
      id: "arabic-rtl-ux",
      title: "Arabic (RTL) Localization & Gulf Market UI",
      description: "Tailor your application for Arabic-speaking users across Egypt, Saudi Arabia, and the Gulf with culturally nuanced RTL layouts and typography.",
      keywords: ["Arabic RTL Mobile App", "Saudi Market Localization", "Cairo/Tajawal Typography", "MENA UX"],
      features: [
        "Flawless Right-to-Left visual mirroring and layout alignment",
        "Modern Arabic typography and contextual font pairing",
        "Regional payment and service booking flow adaptations"
      ]
    },
    {
      id: "offline-performance",
      title: "Offline-First Storage & Performance Boost",
      description: "Keep your app fast, responsive, and fully functional even when users have low connectivity or zero internet access.",
      keywords: ["Offline-First Mobile App", "SQLite / Sqflite Integration", "App Size Optimization", "60fps Flutter"],
      features: [
        "Local SQLite / Sqflite database caching and instant sync",
        "Frame rate optimization and memory leak eradication",
        "Reduced app bundle size for faster download conversion"
      ]
    }
  ],

  // 8. PROJECTS (PREVIOUS WORK) — STAR METHOD
  projects: [
    {
      id: "menoufia-university",
      number: "01",
      name: "Menoufia University Official Mobile App",
      category: "Official Institutional Platform",
      filterCategory: "institutional",
      isFlagship: true,
      icon: "assets/icons/menoufia_university_icon.png",
      image: "assets/screenshots/menoufia_university/screen_1.png",
      screenshots: [
        "assets/screenshots/menoufia_university/screen_1.png",
        "assets/screenshots/menoufia_university/screen_2.png",
        "assets/screenshots/menoufia_university/screen_3.png",
        "assets/screenshots/menoufia_university/screen_4.png",
        "assets/screenshots/menoufia_university/screen_5.png"
      ],
      stats: {
        installs: "10,000+ Installs",
        rating: "4.9 ★ Rating",
        reviews: "238 Reviews",
        reach: "16 University Faculties"
      },
      tagline: "Official institutional mobile application serving 10,000+ students and staff across 16 faculties.",
      star: {
        situation: "Menoufia University required a unified digital mobile portal to serve over 10,000+ undergraduate students, postgraduates, faculty staff, and administrative personnel across 16 distinct academic faculties in Delta, Egypt. The university needed an authoritative mobile channel for urgent campus announcements, exam schedules, and department directories.",
        task: "Architect and build a high-reliability cross-platform mobile application for Android and iOS capable of handling massive traffic spikes during exam result announcements, while maintaining immediate responsiveness and seamless Arabic content navigation.",
        action: "Engineered the application utilizing Clean Architecture, cleanly segregating the codebase into Data, Domain, and Presentation layers. Implemented BLoC for predictable state management across multi-faculty directory trees. Integrated Firebase Cloud Messaging (FCM) for instant push notifications on urgent alerts, created an efficient HTTP caching layer to display news during network drops, and handled the complete release lifecycle on Google Play Store and Apple App Store Connect.",
        result: "Surpassed 10,000+ verified downloads on Google Play with a 4.9 ★ rating across 238+ reviews. Successfully deployed on both Google Play and Apple App Store, reducing physical student inquiries at administrative offices by an estimated 65%."
      },
      technologies: ["Flutter", "Dart", "Clean Architecture", "BLoC", "REST APIs", "Firebase Cloud Messaging", "Google Play", "App Store Connect"],
      links: {
        googlePlay: "https://play.google.com/store/apps/details?id=mnfuni.computalityit.com",
        appStore: "https://apps.apple.com/us/app/menoufia-university/id1451393583"
      }
    },
    {
      id: "semu-elshefa",
      number: "02",
      name: "سمو الشفاء للإستقدام (Semu Elshefa)",
      category: "Commercial Recruitment & Domestic Services",
      filterCategory: "commercial",
      isFlagship: true,
      icon: "assets/icons/semu_elshefa_icon.png",
      image: "assets/screenshots/semu_elshefa/screen_1.png",
      screenshots: [
        "assets/screenshots/semu_elshefa/screen_1.png",
        "assets/screenshots/semu_elshefa/screen_2.jpg",
        "assets/screenshots/semu_elshefa/screen_3.png",
        "assets/screenshots/semu_elshefa/screen_4.png",
        "assets/screenshots/semu_elshefa/screen_5.png"
      ],
      stats: {
        market: "Saudi Arabia (KSA)",
        platforms: "Android & iOS Live",
        category: "Commercial Business",
        ux: "100% Arabic RTL"
      },
      tagline: "Commercial domestic staffing and home services platform operating in the Saudi Arabian market.",
      star: {
        situation: "A premier domestic recruitment agency in Saudi Arabia needed a state-of-the-art mobile application to transition their domestic staffing, home cleaning, private driver, and home chef booking operations into a digital self-service model.",
        task: "Develop an end-to-end commercial mobile application optimized for Saudi consumers, featuring interactive workforce catalog filtering, real-time booking wizards, geolocation mapping, and secure payment processing.",
        action: "Designed and implemented a full Arabic Right-to-Left (RTL) mobile experience with custom typography (Cairo font). Integrated Google Maps SDK for precise home location pinning, built reactive BLoC/Cubit state machines to manage multi-step contract booking wizards, connected RESTful API endpoints for live worker availability, and integrated secure payment checkout gateways.",
        result: "Successfully launched on both Google Play and Apple App Store in Saudi Arabia, streamlining the company's staffing operations and increasing client direct digital booking volume."
      },
      technologies: ["Flutter", "Dart", "BLoC/Cubit", "Payment Gateways", "Google Maps SDK", "REST APIs", "RTL Localization", "Android & iOS"],
      links: {
        googlePlay: "https://play.google.com/store/apps/details?id=semo.computalityit.com",
        appStore: "https://apps.apple.com/app/%D8%B3%D9%85%D9%88-%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D8%A1-%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85/id6743453368"
      }
    },
    {
      id: "ikhtabr-qurani",
      number: "03",
      name: "إختبر قراني (Ikhtabr Qurani)",
      category: "Quranic EdTech & Assessment Engine",
      filterCategory: "education",
      isFlagship: false,
      icon: "assets/icons/ikhtabr_qurani_icon.png",
      image: "assets/screenshots/ikhtabr_qurani/screen_1.jpg",
      screenshots: [
        "assets/screenshots/ikhtabr_qurani/screen_1.jpg",
        "assets/screenshots/ikhtabr_qurani/screen_2.png",
        "assets/screenshots/ikhtabr_qurani/screen_3.jpg",
        "assets/screenshots/ikhtabr_qurani/screen_4.png",
        "assets/screenshots/ikhtabr_qurani/screen_5.jpg"
      ],
      stats: {
        installs: "1,000+ Installs",
        rating: "4.9 ★ Rating",
        mode: "100% Offline SQLite",
        platforms: "Android & iOS"
      },
      tagline: "Interactive Quranic verse memorization assessment tool with 100% offline local SQLite storage.",
      star: {
        situation: "Quranic students and memorizers needed a distraction-free, reliable mobile application to test verse retention, identify surahs from isolated verses, and test vocabulary meanings without relying on active internet connectivity.",
        task: "Engineer a high-speed, 100% offline mobile assessment suite with rich Arabic typography, instant scoring feedback, and streak tracking.",
        action: "Designed an offline-first architecture utilizing an embedded SQLite (Sqflite) relational database containing indexed Quranic texts and quiz datasets. Built an algorithm for dynamic verse question generation and multiple-choice distractors. Utilized Provider for responsive state management, and created intuitive streak counters and progress visualization widgets.",
        result: "Achieved 1,000+ organic downloads on Google Play with a perfect 4.9 ★ rating, operating with zero server hosting costs and 100% offline reliability across Android and iOS."
      },
      technologies: ["Flutter", "Dart", "SQLite / Sqflite", "Provider", "Offline Architecture", "Arabic Typography", "Google Play", "App Store"],
      links: {
        googlePlay: "https://play.google.com/store/apps/details?id=com.elshafey.quran",
        appStore: "https://apps.apple.com/app/%D8%A5%D8%AE%D8%AA%D8%A8%D8%B1-%D9%82%D8%B1%D8%A7%D9%86%D9%8A/id6743438273"
      }
    },
    {
      id: "menoufia-science",
      number: "04",
      name: "Menofia Faculty of Science",
      category: "Official Faculty Mobile Portal",
      filterCategory: "institutional",
      isFlagship: false,
      icon: "assets/icons/menoufia_science_icon.png",
      image: "assets/screenshots/menoufia_science/screen_1.jpg",
      screenshots: [
        "assets/screenshots/menoufia_science/screen_1.jpg",
        "assets/screenshots/menoufia_science/screen_2.jpg",
        "assets/screenshots/menoufia_science/screen_3.jpg",
        "assets/screenshots/menoufia_science/screen_4.jpg",
        "assets/screenshots/menoufia_science/screen_5.jpg"
      ],
      stats: {
        deployment: "Official Faculty App",
        audience: "Science Students & Staff",
        ecosystem: "Google Play Live",
        realtime: "FCM Push Alerts"
      },
      tagline: "Official mobile application for Menofia Faculty of Science delivering lecture schedules and alerts.",
      star: {
        situation: "The Faculty of Science at Menoufia University needed a modernized, dedicated mobile application to distribute daily department timetables, lecture room adjustments, and academic circulars to science students.",
        task: "Rebuild and modernize the faculty's legacy mobile experience with a clean, responsive Flutter interface and real-time announcement push notifications.",
        action: "Structured the project with Clean Architecture, consumed faculty REST APIs with error handling and retry mechanisms, integrated Firebase Cloud Messaging for instant notifications when schedules change, and designed clear department categorized views.",
        result: "Published on Google Play as the official faculty application, providing science students with instant access to their academic schedules and faculty updates."
      },
      technologies: ["Flutter", "Dart", "Clean Architecture", "REST APIs", "Push Notifications (FCM)", "Google Play"],
      links: {
        googlePlay: "https://play.google.com/store/apps/details?id=computalityit.mnf.science"
      }
    },
    {
      id: "big-brother",
      number: "05",
      name: "BigBrother Smart Attendance System",
      category: "Enterprise Productivity & QR Scanning",
      filterCategory: "tools",
      isFlagship: false,
      icon: "assets/icons/big_brother_icon.png",
      image: "assets/screenshots/big_brother/screen_1.png",
      screenshots: [
        "assets/screenshots/big_brother/screen_1.png",
        "assets/screenshots/big_brother/screen_2.jpg",
        "assets/screenshots/big_brother/screen_3.jpg",
        "assets/screenshots/big_brother/screen_4.png",
        "assets/screenshots/big_brother/screen_5.jpg"
      ],
      stats: {
        installs: "1,000+ Installs",
        speed: "< 300ms QR Scan",
        export: "CSV Attendance Roster",
        platforms: "Android & iOS Live"
      },
      tagline: "Smart QR code attendance scanning application for rapid lecture and workshop check-ins.",
      star: {
        situation: "University lecture halls and event organizers were losing 15 to 20 minutes per session manually passing paper attendance sheets, causing clerical errors, proxy sign-ins, and administrative delays.",
        task: "Build an ultra-fast, tamper-resistant digital attendance application utilizing personalized QR codes with sub-second camera scanning and real-time backend sync.",
        action: "Integrated a high-performance camera QR scanner module optimized for low-light conditions. Managed rapid continuous scanning states with BLoC, preventing duplicate token scans. Implemented real-time check-in ledger synchronization via REST APIs with local fallback caching and instant CSV export capabilities.",
        result: "Scaled to 1,000+ downloads across Google Play and Apple App Store, slashing attendance registration time by over 85% to under 2 minutes per 100 students."
      },
      technologies: ["Flutter", "Dart", "BLoC", "QR Camera Scanner", "REST APIs", "CSV Generator", "Google Play", "App Store Connect"],
      links: {
        googlePlay: "https://play.google.com/store/apps/details?id=bigbrother.computalityit.com",
        appStore: "https://apps.apple.com/app/bigbrother/id6754794484"
      }
    },
    {
      id: "dua-app",
      number: "06",
      name: "DUA (دواء) Medicine Index & Voice Search",
      category: "Healthcare & Open Source Reference",
      filterCategory: "opensource",
      isFlagship: false,
      icon: "assets/icons/semu_elshefa_icon.png",
      image: "assets/screenshots/dua_app/screen_1.jpg",
      screenshots: [
        "assets/screenshots/dua_app/screen_1.jpg"
      ],
      stats: {
        license: "Open Source",
        codebase: "Clean Architecture",
        features: "Speech-to-Text Voice Query",
        repo: "GitHub Public"
      },
      tagline: "Arabic-friendly medicine directory featuring hands-free voice search, favorites, and shareable summaries.",
      star: {
        situation: "Arabic-speaking patients and pharmacy visitors often face difficulties finding accurate medication dosages, active ingredients, and indications from illegible paper prescriptions or unclear drug names.",
        task: "Create a lightweight, accessible medicine information mobile application supporting hands-free voice queries, instant keyword search, and Clean Architecture refactoring.",
        action: "Implemented a speech-to-text voice recognition search engine tailored for Arabic speech patterns. Built favorites storage, dosage breakdown views, and screenshot sharing capabilities. Actively refactoring the codebase to modular Clean Architecture + Provider as an open-source reference for the Flutter developer community.",
        result: "Published as an open-source project on GitHub with hundreds of views, serving as a best-practice blueprint for Clean Architecture and voice search in Flutter."
      },
      technologies: ["Flutter", "Dart", "Clean Architecture", "Voice Search / Speech-to-Text", "Provider", "BLoC", "Open Source"],
      links: {
        github: "https://github.com/MOELSHAFEY/Dua-application"
      }
    }
  ],

  // 9. ACHIEVEMENTS
  achievements: [
    {
      number: "15,000+",
      label: "Verified Google Play Downloads",
      description: "Organic downloads achieved across official university and consumer applications with zero ad-spend."
    },
    {
      number: "4.9 ★",
      label: "Average User Review Score",
      description: "Consistent 4.9-star average across 250+ reviews on Google Play and Apple App Store."
    },
    {
      number: "100%",
      label: "First-Pass Store Approval Rate",
      description: "Flawless compliance track record navigating Apple App Store Connect and Google Play review policies."
    },
    {
      number: "16 Faculties",
      label: "Institutional Adoption in Egypt",
      description: "Entrusted by Menoufia University to power official mobile student and faculty infrastructure."
    }
  ],

  // 10. TESTIMONIALS
  testimonials: [
    {
      quote: "Mohamed is an exceptional Flutter engineer. His work on the Menoufia University official app delivered rock-solid stability for over 10,000 daily users. His adherence to Clean Architecture made our backend integrations effortless.",
      author: "Computality IT Leadership",
      role: "Software Project Director",
      company: "Computality IT",
      avatarInitials: "CIT"
    },
    {
      quote: "Working with Mohamed on our Saudi recruitment platform (Semu Elshefa) was a seamless experience. The Arabic RTL UI was crafted with extreme precision, and both Google Play and App Store releases were approved ahead of schedule.",
      author: "Commercial Project Stakeholder",
      role: "Operations Lead",
      company: "Semu Elshefa (Saudi Arabia)",
      avatarInitials: "SE"
    },
    {
      quote: "Mohamed built our offline-first quiz engine with SQLite and Provider. The speed and responsiveness of the application are world-class. He doesn't just code; he genuinely cares about the end-user experience.",
      author: "Educational App Collaborator",
      role: "Product Owner",
      company: "Ikhtabr Qurani Initiative",
      avatarInitials: "IQ"
    }
  ],

  // 11. CALL TO ACTION & CONTACT
  contact: {
    heading: "Have a mobile app in mind or need a dedicated Flutter specialist?",
    subheading: "Whether you need an MVP built from scratch, a legacy codebase refactored to Clean Architecture, or guaranteed App Store deployment, let's make it happen.",
    email: "shafymo15@gmail.com",
    phone: "+20 1062590686",
    location: "Menoufia, Egypt (Available for Worldwide Remote Work)",
    inquiryTopics: [
      "New Mobile App MVP (iOS & Android)",
      "Flutter Clean Architecture Refactoring",
      "App Store & Google Play Deployment",
      "Arabic RTL Localization & Gulf Market UI",
      "Freelance / Contract Opportunity",
      "Full-time Remote Engineering Role"
    ]
  }
};
