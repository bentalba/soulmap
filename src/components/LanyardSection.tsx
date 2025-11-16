import Lanyard from '@/components/Lanyard';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const LanyardSection = () => {
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Drag the card to explore our cosmic credentials
          </p>
        </div>

        {/* Lanyard Animation Container */}
        <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden border border-primary/20 bg-card/30 backdrop-blur-sm">
          <ErrorBoundary>
            <Lanyard 
              position={[0, 0, 30]} 
              gravity={[0, -40, 0]} 
              fov={20}
              transparent={true}
            />
          </ErrorBoundary>
        </div>

        {/* Info Note */}
        <div className="text-center mt-8 relative z-10">
          <p className="text-sm text-muted-foreground">
            💫 Click and drag the card to interact with it
          </p>
        </div>
      </div>
    </section>
  );
};
