import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Star, Heart, Globe, Sparkles, Anchor, GraduationCap, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';
import { useLanguage } from '@/contexts/LanguageContext';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const Lanyard = lazy(() => import('@/components/Lanyard'));

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
                  {t('about.title')} <span className="cosmic-gradient">Yusra</span>
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
                  <h3 className="font-semibold text-sm">Maritime Navigation</h3>
                  <p className="text-xs text-muted-foreground">Bachelor's Degree</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 space-y-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-sm">Astrology Studies</h3>
                  <p className="text-xs text-muted-foreground">Master's Candidate</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 space-y-2">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-sm">2,400+ {t('about.stats.readings')}</h3>
                  <p className="text-xs text-muted-foreground">Souls Guided</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 space-y-2">
                  <Globe className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-sm">3 Languages</h3>
                  <p className="text-xs text-muted-foreground">EN | AR | FR</p>
                </div>
              </div>
            </div>

            {/* Right Side - 3D Lanyard Animation */}
            <div className="relative h-[600px] lg:h-[700px]">
              <ErrorBoundary>
                <Suspense fallback={
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center space-y-4">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                      <p className="text-sm text-muted-foreground">Loading 3D experience...</p>
                    </div>
                  </div>
                }>
                  <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                </Suspense>
              </ErrorBoundary>
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
                  <h3 className="text-2xl font-bold">The Astrologer</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my Master's in Astrology and Planetary Knowledge, I dive 
                  deep into the ancient wisdom of birth charts, planetary transits, and cosmic 
                  cycles. This advanced study allows me to provide readings that are both 
                  traditionally grounded and deeply insightful.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground italic">
                    "Every chart tells a story, every planet reveals a truth."
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center space-y-4">
              <Star className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">My Philosophy</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I believe astrology is a tool for self-discovery and empowerment. By understanding 
                the cosmic influences present at your birth, you gain clarity about your strengths, 
                challenges, and life purpose. My readings combine scientific precision with intuitive 
                wisdom, offering guidance that is both practical and transformative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Approach */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="cosmic-gradient">Cosmic Promise</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Star,
                title: 'Authenticity',
                description: 'Every reading is personally crafted with deep analysis, never automated or generic.',
              },
              {
                icon: Heart,
                title: 'Compassion',
                description: 'Your story matters. I approach each chart with empathy, care, and respect.',
              },
              {
                icon: Sparkles,
                title: 'Precision',
                description: 'Combining maritime precision with astrological wisdom for accurate insights.',
              },
              {
                icon: Globe,
                title: 'Accessibility',
                description: 'Available in English, Arabic, and French for souls around the world.',
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
                { number: '15K+', label: 'TikTok Followers' },
                { number: '2,400+', label: t('about.stats.readings') },
                { number: '10+', label: t('about.stats.experience') },
                { number: '3', label: 'Languages' },
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
