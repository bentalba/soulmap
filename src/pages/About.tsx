import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Star, Heart, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

const About = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Meet <span className="cosmic-gradient">Yusra</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your Guide Through the Cosmic Tapestry
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-cosmic overflow-hidden shadow-glow">
                <div className="w-full h-full flex items-center justify-center">
                  <Star className="h-24 w-24 text-white/50" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">A Journey Written in the Stars</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  From a young age, I felt the pull of the cosmos—a deep knowing that the stars held secrets meant to guide us. What began as curiosity evolved into a lifelong passion for understanding the celestial language of astrology.
                </p>
                <p>
                  For over a decade, I've dedicated myself to mastering the ancient art of birth chart interpretation, blending traditional wisdom with modern insights. Each reading I provide is crafted with care, precision, and deep respect for your unique journey.
                </p>
                <p>
                  Through Soulmapy, I've had the honor of guiding over 2,400 souls, helping them discover their cosmic blueprint and navigate life's challenges with celestial wisdom. My community of 15,000+ followers on TikTok continues to inspire me daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
                description: 'Every reading is personally crafted, never automated or generic.',
              },
              {
                icon: Heart,
                title: 'Compassion',
                description: 'Your story matters. I approach each chart with empathy and care.',
              },
              {
                icon: Sparkles,
                title: 'Precision',
                description: 'Detailed analysis of your birth chart for accurate insights.',
              },
              {
                icon: Globe,
                title: 'Accessibility',
                description: 'Available in English, Arabic, and French for global souls.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Discover Your Cosmic Blueprint?</h2>
            <p className="text-muted-foreground">
              Let's unlock the secrets written in your stars together.
            </p>
            <NavLink to="/book">
              <Button size="lg" className="bg-gradient-cosmic hover:opacity-90">
                Book Your Reading
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
