import { Card } from './ui/card';
import { Quote, Star } from 'lucide-react';
import { Marquee } from './ui/marquee';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    quote: "I wasn't sure what to expect, but Yusra's reading really helped me understand some patterns in my life. She explained everything clearly and I appreciated her honest approach.",
    name: "Sarah M.",
    location: "New York, USA",
    rating: 5,
  },
  {
    quote: "The reading was detailed and thoughtful. Yusra took time to answer my questions and didn't rush through anything. Worth every penny.",
    name: "Ahmed K.",
    location: "Dubai, UAE",
    rating: 5,
  },
  {
    quote: "Honestly, I was skeptical at first but decided to give it a try. The insights about my career path were surprisingly accurate. Still processing everything but it was helpful.",
    name: "Marie L.",
    location: "Paris, France",
    rating: 5,
  },
  {
    quote: "My partner and I got a compatibility reading. Some things resonated, others less so, but it opened up good conversations between us. Yusra was professional throughout.",
    name: "Lisa & Tom",
    location: "London, UK",
    rating: 4,
  },
  {
    quote: "Good reading overall. Yusra knows her stuff and explains the technical aspects well. Helped me see some things from a different angle.",
    name: "Carlos R.",
    location: "Barcelona, Spain",
    rating: 5,
  },
  {
    quote: "The birth chart analysis was thorough. Yusra explained planetary positions in a way that made sense. I'll probably book again in a few months to see how things progress.",
    name: "Fatima A.",
    location: "Cairo, Egypt",
    rating: 5,
  },
  {
    quote: "As someone new to astrology, I appreciated that Yusra didn't use too much jargon. She made it accessible without dumbing it down. Solid experience.",
    name: "Michael B.",
    location: "Toronto, Canada",
    rating: 5,
  },
  {
    quote: "The timing guidance was practical. Not just vague predictions but actual actionable insights. Yusra clearly has deep knowledge and experience.",
    name: "Priya S.",
    location: "Mumbai, India",
    rating: 5,
  },
];

const TestimonialCard = ({ quote, name, location, rating }: typeof testimonials[0]) => (
  <Card className="w-[400px] h-[280px] flex-shrink-0 p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover-lift relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-10 transition-opacity" />
    <div className="relative h-full flex flex-col justify-between">
      <div className="space-y-3">
        <Quote className="h-8 w-8 text-primary/30" />
        <p className="text-sm leading-relaxed line-clamp-4 text-muted-foreground">
          "{quote}"
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-cosmic flex items-center justify-center">
            <span className="text-white text-sm font-semibold">{name.charAt(0)}</span>
          </div>
          <div>
            <div className="font-semibold text-sm">{name}</div>
            <div className="text-xs text-muted-foreground">{location}</div>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">{t('testimonials.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:60s] mb-4" ariaLabel="Customer testimonials">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:60s]" ariaLabel="Customer testimonials reverse">
            {testimonials.slice(4).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent" />
        </div>
        <div className="mt-16 text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-6 w-6 ${i < 4 ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} />
            ))}
          </div>
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">4.3</span> {t('testimonials.rating')}
          </p>
        </div>
      </div>
    </section>
  );
};
