import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookingForm } from '@/components/BookingForm';
import { Sparkles } from 'lucide-react';

const Book = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm">Your cosmic journey begins here</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Book Your <span className="cosmic-gradient">Celestial Reading</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill in your cosmic coordinates and let the stars reveal your path
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-6">
          <BookingForm />
        </div>
      </section>

      {/* Trust Signals */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50">
              <div>
                <div className="text-2xl font-bold text-primary">2,400+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Secure</div>
                <div className="text-sm text-muted-foreground">Payment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Book;
