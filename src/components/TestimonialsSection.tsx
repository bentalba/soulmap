import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    quote: "Yusra's reading was life-changing. She unveiled aspects of my personality I never understood before. Absolutely worth it!",
    name: "Sarah M.",
    location: "New York, USA",
    rating: 5,
  },
  {
    quote: "The accuracy was stunning. Every detail resonated deeply with my life journey. Yusra has a true gift.",
    name: "Ahmed K.",
    location: "Dubai, UAE",
    rating: 5,
  },
  {
    quote: "I was skeptical at first, but the insights were profound. Understanding my birth chart has helped me make better decisions.",
    name: "Marie L.",
    location: "Paris, France",
    rating: 5,
  },
  {
    quote: "The relationship compatibility reading saved my relationship. We now understand each other so much better.",
    name: "Lisa & Tom",
    location: "London, UK",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="cosmic-gradient">Constellation</span> of Voices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands who've discovered their cosmic truth
          </p>
        </div>

        {/* Testimonial Card */}
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-cosmic opacity-5" />

          {/* Quote Icon */}
          <Quote className="h-12 w-12 text-primary/20 mb-6 relative" />

          {/* Content */}
          <div className="relative space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed italic">
              "{currentTestimonial.quote}"
            </p>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span key={i} className="text-primary text-xl">★</span>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-cosmic" />
              <div>
                <div className="font-semibold">{currentTestimonial.name}</div>
                <div className="text-sm text-muted-foreground">{currentTestimonial.location}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="text-primary hover:text-primary/80"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="text-primary hover:text-primary/80"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
