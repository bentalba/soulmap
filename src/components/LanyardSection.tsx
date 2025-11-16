import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const Lanyard = lazy(() => import('@/components/Lanyard'));

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
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Loading 3D experience...</p>
                </div>
              </div>
            }>
              <Lanyard 
                position={[0, 0, 30]} 
                gravity={[0, -40, 0]} 
                fov={20}
                transparent={true}
              />
            </Suspense>
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
