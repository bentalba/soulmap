import { ServiceCard } from './ServiceCard';
import { Star, Heart, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Star,
      title: t('service.natal.title'),
      description: t('service.natal.desc'),
      price: '9',
      originalPrice: '29',
      delivery: '3-5 days',
      features: [
        t('service.natal.feature1'),
        t('service.natal.feature2'),
        t('service.natal.feature3'),
        t('service.natal.feature4'),
      ],
      isPopular: true,
      popularText: t('service.natal.badge'),
      ctaText: t('service.natal.cta'),
    },
    {
      icon: Heart,
      title: t('service.synastry.title'),
      description: t('service.synastry.desc'),
      price: '15',
      originalPrice: '49',
      delivery: '5-7 days',
      features: [
        t('service.synastry.feature1'),
        t('service.synastry.feature2'),
        t('service.synastry.feature3'),
        t('service.synastry.feature4'),
      ],
      ctaText: t('service.synastry.cta'),
    },
    {
      icon: TrendingUp,
      title: t('service.composite.title'),
      description: t('service.composite.desc'),
      price: '20',
      originalPrice: '69',
      delivery: '7-10 days',
      features: [
        t('service.composite.feature1'),
        t('service.composite.feature2'),
        t('service.composite.feature3'),
        t('service.composite.feature4'),
      ],
      ctaText: t('service.composite.cta'),
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">{t('services.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
