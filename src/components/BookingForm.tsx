import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon, Check } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type Step = 1 | 2 | 3 | 4;

interface FormData {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  language: 'en' | 'ar' | 'fr';
  
  // Step 2
  birthDate: Date | undefined;
  birthTime: string;
  birthLocation: string;
  
  // Step 3
  service: 'natal' | 'compatibility' | 'forecast' | 'question';
}

const services = [
  { id: 'natal', name: 'Natal Chart Reading', price: 9, delivery: '3-5 days' },
  { id: 'compatibility', name: 'Relationship Compatibility', price: 15, delivery: '5-7 days' },
  { id: 'forecast', name: 'Year-Ahead Forecast', price: 20, delivery: '7-10 days' },
  { id: 'question', name: 'Quick Star Question', price: 5, delivery: '1-2 days' },
];

export const BookingForm = () => {
  const [step, setStep] = useState<Step>(1);
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    language: 'en',
    birthDate: undefined,
    birthTime: '',
    birthLocation: '',
    service: 'natal',
  });

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (currentStep: Step): boolean => {
    if (currentStep === 1) {
      return !!(formData.fullName && formData.email && formData.phone);
    }
    if (currentStep === 2) {
      return !!(formData.birthDate && formData.birthTime && formData.birthLocation);
    }
    return true;
  };

  const nextStep = () => {
    if (!validateStep(step)) {
      toast({
        title: "Please complete all fields",
        description: "All fields are required to continue.",
        variant: "destructive",
      });
      return;
    }
    if (step < 4) setStep((step + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const handleSubmit = () => {
    toast({
      title: "Reading Requested! ✨",
      description: "You will receive your cosmic insights via email within the specified timeframe.",
    });
  };

  const selectedService = services.find(s => s.id === formData.service);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={cn(
                "flex-1 h-2 rounded-full mx-1 transition-all",
                s <= step ? "bg-gradient-cosmic" : "bg-muted"
              )}
            />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Step {step} of 4
        </p>
      </div>

      <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
        {/* Step 1: Basic Information */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Your Earthly Details</h2>
              <p className="text-muted-foreground">Let's begin with the basics</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label>Preferred Language</Label>
                <RadioGroup
                  value={formData.language}
                  onValueChange={(value) => updateFormData('language', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="en" id="en" />
                    <Label htmlFor="en">English</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ar" id="ar" />
                    <Label htmlFor="ar">العربية (Arabic)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fr" id="fr" />
                    <Label htmlFor="fr">Français (French)</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Birth Information */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Your Cosmic Coordinates</h2>
              <p className="text-muted-foreground">Precision matters for accurate insights</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Birth Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background/50",
                        !formData.birthDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.birthDate ? format(formData.birthDate, "PPP") : "Pick your birth date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.birthDate}
                      onSelect={(date) => updateFormData('birthDate', date)}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthTime">Birth Time</Label>
                <Input
                  id="birthTime"
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => updateFormData('birthTime', e.target.value)}
                  className="bg-background/50"
                />
                <p className="text-xs text-muted-foreground">
                  ✦ Exact time is crucial for accuracy. Check your birth certificate if unsure.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthLocation">Birth Location</Label>
                <Input
                  id="birthLocation"
                  value={formData.birthLocation}
                  onChange={(e) => updateFormData('birthLocation', e.target.value)}
                  placeholder="City, Country"
                  className="bg-background/50"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Service Selection */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Choose Your Reading</h2>
              <p className="text-muted-foreground">Select the service that calls to you</p>
            </div>

            <RadioGroup
              value={formData.service}
              onValueChange={(value) => updateFormData('service', value)}
              className="space-y-4"
            >
              {services.map((service) => (
                <Label
                  key={service.id}
                  htmlFor={service.id}
                  className={cn(
                    "flex items-center space-x-4 p-4 rounded-lg border-2 cursor-pointer transition-all hover-lift",
                    formData.service === service.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background/50"
                  )}
                >
                  <RadioGroupItem value={service.id} id={service.id} />
                  <div className="flex-1">
                    <div className="font-semibold">{service.name}</div>
                    <div className="text-sm text-muted-foreground">Delivery: {service.delivery}</div>
                  </div>
                  <div className="text-2xl font-bold text-primary">${service.price}</div>
                </Label>
              ))}
            </RadioGroup>
          </div>
        )}

        {/* Step 4: Review & Checkout */}
        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Confirm Your Reading</h2>
              <p className="text-muted-foreground">Review your details before proceeding</p>
            </div>

            <div className="space-y-4 p-4 bg-background/30 rounded-lg">
              <div>
                <div className="text-sm text-muted-foreground">Name</div>
                <div className="font-medium">{formData.fullName}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Birth Date & Time</div>
                <div className="font-medium">
                  {formData.birthDate ? format(formData.birthDate, "PPP") : ''} at {formData.birthTime}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Birth Location</div>
                <div className="font-medium">{formData.birthLocation}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Service</div>
                <div className="font-medium">{selectedService?.name}</div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-3xl font-bold text-primary">${selectedService?.price}</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-cosmic hover:opacity-90 text-lg py-6"
            >
              <Check className="mr-2 h-5 w-5" />
              Proceed to Payment
            </Button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <Button onClick={prevStep} variant="outline" className="flex-1">
              Previous
            </Button>
          )}
          {step < 4 && (
            <Button onClick={nextStep} className="flex-1 bg-secondary hover:bg-secondary/90">
              Continue
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};
