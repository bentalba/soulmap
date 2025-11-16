import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'EN' | 'FR' | 'AR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');

  useEffect(() => {
    // Set RTL direction for Arabic
    if (language === 'AR') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = language === 'FR' ? 'fr' : 'en';
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['EN'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Yusra',
    'nav.book': 'Book Reading',
    
    // Hero
    'hero.badge': 'Trusted by 15,000+ souls worldwide',
    'hero.title.1': 'Unveil the',
    'hero.title.2': 'Universe',
    'hero.title.3': 'Within You',
    'hero.subtitle': "Discover your cosmic blueprint through personalized astrology readings by Yusra. Your birth chart holds the secrets to your soul's journey.",
    'hero.cta.primary': 'Begin Your Celestial Reading',
    'hero.cta.secondary': 'Explore Services',
    'hero.metrics.readings': 'Readings Completed',
    'hero.metrics.satisfaction': 'Satisfaction Rate',
    'hero.metrics.community': 'Community Members',
    
    // Services Section
    'services.badge': 'Our Celestial Services',
    'services.title': 'Choose Your Cosmic Journey',
    'services.subtitle': 'Each reading is crafted with care, combining ancient astrological wisdom with modern insight.',
    
    // Service Cards
    'service.natal.title': 'Natal Chart Reading',
    'service.natal.desc': 'Unlock the secrets of your birth chart',
    'service.natal.feature1': 'Complete planetary analysis',
    'service.natal.feature2': 'Life path & purpose insights',
    'service.natal.feature3': 'Personality deep dive',
    'service.natal.feature4': 'Career & relationship guidance',
    'service.natal.badge': 'MOST POPULAR',
    'service.natal.cta': 'Get Your Reading',
    
    'service.synastry.title': 'Synastry Reading',
    'service.synastry.desc': 'Explore cosmic compatibility between two souls',
    'service.synastry.feature1': 'Relationship dynamics analysis',
    'service.synastry.feature2': 'Strengths & challenges',
    'service.synastry.feature3': 'Communication patterns',
    'service.synastry.feature4': 'Long-term compatibility insights',
    'service.synastry.cta': 'Explore Compatibility',
    
    'service.composite.title': 'Composite Chart Reading',
    'service.composite.desc': 'Understand the unique energy of your relationship',
    'service.composite.feature1': 'Relationship purpose & destiny',
    'service.composite.feature2': 'Shared goals & challenges',
    'service.composite.feature3': 'Collective energy analysis',
    'service.composite.feature4': 'Partnership potential assessment',
    'service.composite.cta': 'Discover Your Bond',
    
    'service.discount': 'OFF - Limited Time',
    
    // About Page
    'about.badge': 'Your Celestial Guide',
    'about.title': 'Meet Yusra',
    'about.subtitle': 'Navigator of Stars & Souls',
    'about.intro': "With a Bachelor's degree in Maritime Navigation and currently pursuing a Master's in Astrology, I bridge the ancient art of celestial navigation with modern astrological practice.",
    'about.credential1.title': 'Maritime Navigation',
    'about.credential1.subtitle': "Bachelor's Degree",
    'about.credential2.title': 'Astrology Studies',
    'about.credential2.subtitle': "Master's Candidate",
    'about.credential3.subtitle': 'Souls Guided',
    'about.credential4.title': '3 Languages',
    'about.credential4.subtitle': 'EN | AR | FR',
    'about.badge.title': 'Certified Astrologer',
    'about.badge.subtitle': 'Professional Birth Chart Reader',
    'about.badge.since': 'Since 2020',
    'about.journey.title': 'My Journey',
    'about.journey.text': "My unique background in maritime navigation has taught me to read the stars not just for direction, but for deeper meaning. Every chart I read is a voyage of discovery, helping souls navigate their cosmic journey with clarity and purpose.",
    'about.astrologer.title': 'The Astrologer',
    'about.astrologer.text': "Currently pursuing my Master's in Astrology and Planetary Knowledge, I dive deep into the ancient wisdom of birth charts, planetary transits, and cosmic cycles. This advanced study allows me to provide readings that are both traditionally grounded and deeply insightful.",
    'about.astrologer.quote': 'Every chart tells a story, every planet reveals a truth.',
    'about.philosophy.title': 'My Philosophy',
    'about.approach.title': 'My Approach',
    'about.approach.text': 'I believe astrology is a tool for self-discovery and empowerment. By understanding the cosmic influences present at your birth, you gain clarity about your strengths, challenges, and life purpose. My readings combine scientific precision with intuitive wisdom, offering guidance that is both practical and transformative.',
    'about.promise.title': 'My Cosmic Promise',
    'about.value1.title': 'Authenticity',
    'about.value1.desc': 'Every reading is personally crafted with deep analysis, never automated or generic.',
    'about.value2.title': 'Compassion',
    'about.value2.desc': 'Your story matters. I approach each chart with empathy, care, and respect.',
    'about.value3.title': 'Precision',
    'about.value3.desc': 'Combining maritime precision with astrological wisdom for accurate insights.',
    'about.value4.title': 'Accessibility',
    'about.value4.desc': 'Available in English, Arabic, and French for souls around the world.',
    'about.community.stat1': 'TikTok Followers',
    'about.community.stat3': 'Years Experience',
    'about.community.stat4': 'Languages',
    'about.stats.readings': 'Readings Completed',
    'about.stats.satisfaction': 'Satisfaction Rate',
    'about.stats.experience': 'Years Experience',
    'about.cta': 'Book Your Reading',
    
    // Testimonials
    'testimonials.badge': 'Client Testimonials',
    'testimonials.title': 'What Our Community Says',
    'testimonials.subtitle': 'Real experiences from souls who have discovered their cosmic blueprint',
    'testimonials.rating': 'Based on 2,400+ readings',
    
    // Footer
    'footer.tagline': 'Illuminating souls through the wisdom of the stars since 2022.',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.available': 'Available in:',
    'footer.copyright': '2022-2025 Soulmapy. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.refund': 'Refund Policy',
  },
  FR: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos de Yusra',
    'nav.book': 'Réserver',
    
    // Hero
    'hero.badge': 'La confiance de 15 000+ âmes dans le monde',
    'hero.title.1': 'Dévoilez l\'',
    'hero.title.2': 'Univers',
    'hero.title.3': 'En Vous',
    'hero.subtitle': "Découvrez votre plan cosmique à travers des lectures astrologiques personnalisées par Yusra. Votre thème natal détient les secrets du voyage de votre âme.",
    'hero.cta.primary': 'Commencez Votre Lecture Céleste',
    'hero.cta.secondary': 'Découvrir les Services',
    'hero.metrics.readings': 'Lectures Effectuées',
    'hero.metrics.satisfaction': 'Taux de Satisfaction',
    'hero.metrics.community': 'Membres de la Communauté',
    
    // Services Section
    'services.badge': 'Nos Services Célestes',
    'services.title': 'Choisissez Votre Voyage Cosmique',
    'services.subtitle': 'Chaque lecture est élaborée avec soin, combinant la sagesse astrologique ancienne avec une perspective moderne.',
    
    // Service Cards
    'service.natal.title': 'Lecture de Thème Natal',
    'service.natal.desc': 'Déverrouillez les secrets de votre thème de naissance',
    'service.natal.feature1': 'Analyse planétaire complète',
    'service.natal.feature2': 'Aperçus du chemin de vie et du but',
    'service.natal.feature3': 'Plongée profonde dans la personnalité',
    'service.natal.feature4': 'Guidance carrière et relations',
    'service.natal.badge': 'LE PLUS POPULAIRE',
    'service.natal.cta': 'Obtenez Votre Lecture',
    
    'service.synastry.title': 'Lecture de Synastrie',
    'service.synastry.desc': 'Explorez la compatibilité cosmique entre deux âmes',
    'service.synastry.feature1': 'Analyse des dynamiques relationnelles',
    'service.synastry.feature2': 'Forces et défis',
    'service.synastry.feature3': 'Schémas de communication',
    'service.synastry.feature4': 'Aperçus de compatibilité à long terme',
    'service.synastry.cta': 'Explorer la Compatibilité',
    
    'service.composite.title': 'Lecture de Thème Composite',
    'service.composite.desc': 'Comprenez l\'énergie unique de votre relation',
    'service.composite.feature1': 'But et destin de la relation',
    'service.composite.feature2': 'Objectifs et défis partagés',
    'service.composite.feature3': 'Analyse de l\'énergie collective',
    'service.composite.feature4': 'Évaluation du potentiel de partenariat',
    'service.composite.cta': 'Découvrez Votre Lien',
    
    'service.discount': 'DE RÉDUCTION - Offre Limitée',
    
    // About Page
    'about.badge': 'Votre Guide Céleste',
    'about.title': 'Rencontrez Yusra',
    'about.subtitle': 'Navigatrice des Étoiles et des Âmes',
    'about.intro': "Avec une licence en Navigation Maritime et poursuivant actuellement un Master en Astrologie, je fais le pont entre l'art ancien de la navigation céleste et la pratique astrologique moderne.",
    'about.credential1.title': 'Navigation Maritime',
    'about.credential1.subtitle': 'Licence',
    'about.credential2.title': 'Études en Astrologie',
    'about.credential2.subtitle': 'Candidate au Master',
    'about.credential3.subtitle': 'Âmes Guidées',
    'about.credential4.title': '3 Langues',
    'about.credential4.subtitle': 'FR | EN | AR',
    'about.badge.title': 'Astrologue Certifiée',
    'about.badge.subtitle': 'Lectrice Professionnelle de Thèmes Natals',
    'about.badge.since': 'Depuis 2020',
    'about.journey.title': 'Mon Parcours',
    'about.journey.text': "Mon parcours unique en navigation maritime m'a appris à lire les étoiles non seulement pour la direction, mais pour une signification plus profonde. Chaque thème que je lis est un voyage de découverte, aidant les âmes à naviguer leur voyage cosmique avec clarté et but.",
    'about.astrologer.title': "L'Astrologue",
    'about.astrologer.text': "Poursuivant actuellement mon Master en Astrologie et Connaissance Planétaire, je plonge profondément dans la sagesse ancienne des thèmes natals, des transits planétaires et des cycles cosmiques. Cette étude avancée me permet de fournir des lectures à la fois traditionnellement ancrées et profondément perspicaces.",
    'about.astrologer.quote': 'Chaque thème raconte une histoire, chaque planète révèle une vérité.',
    'about.philosophy.title': 'Ma Philosophie',
    'about.approach.title': 'Mon Approche',
    'about.approach.text': "Je crois que l'astrologie est un outil de découverte de soi et d'autonomisation. En comprenant les influences cosmiques présentes à votre naissance, vous obtenez une clarté sur vos forces, défis et but de vie. Mes lectures combinent précision scientifique et sagesse intuitive, offrant des conseils à la fois pratiques et transformateurs.",
    'about.promise.title': 'Ma Promesse Cosmique',
    'about.value1.title': 'Authenticité',
    'about.value1.desc': 'Chaque lecture est personnellement élaborée avec une analyse approfondie, jamais automatisée ou générique.',
    'about.value2.title': 'Compassion',
    'about.value2.desc': "Votre histoire compte. J'aborde chaque thème avec empathie, soin et respect.",
    'about.value3.title': 'Précision',
    'about.value3.desc': 'Combinant précision maritime et sagesse astrologique pour des aperçus précis.',
    'about.value4.title': 'Accessibilité',
    'about.value4.desc': 'Disponible en français, anglais et arabe pour les âmes du monde entier.',
    'about.community.stat1': 'Abonnés TikTok',
    'about.community.stat3': "Années d'Expérience",
    'about.community.stat4': 'Langues',
    'about.stats.readings': 'Lectures Effectuées',
    'about.stats.satisfaction': 'Taux de Satisfaction',
    'about.stats.experience': 'Années d\'Expérience',
    'about.cta': 'Réservez Votre Lecture',
    
    // Testimonials
    'testimonials.badge': 'Témoignages de Clients',
    'testimonials.title': 'Ce Que Dit Notre Communauté',
    'testimonials.subtitle': 'Expériences réelles d\'âmes qui ont découvert leur plan cosmique',
    'testimonials.rating': 'Basé sur 2 400+ lectures',
    
    // Footer
    'footer.tagline': 'Illuminer les âmes grâce à la sagesse des étoiles depuis 2022.',
    'footer.quicklinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.available': 'Disponible en :',
    'footer.copyright': '2022-2025 Soulmapy. Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions Générales',
    'footer.refund': 'Politique de Remboursement',
  },
  AR: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.about': 'عن يسرى',
    'nav.book': 'احجز قراءتك',
    
    // Hero
    'hero.badge': 'يثق بها أكثر من ١٥ ألف روح حول العالم',
    'hero.title.1': 'اكتشفوا',
    'hero.title.2': 'الكون',
    'hero.title.3': 'الذي بداخلكم',
    'hero.subtitle': 'اكتشفوا البصمة الكونية الخاصة بكم من خلال قراءة الأبراج الشخصية مع يسرى. خريطة ميلادكم تحمل أسرار رحلة روحكم.',
    'hero.cta.primary': 'ابدؤوا رحلتكم السماوية',
    'hero.cta.secondary': 'اكتشفوا خدماتنا',
    'hero.metrics.readings': 'جلسات اكتملت',
    'hero.metrics.satisfaction': 'رضا العملاء',
    'hero.metrics.community': 'أعضاء المجتمع',
    
    // Services Section
    'services.badge': 'رحلاتنا السماوية',
    'services.title': 'اختر رحلتك بين الكواكب',
    'services.subtitle': 'كل قراءة نقدمها بمزيج فريد، بين حكمة الأقدمين و بصيرة العصر الحديث.',
    
    // Service Cards
    'service.natal.title': 'قراءة خريطة الميلاد',
    'service.natal.desc': 'لتكتشفوا أسرار خريطة ميلادكم نهائياً',
    'service.natal.feature1': 'تحليل كامل للكواكب',
    'service.natal.feature2': 'إيضاح للمسار والغاية',
    'service.natal.feature3': 'استبصارٌ للشخصية والأعماق',
    'service.natal.feature4': 'توجيهٌ للمهنة والعلاقات',
    'service.natal.badge': 'الاختيار الأمثل',
    'service.natal.cta': 'احصل على قراءتك',
    
    'service.synastry.title': 'قراءة توافق الأرواح',
    'service.synastry.desc': 'لاكتشاف التوافق الكوني بين روحين',
    'service.synastry.feature1': 'تحليل ديناميكيات العلاقة',
    'service.synastry.feature2': 'نقاط القوة والتحديات',
    'service.synastry.feature3': 'أنماط التواصل بينكما',
    'service.synastry.feature4': 'استبصارٌ للتوافق على المدى',
    'service.synastry.cta': 'اكتشفوا توافقكم',
    
    'service.composite.title': 'قراءة الخريطة المركبة',
    'service.composite.desc': 'لفهم طاقة العلاقة الفريدة بينكم',
    'service.composite.feature1': 'تحديد غاية العلاقة ومصيرها',
    'service.composite.feature2': 'أهدافكم المشتركة والتحديات',
    'service.composite.feature3': 'تحليل للطاقة الجماعية',
    'service.composite.feature4': 'تقييم لإمكانيات الشراكة',
    'service.composite.cta': 'اكتشفوا رابطكم',
    
    'service.discount': 'خصم - لفترة محدودة',
    
    // About Page
    'about.badge': 'مرشدتكم السماوية',
    'about.title': 'تعرفوا على يسرى',
    'about.subtitle': 'ربّانة النجوم ومرشدة الأرواح',
    'about.intro': 'بشهادة البكالوريوس في الملاحة البحرية، وإكمالي للماجستير في علم التنجيم، أجمع بين فنون القيادة السماوية القديمة وممارسة التنجيم في العصر الحديث.',
    'about.credential1.title': 'الملاحة البحرية',
    'about.credential1.subtitle': 'شهادة البكالوريوس',
    'about.credential2.title': 'علم التنجيم',
    'about.credential2.subtitle': 'طالبة ماجستير',
    'about.credential3.subtitle': 'روحاً اهتدت',
    'about.credential4.title': '٣ لغات',
    'about.credential4.subtitle': 'إنكليزي | عربي | فرنسي',
    'about.badge.title': 'منجمة معتمدة',
    'about.badge.subtitle': 'خبيرة قراءة خريطة الميلاد',
    'about.badge.since': 'منذ عام ٢٠٢٠',
    'about.journey.title': 'رحلتي',
    'about.journey.text': 'خلفيتي الفريدة في الملاحة البحرية علمتني كيف أقرأ النجوم، ليس للتوجيه فحسب، بل لفهم المعاني الأعمق. فكل خريطة أقرؤها هي رحلة اكتشاف، أساعد فيها الأرواح على الإبحاق في رحلتها الكونية بوضوح وهدف.',
    'about.astrologer.title': 'المنجمة',
    'about.astrologer.text': 'أنا الآن أتابع دراستي للماجستير في علم التنجيم والمعرفة الكوكبية، لأغوص في أعماق حكمة خرائط الميلاد، والتنقلات الكوكبية، والدورات الكونية. هذه الدراسة المتقدمة تمكنني من تقديم قراءات ترتكز على الأصول التقليدية وتتمتع ببصيرة عميقة.',
    'about.astrologer.quote': 'كل خريطة تحكي قصة، وكل كوكب يكشف حقيقة.',
    'about.philosophy.title': 'فلسفتي',
    'about.philosophy.text': 'أؤمن بأن التنجيم هو أداة للاكتشاف الذاتي والتمكين. فبفهم التأثيرات الكونية الموجودة عند ميلادك، تكتسب وضوحاً حول نقاط قوتك، وتحدياتك، وغاية حياتك. تجمع قراءاتي بين الدقة العلمية والحكمة البديهية، لتقدم إرشادات عملية وتحويلية.',
    'about.approach.title': 'منهجي',
    'about.approach.text': 'أؤمن بأن التنجيم هو أداة للاكتشاف الذاتي والتمكين. فبفهم التأثيرات الكونية الموجودة عند ميلادك، تكتسب وضوحاً حول نقاط قوتك، وتحدياتك، وغاية حياتك. تجمع قراءاتي بين الدقة العلمية والحكمة البديهية، لتقدم إرشادات عملية وتحويلية.',
    'about.promise.title': 'عهدي الكوني',
    'about.value1.title': 'الأصالة',
    'about.value1.desc': 'كل قراءة نعدّها بتحليل عميق، بعيدة عن النمطية والآلية.',
    'about.value2.title': 'التعاطف',
    'about.value2.desc': 'لقصتك أهمية. أتعامل مع كل خريطة بتعاطف، ورعاية، واحترام.',
    'about.value3.title': 'الدقة',
    'about.value3.desc': 'بمزج دقة الملاحة البحرية مع حكمة التنجيم، نضمن لكم رؤى دقيقة.',
    'about.value4.title': 'السهولة',
    'about.value4.desc': 'خدماتنا متاحة بالإنكليزية، والعربية، والفرنسية، لكل الأرواح في العالم.',
    'about.community.stat1': 'متابع على تيك توك',
    'about.community.stat3': 'سنوات خبرة',
    'about.community.stat4': 'لغات',
    'about.stats.readings': 'جلسة اكتملت',
    'about.stats.satisfaction': 'رضا العملاء',
    'about.stats.experience': 'سنوات خبرة',
    'about.cta': 'احجز قراءتك',
    
    // Testimonials
    'testimonials.badge': 'كلمات ثقة',
    'testimonials.title': 'ما يقوله مجتمعنا',
    'testimonials.subtitle': 'تجارب حقيقية من أرواح اكتشفت بصمتها الكونية',
    'testimonials.rating': 'بناءً على أكثر من ٢٤٠٠ قراءة',
    
    // Footer
    'footer.tagline': 'ننير دروب الأرواح بحكمة النجوم منذ ٢٠٢٢.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.available': 'متاح بـ',
    'footer.copyright': '٢٠٢٢-٢٠٢٥ خريطة الروح. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.refund': 'سياسة الاسترجاع',
  },
};
