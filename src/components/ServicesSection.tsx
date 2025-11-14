import { ServiceCard } from './ServiceCard';
import { Star, Heart, TrendingUp } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Star,
      title: 'Natal Chart Reading',
      description: 'Your complete cosmic blueprint revealing your sun, moon, and rising signs with deep insights into your personality and life path.',
      price: '9',
      delivery: '3-5 days',
      features: [
        'Complete birth chart analysis',
        'Sun, Moon & Rising sign interpretation',
        'Planetary positions explained',
        'Life purpose insights',
      ],
      isPopular: true,
    },
    {
      icon: Heart,
      title: 'Relationship Compatibility',
      description: 'Discover the cosmic connection between you and your partner through synastry chart analysis.',
      price: '15',
      delivery: '5-7 days',
      features: [
        'Synastry chart comparison',
        'Compatibility score',
        'Relationship strengths & challenges',
        'Growth opportunities',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Year-Ahead Forecast',
      description: 'Navigate your future with confidence through personalized predictions and planetary transit insights.',
      price: '20',
      delivery: '7-10 days',
      features: [
        'Comprehensive year forecast',
        'Monthly highlights',
        'Planetary transit impacts',
        'Opportunities & challenges',
      ],
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Chart Your <span className="cosmic-gradient">Cosmic Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect reading to illuminate your journey through the stars
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
