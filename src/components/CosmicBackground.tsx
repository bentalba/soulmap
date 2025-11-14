import { useEffect, useRef } from 'react';
import { SparklesCore } from './ui/sparkles-core';
import { useTheme } from 'next-themes';

export const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme || 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];
    
    // Create stardust particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        // Use different colors based on theme for better contrast
        const particleColor = currentTheme === 'dark' 
          ? `rgba(212, 175, 55, ${particle.opacity})` // Gold for dark mode
          : `rgba(138, 100, 35, ${particle.opacity})`; // Darker gold for light mode
        ctx.fillStyle = particleColor;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Gentle opacity pulse
        particle.opacity += (Math.random() - 0.5) * 0.02;
        particle.opacity = Math.max(0.1, Math.min(0.8, particle.opacity));
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentTheme]);

  return (
    <>
      {/* Enhanced sparkles layer with tsparticles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <SparklesCore
          id="cosmic-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={2}
          particleDensity={120}
          className="w-full h-full"
          particleColor={currentTheme === 'dark' ? '#D4AF37' : '#8A6423'}
          speed={0.8}
        />
      </div>
      
      {/* Original canvas particles for layered effect */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: currentTheme === 'dark' ? 0.3 : 0.2 }}
      />
    </>
  );
};
