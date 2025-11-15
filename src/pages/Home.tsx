import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
// import { LanyardSection } from '@/components/LanyardSection'; // Temporarily disabled - causing crashes
import { Footer } from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      <Hero />
      <ServicesSection />
      {/* <LanyardSection /> */}
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
