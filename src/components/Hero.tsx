import { Button } from './ui/button';
import { NavLink } from './NavLink';
import { Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-cosmic.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import GradientBlinds from './GradientBlinds';

const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-primary animate-glow-pulse">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* GradientBlinds Background Animation */}
      <div className="absolute inset-0 z-0">
        <GradientBlinds
          gradientColors={['#D4AF37', '#9B4DCA', '#1a1a2e']}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{t('hero.badge')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t('hero.title.1')}{' '}
            <span className="cosmic-gradient inline-block animate-glow-pulse">
              {t('hero.title.2')}
            </span>
            <br />
            {t('hero.title.3')}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <NavLink to="/book">
              <Button 
                size="lg" 
                className="bg-gradient-cosmic hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-cosmic"
              >
                {t('hero.cta.primary')}
              </Button>
            </NavLink>
            <NavLink to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6"
              >
                {t('hero.cta.secondary')}
              </Button>
            </NavLink>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <AnimatedCounter target={2400} suffix="+" />
              <div className="text-sm text-muted-foreground">{t('hero.metrics.readings')}</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter target={98} suffix="%" />
              <div className="text-sm text-muted-foreground">{t('hero.metrics.satisfaction')}</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter target={15} suffix="K+" />
              <div className="text-sm text-muted-foreground">{t('hero.metrics.community')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
