import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { DelayBanner } from '@/components/DelayBanner';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      <DelayBanner />
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
