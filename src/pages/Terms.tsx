import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl relative z-10">
        <div className="space-y-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border/30 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="cosmic-gradient">Terms of Service</span>
            </h1>
            <p className="text-muted-foreground">Last Updated: November 14, 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("you" or "User") and Soulmapy ("we," "us," or "our") concerning your access to and use of the Soulmapy website (the "Site") and all related services.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              By purchasing a service or accessing the Site, you confirm that you have read, understood, and agree to be bound by all of these Terms. If you do not agree, you are prohibited from using this Site and its services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Nature of Services & Required Disclaimer</h2>
            <p className="text-foreground leading-relaxed">
              You acknowledge and agree that all astrology readings, forecasts, and spiritual guidance (the "Services") provided by Soulmapy are <strong>FOR ENTERTAINMENT, PERSONAL INSIGHT, AND SELF-REFLECTION PURPOSES ONLY.</strong>
            </p>
            <p className="text-foreground leading-relaxed">
              The Services <strong>DO NOT</strong> constitute, and must not be used as a substitute for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Medical, psychological, or psychiatric advice, diagnosis, or treatment.</li>
              <li>Financial or investment advice.</li>
              <li>Legal advice.</li>
            </ul>
            <p className="text-foreground leading-relaxed pt-2 font-medium">
              You agree not to rely on the Services to make significant life-altering decisions. You are solely responsible for your own choices and actions.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Eligibility</h2>
            <p className="text-foreground leading-relaxed">
              You must be at least <strong>eighteen (18) years of age</strong> (or the age of legal majority in your jurisdiction) to purchase any Services from this Site. By making a purchase, you represent and warrant that you are legally an adult and have the authority to enter into this agreement.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. Intellectual Property Rights</h2>
            <p className="text-foreground leading-relaxed">
              All content on the Site and all digital files, text, and reports delivered to you (the "Readings") are the exclusive property of Soulmapy and are protected by copyright and other intellectual property laws.
            </p>
            <p className="text-foreground leading-relaxed">
              Upon delivery, you are granted a <strong>limited, non-exclusive, non-transferable license</strong> to use your purchased Reading for your <strong>personal, non-commercial use only.</strong>
            </p>
            <p className="text-foreground leading-relaxed">
              You are expressly prohibited from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Reselling, sharing, or distributing your Reading.</li>
              <li>Reproducing or publishing your Reading (in whole or in part) online or offline.</li>
              <li>Using any content for derivative works or commercial purposes.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. Ordering, Delivery, and User Responsibility</h2>
            <div className="space-y-4 pl-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">a) User Responsibility:</h3>
                <p className="text-foreground leading-relaxed">
                  To order a reading, you must provide accurate personal data (name, email, and birth data). <strong>You are solely responsible for the accuracy of this data.</strong> We are not liable for, and will not refund, an inaccurate reading that results from incorrect data provided by you.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">b) Delivery:</h3>
                <p className="text-foreground leading-relaxed">
                  All Services are digital and will be delivered to the email address you provide. The delivery times listed on the site (e.g., 3-5 days, 5-7 days) are <strong>estimates only</strong> and are not guaranteed. Delays may occur due to high order volume.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">5. Payments</h2>
            <p className="text-foreground leading-relaxed">
              All Services must be paid in full in advance of any work beginning. All payments are processed through secure third-party gateways (e.g., Stripe, PayPal). By providing payment information, you represent that you are authorized to use the chosen payment method. We reserve the right to refuse or cancel any order at our discretion.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">6. Disclaimer of Warranties & Limitation of Liability</h2>
            <div className="space-y-4 pl-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">a) No Guarantees:</h3>
                <p className="text-foreground leading-relaxed">
                  You understand that astrology is a subjective and interpretive art. We make no guarantees, warranties, or representations regarding the accuracy, applicability, or outcomes of any Reading. All Services are provided on an "as is" basis.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">b) Limitation of Liability:</h3>
                <p className="text-foreground leading-relaxed">
                  To the fullest extent permissible by law, Soulmapy (including its owner, agents, and employees) shall not be liable for any direct, indirect, incidental, or consequential damages (including emotional, financial, or personal harm) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Your reliance on any information or interpretation provided in a Reading.</li>
                  <li>Any decisions you make based on a Reading.</li>
                  <li>Any technical issues, delivery delays, or errors.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">c) Maximum Liability:</h3>
                <p className="text-foreground leading-relaxed">
                  In the event that Soulmapy is found liable, our total liability to you for any and all claims shall not exceed the total amount you paid for the specific Service in question.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">7. Prohibited Use</h2>
            <p className="text-foreground leading-relaxed">
              You agree not to use the Site or Services to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Engage in any fraudulent, abusive, or harassing behavior.</li>
              <li>Provide false or misleading personal information (including birth data).</li>
              <li>Violate any applicable local, national, or international laws.</li>
              <li>Disrupt, interfere with, or attempt to hack the Site's security or services.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">8. Governing Law and Dispute Resolution</h2>
            <p className="text-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the <strong>Kingdom of Morocco</strong>, without regard to its conflict of law principles.
            </p>
            <p className="text-foreground leading-relaxed">
              Any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall be subject to the <strong>exclusive jurisdiction of the competent courts in Kenitra, Morocco.</strong>
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">9. Modifications to Terms</h2>
            <p className="text-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. The "Last Updated" date will be revised, and the new Terms will be effective immediately upon posting. Your continued use of the Site after such changes constitutes your acceptance of the new Terms.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
