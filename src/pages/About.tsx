import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Star, Heart, Globe, Sparkles, Anchor, GraduationCap, Award, BookOpen, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      
      {/* Hero Section with 3D Lanyard */}
      <section className="pt-32 pb-0 relative min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8 relative z-10">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">{t('about.badge')}</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold">
                  {t('about.title')}
                </h1>
                <p className="text-2xl text-primary font-semibold">
                  {t('about.subtitle')}
                </p>
                <p className="text-xl text-muted-foreground max-w-xl">
                  {t('about.intro')}
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 space-y-2">
                  <Anchor className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-sm">{t('about.credential1.title')}</h3>
                  <p className="text-xs text-muted-foreground">{t('about.credential1.subtitle')}</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 space-y-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-sm">{t('about.credential2.title')}</h3>
                  <p className="text-xs text-muted-foreground">{t('about.credential2.subtitle')}</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 space-y-2">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-sm">2,400+ {t('about.stats.readings')}</h3>
                  <p className="text-xs text-muted-foreground">{t('about.credential3.subtitle')}</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 space-y-2">
                  <Globe className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-sm">{t('about.credential4.title')}</h3>
                  <p className="text-xs text-muted-foreground">{t('about.credential4.subtitle')}</p>
                </div>
              </div>
            </div>

            {/* Right Side - Certification Badge */}
            <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
              <div className="relative">
                {/* Main Badge */}
                <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-xl border-2 border-primary/30 rounded-full w-80 h-80 flex flex-col items-center justify-center shadow-2xl">
                  {/* Rotating Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin-slow"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-primary/10 animate-spin-slower"></div>
                  
                  {/* Badge Content */}
                  <div className="relative z-10 text-center space-y-4">
                    <div className="bg-primary/10 rounded-full p-6 mx-auto w-fit">
                      <BadgeCheck className="h-16 w-16 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary">{t('about.badge.title')}</h3>
                      <p className="text-sm text-muted-foreground">{t('about.badge.subtitle')}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span>{t('about.badge.since')}</span>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-10 right-10 bg-primary/20 backdrop-blur-sm rounded-lg p-3 animate-float">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute bottom-10 left-10 bg-primary/20 backdrop-blur-sm rounded-lg p-3 animate-float-delayed">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute top-1/2 -right-8 bg-primary/20 backdrop-blur-sm rounded-lg p-3 animate-float">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                {/* Decorative Orbits */}
                <div className="absolute -inset-8 border border-primary/10 rounded-full animate-pulse"></div>
                <div className="absolute -inset-16 border border-primary/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Story */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">
                {t('about.journey.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Journey Text */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">{t('about.journey.title')}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.journey.text')}
                </p>
              </div>

              {/* Astrology Studies */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">{t('about.astrologer.title')}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.astrologer.text')}
                </p>
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground italic">
                    "{t('about.astrologer.quote')}"
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center space-y-4">
              <Star className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">{t('about.philosophy.title')}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('about.approach.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Approach */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="cosmic-gradient">{t('about.promise.title')}</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Star,
                title: t('about.value1.title'),
                description: t('about.value1.desc'),
              },
              {
                icon: Heart,
                title: t('about.value2.title'),
                description: t('about.value2.desc'),
              },
              {
                icon: Sparkles,
                title: t('about.value3.title'),
                description: t('about.value3.desc'),
              },
              {
                icon: Globe,
                title: t('about.value4.title'),
                description: t('about.value4.desc'),
              },
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4 group hover-lift">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '15K+', label: t('about.community.stat1') },
                { number: '2,400+', label: t('about.stats.readings') },
                { number: '10+', label: t('about.community.stat3') },
                { number: '3', label: t('about.community.stat4') },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2 bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30">
                  <div className="text-4xl font-bold cosmic-gradient">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-12 text-center space-y-6 shadow-elegant">
            <Sparkles className="h-12 w-12 text-primary mx-auto" />
            <h2 className="text-3xl font-bold">{t('about.cta')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('about.subtitle')}
            </p>
            <NavLink to="/book">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                {t('about.cta')}
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
