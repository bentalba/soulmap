import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home as HomeIcon } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      <div className="flex min-h-[80vh] items-center justify-center pt-20">
        <div className="text-center space-y-6 max-w-lg px-6">
          <h1 className="text-8xl font-bold cosmic-gradient">404</h1>
          <h2 className="text-3xl font-bold">Lost in the Cosmos</h2>
          <p className="text-xl text-muted-foreground">
            This page seems to have drifted into another dimension. Let's guide you back home.
          </p>
          <a href="/">
            <Button size="lg" className="bg-gradient-cosmic hover:opacity-90 gap-2">
              <HomeIcon className="h-5 w-5" />
              Return to Home
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
