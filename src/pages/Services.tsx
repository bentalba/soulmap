import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { ServicesSection } from '@/components/ServicesSection';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

const Services = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Your Journey Through the <span className="cosmic-gradient">Stars</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Every soul has a unique cosmic blueprint. Let me guide you through the celestial wisdom written in your birth chart.
            </p>
            <NavLink to="/book">
              <Button size="lg" className="bg-gradient-cosmic hover:opacity-90 mt-4">
                Book Your Reading Now
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Additional Services */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 text-center space-y-6">
            <h3 className="text-2xl font-bold">Quick Star Question</h3>
            <p className="text-muted-foreground">
              Have one burning question about your path? Get a focused, stellar insight for just $5.
            </p>
            <p className="text-3xl font-bold text-primary">$5</p>
            <NavLink to="/book">
              <Button className="bg-secondary hover:bg-secondary/90">
                Ask Your Question
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
