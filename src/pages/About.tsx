import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Star, Heart, Globe, Sparkles, Anchor, GraduationCap, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import { useTheme } from 'next-themes';
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
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ background: 'transparent' }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9B4DCA" />
                
                {/* ID Card */}
                <group position={[0, 0, 0]} rotation={[0.2, 0.3, 0]}>
                  {/* Card Background */}
                  <Box args={[2.5, 3.5, 0.1]}>
                    <meshStandardMaterial color="#1a1a2e" metalness={0.3} roughness={0.4} />
                  </Box>
                  
                  {/* Gold Border */}
                  <Box args={[2.6, 3.6, 0.05]} position={[0, 0, -0.06]}>
                    <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
                  </Box>
                  
                  {/* Photo Circle */}
                  <Sphere args={[0.6, 32, 32]} position={[0, 1.2, 0.06]}>
                    <meshStandardMaterial color="#9B4DCA" metalness={0.5} roughness={0.3} />
                  </Sphere>
                  
                  {/* Text Labels */}
                  <Text
                    position={[0, 0.3, 0.06]}
                    fontSize={0.25}
                    color="#D4AF37"
                    anchorX="center"
                    anchorY="middle"
                    font="/fonts/inter-bold.woff"
                  >
                    YUSRA
                  </Text>
                  
                  <Text
                    position={[0, -0.1, 0.06]}
                    fontSize={0.15}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                  >
                    Cosmic Navigator
                  </Text>
                  
                  <Text
                    position={[0, -0.5, 0.06]}
                    fontSize={0.12}
                    color="#9B4DCA"
                    anchorX="center"
                    anchorY="middle"
                  >
                    Maritime Navigation BSc
                  </Text>
                  
                  <Text
                    position={[0, -0.75, 0.06]}
                    fontSize={0.12}
                    color="#9B4DCA"
                    anchorX="center"
                    anchorY="middle"
                  >
                    Astrology MSc Candidate
                  </Text>
                  
                  <Text
                    position={[0, -1.2, 0.06]}
                    fontSize={0.1}
                    color="#888888"
                    anchorX="center"
                    anchorY="middle"
                  >
                    2,400+ Readings
                  </Text>
                  
                  {/* Decorative Stars */}
                  {[...Array(5)].map((_, i) => (
                    <Sphere
                      key={i}
                      args={[0.05, 16, 16]}
                      position={[
                        Math.cos((i * Math.PI * 2) / 5) * 1.1,
                        Math.sin((i * Math.PI * 2) / 5) * 1.5 - 0.2,
                        0.08
                      ]}
                    >
                      <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.5} />
                    </Sphere>
                  ))}
                </group>
                
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
              </Canvas>
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
            <div className="bg-gradient-cosmic rounded-lg p-8 text-center space-y-4">
              <Star className="h-12 w-12 text-white mx-auto" />
              <h3 className="text-2xl font-bold text-white">My Philosophy</h3>
              <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
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
              <Button size="lg" className="bg-gradient-cosmic hover:opacity-90 text-lg px-8 py-6">
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
