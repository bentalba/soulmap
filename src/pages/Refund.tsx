import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Refund = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl relative z-10">
        <div className="space-y-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border/30 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="cosmic-gradient">Refund Policy</span>
            </h1>
            <p className="text-muted-foreground">Last Updated: November 14, 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Due to the highly personalized and digital nature of our services, <strong>all sales are final and non-refundable.</strong>
            </p>
            <p className="text-foreground leading-relaxed">
              When you purchase a reading, you are paying for the astrologer's time, expertise, and the creation of a custom digital product. This work cannot be "returned" or "undone" once it has begun. By purchasing, you acknowledge and agree to this policy.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Non-Refundable Scenarios</h2>
            <p className="text-foreground leading-relaxed">
              We do not provide refunds or credits under any circumstances, including (but not limited to):
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Change of Mind:</strong> You change your mind after ordering.
              </li>
              <li>
                <strong className="text-foreground">Incorrect Data:</strong> You provided an incorrect date, time, or location of birth, and the reading has already been completed.
              </li>
              <li>
                <strong className="text-foreground">Dissatisfaction:</strong> You are dissatisfied with the interpretation, style, or conclusions of the reading. (Astrology is subjective).
              </li>
              <li>
                <strong className="text-foreground">Misunderstanding:</strong> You misunderstood the nature of the service or what was included in the digital report.
              </li>
            </ul>
            <p className="text-foreground leading-relaxed pt-4 font-medium">
              Once an order is placed and work has commenced, the sale is final.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Exceptions (at Our Sole Discretion)</h2>
            <p className="text-foreground leading-relaxed">
              Refunds will only be considered in the following specific cases:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Duplicate Charge:</strong> You were charged twice for the same order due to a technical error.
              </li>
              <li>
                <strong className="text-foreground">Non-Delivery:</strong> You did not receive your reading due to a verifiable technical fault on <em>our</em> end, and we are unable to successfully resend it.
              </li>
              <li>
                <strong className="text-foreground">Cancellation by Us:</strong> We are unable to complete your reading for any reason and choose to cancel your order.
              </li>
            </ul>
            <p className="text-foreground leading-relaxed pt-4">
              If you are eligible, the refund will be processed to your original payment method.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. Order Not Received?</h2>
            <p className="text-foreground leading-relaxed">
              If you have not received your order within the estimated delivery time, please take these steps <strong>before</strong> contacting us:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Check your email's <strong className="text-foreground">Spam, Junk, or Promotions</strong> folder.</li>
              <li>Verify that the email address you provided at checkout was spelled correctly.</li>
            </ol>
            <p className="text-foreground leading-relaxed pt-4">
              If you still cannot find it, please contact us at <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a> with your order number. We will investigate and ensure your reading is re-sent to you. <strong>This is not grounds for a refund.</strong>
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. Contact</h2>
            <p className="text-foreground leading-relaxed">
              For any issues related to payment or order delivery, please contact us at:
            </p>
            <p className="text-foreground">
              Email: <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a>
            </p>
          </div>

          {/* Important Notice Box */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-8">
            <p className="text-foreground font-medium text-center">
              By completing your purchase, you acknowledge that you have read and agree to this Refund Policy.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Refund;
