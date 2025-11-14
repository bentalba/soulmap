import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'FR' | 'AR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');

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
    'about.journey.title': 'My Journey',
    'about.journey.text': "My unique background in maritime navigation has taught me to read the stars not just for direction, but for deeper meaning. Every chart I read is a voyage of discovery, helping souls navigate their cosmic journey with clarity and purpose.",
    'about.approach.title': 'My Approach',
    'about.approach.text': 'I believe astrology is a powerful tool for self-understanding and growth. My readings combine technical precision with intuitive insight, offering you a clear map of your cosmic potential while honoring the mystery of your unique path.',
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
    'about.journey.title': 'Mon Parcours',
    'about.journey.text': "Mon parcours unique en navigation maritime m'a appris à lire les étoiles non seulement pour la direction, mais pour une signification plus profonde. Chaque thème que je lis est un voyage de découverte, aidant les âmes à naviguer leur voyage cosmique avec clarté et but.",
    'about.approach.title': 'Mon Approche',
    'about.approach.text': "Je crois que l'astrologie est un outil puissant pour la compréhension de soi et la croissance. Mes lectures combinent précision technique et perspicacité intuitive, vous offrant une carte claire de votre potentiel cosmique tout en honorant le mystère de votre chemin unique.",
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
    'nav.book': 'حجز قراءة',
    
    // Hero
    'hero.badge': 'موثوق به من قبل 15,000+ روح حول العالم',
    'hero.title.1': 'اكتشف',
    'hero.title.2': 'الكون',
    'hero.title.3': 'بداخلك',
    'hero.subtitle': 'اكتشف مخططك الكوني من خلال قراءات فلكية مخصصة من يسرى. يحتوي برجك على أسرار رحلة روحك.',
    'hero.cta.primary': 'ابدأ قراءتك السماوية',
    'hero.cta.secondary': 'استكشف الخدمات',
    'hero.metrics.readings': 'قراءات مكتملة',
    'hero.metrics.satisfaction': 'معدل الرضا',
    'hero.metrics.community': 'أعضاء المجتمع',
    
    // Services Section
    'services.badge': 'خدماتنا السماوية',
    'services.title': 'اختر رحلتك الكونية',
    'services.subtitle': 'يتم إعداد كل قراءة بعناية، تجمع بين الحكمة الفلكية القديمة والبصيرة الحديثة.',
    
    // Service Cards
    'service.natal.title': 'قراءة الخارطة الفلكية',
    'service.natal.desc': 'افتح أسرار خارطة ميلادك',
    'service.natal.feature1': 'تحليل كوكبي كامل',
    'service.natal.feature2': 'رؤى مسار الحياة والهدف',
    'service.natal.feature3': 'تحليل عميق للشخصية',
    'service.natal.feature4': 'إرشادات المهنة والعلاقات',
    'service.natal.badge': 'الأكثر شعبية',
    'service.natal.cta': 'احصل على قراءتك',
    
    'service.synastry.title': 'قراءة التوافق',
    'service.synastry.desc': 'استكشف التوافق الكوني بين روحين',
    'service.synastry.feature1': 'تحليل ديناميكيات العلاقة',
    'service.synastry.feature2': 'نقاط القوة والتحديات',
    'service.synastry.feature3': 'أنماط التواصل',
    'service.synastry.feature4': 'رؤى التوافق طويل الأمد',
    'service.synastry.cta': 'استكشف التوافق',
    
    'service.composite.title': 'قراءة المخطط المركب',
    'service.composite.desc': 'افهم الطاقة الفريدة لعلاقتك',
    'service.composite.feature1': 'هدف ومصير العلاقة',
    'service.composite.feature2': 'الأهداف والتحديات المشتركة',
    'service.composite.feature3': 'تحليل الطاقة الجماعية',
    'service.composite.feature4': 'تقييم إمكانات الشراكة',
    'service.composite.cta': 'اكتشف رابطتك',
    
    'service.discount': 'خصم - عرض محدود',
    
    // About Page
    'about.badge': 'مرشدتك السماوية',
    'about.title': 'تعرف على يسرى',
    'about.subtitle': 'ملاحة النجوم والأرواح',
    'about.intro': 'مع درجة البكالوريوس في الملاحة البحرية وأتابع حاليًا درجة الماجستير في علم التنجيم، أربط الفن القديم للملاحة السماوية مع الممارسة الفلكية الحديثة.',
    'about.journey.title': 'رحلتي',
    'about.journey.text': 'علمتني خلفيتي الفريدة في الملاحة البحرية قراءة النجوم ليس فقط للاتجاه، ولكن لمعنى أعمق. كل خارطة أقرأها هي رحلة اكتشاف، تساعد الأرواح على التنقل في رحلتهم الكونية بوضوح وهدف.',
    'about.approach.title': 'نهجي',
    'about.approach.text': 'أؤمن أن علم التنجيم هو أداة قوية لفهم الذات والنمو. تجمع قراءاتي بين الدقة التقنية والبصيرة الحدسية، مما يوفر لك خريطة واضحة لإمكاناتك الكونية مع احترام غموض مسارك الفريد.',
    'about.stats.readings': 'قراءات مكتملة',
    'about.stats.satisfaction': 'معدل الرضا',
    'about.stats.experience': 'سنوات الخبرة',
    'about.cta': 'احجز قراءتك',
    
    // Testimonials
    'testimonials.badge': 'شهادات العملاء',
    'testimonials.title': 'ما يقوله مجتمعنا',
    'testimonials.subtitle': 'تجارب حقيقية من أرواح اكتشفت مخططها الكوني',
    'testimonials.rating': 'بناءً على 2,400+ قراءة',
    
    // Footer
    'footer.tagline': 'إنارة الأرواح من خلال حكمة النجوم منذ 2022.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.available': 'متاح بـ:',
    'footer.copyright': '2022-2025 Soulmapy. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.refund': 'سياسة الاسترداد',
  },
};
