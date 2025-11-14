import { Button } from './ui/button';
import { Card } from './ui/card';
import { NavLink } from './NavLink';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  delivery: string;
  features: string[];
  isPopular?: boolean;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  price,
  delivery,
  features,
  isPopular = false,
}: ServiceCardProps) => {
  return (
    <Card className="relative p-8 hover-lift border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group">
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-cosmic rounded-full text-xs font-semibold animate-glow-pulse">
          MOST POPULAR
        </div>
      )}

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center animate-celestial-spin">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1">✦</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="pt-4 space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary animate-glow-pulse">${price}</span>
            <span className="text-muted-foreground">USD</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Delivery: {delivery}
          </div>
          <NavLink to="/book" className="block">
            <Button className="w-full bg-secondary hover:bg-secondary/90">
              Get Started
            </Button>
          </NavLink>
        </div>
      </div>
    </Card>
  );
};
