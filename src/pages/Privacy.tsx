import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl relative z-10">
        <div className="space-y-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border/30 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="cosmic-gradient">Privacy Policy</span>
            </h1>
            <p className="text-muted-foreground">Last Updated: November 14, 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              This Privacy Policy outlines how Soulmapy ("we," "us," or "our") collects, uses, discloses, and protects your personal information when you visit our website (the "Site") or purchase our services.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              By accessing the Site or using our services, you explicitly consent to the collection, use, and processing of your information as described in this Policy. This includes the processing of sensitive birth data, which is essential for us to provide our services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Information We Collect</h2>
            <p className="text-foreground leading-relaxed">
              We collect information necessary to provide our services and improve your experience.
            </p>
            
            <div className="space-y-4 pl-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">a) Personal Information You Provide:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Identity & Contact Data:</strong> Your full name and email address.</li>
                  <li><strong className="text-foreground">Sensitive Birth Data:</strong> Your date of birth, precise time of birth, and location of birth. This is required to generate and deliver your personalized astrology reading.</li>
                  <li><strong className="text-foreground">Payment Data:</strong> Your payment information is processed securely by our third-party payment gateways (e.g., Stripe, PayPal). We do not store your full credit card details on our servers.</li>
                  <li><strong className="text-foreground">Communications:</strong> Any information you provide when you contact us for support or include in your order notes.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">b) Automatically Collected Technical Data:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our Site, including pages visited and time spent.</li>
                  <li><strong className="text-foreground">Device & Connection Data:</strong> Your IP address, browser type, operating system, and device information.</li>
                  <li><strong className="text-foreground">Cookie Data:</strong> We use cookies and similar technologies to operate the site, ensure security, and analyze traffic.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. How We Use Your Information (Legal Basis)</h2>
            <p className="text-foreground leading-relaxed">
              We use your information only for the following specific purposes and on the following legal bases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">To Fulfill Our Contract:</strong> To process your payment and deliver the personalized astrology readings you have purchased. The processing of your birth data is necessary to perform this contract.</li>
              <li><strong className="text-foreground">To Communicate:</strong> To send you order confirmations, your completed readings, and respond to your inquiries.</li>
              <li><strong className="text-foreground">For Legitimate Interests:</strong> To improve our Site's functionality, analyze user trends for internal purposes, and ensure the security of our Site (e.g., fraud prevention).</li>
              <li><strong className="text-foreground">To Comply with Legal Obligations:</strong> To maintain records as required by tax or other applicable laws.</li>
            </ul>
            <p className="text-foreground leading-relaxed font-medium pt-2">
              We will never sell, trade, or rent your personal information to any third party for marketing purposes.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. Data Storage and Protection</h2>
            <p className="text-foreground leading-relaxed">
              We are committed to protecting your data. We implement industry-standard security measures, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Secure Sockets Layer (SSL) technology to encrypt data in transit.</li>
              <li>Secure, PCI-compliant third-party payment processors.</li>
              <li>Strict internal access controls to limit who can view your personal information.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed pt-2">
              While we take all reasonable steps to protect your data, no method of electronic transmission or storage is 100% secure. By using our services, you acknowledge this inherent risk.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. Third-Party Disclosure</h2>
            <p className="text-foreground leading-relaxed">
              We do not share your personal information except in the limited circumstances described below:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Payment Processors:</strong> To securely process your payment.</li>
              <li><strong className="text-foreground">Service Providers:</strong> To host our Site and manage our email communications (e.g., web host, email provider).</li>
            </ul>
            <p className="text-foreground leading-relaxed pt-2">
              These third parties are contractually bound to use your information only to perform the services we have requested and to maintain its confidentiality and security. We never share your sensitive birth data with advertisers or marketing platforms.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">5. International Data Transfers</h2>
            <p className="text-foreground leading-relaxed">
              As a global service, your information may be processed in countries other than your own. Our service providers are chosen for their high data protection standards (e.g., GDPR compliance). We take all reasonable steps to ensure your data is treated securely, regardless of its location.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">6. Data Retention and Your Rights</h2>
            <p className="text-foreground leading-relaxed">
              <strong>Data Retention:</strong> We retain your personal information only for as long as necessary to deliver your reading, provide follow-up support, and comply with our legal obligations (e.g., for accounting). We will securely delete your sensitive birth data upon your request or after a set period of inactivity.
            </p>
            <div className="space-y-2">
              <p className="text-foreground leading-relaxed">
                <strong>Your Rights:</strong> Depending on your location, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong className="text-foreground">Rectification:</strong> Request correction of any inaccurate or incomplete data.</li>
                <li><strong className="text-foreground">Erasure (Right to be Forgotten):</strong> Request the deletion of your personal data, subject to our legal obligations.</li>
                <li><strong className="text-foreground">Withdraw Consent:</strong> Withdraw your consent to our processing at any time (though this may prevent us from delivering any unfulfilled services).</li>
              </ul>
            </div>
            <p className="text-foreground leading-relaxed pt-2">
              To exercise these rights, please contact us at: <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a>
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">7. Children's Privacy</h2>
            <p className="text-foreground leading-relaxed">
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from anyone under 16. If we become aware that we have, we will take steps to delete it immediately.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">8. Changes to This Policy</h2>
            <p className="text-foreground leading-relaxed">
              We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of the Site after such changes constitutes your acceptance of the new policy.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">9. Contact</h2>
            <p className="text-foreground leading-relaxed">
              For any questions regarding this Privacy Policy, please contact us at:
            </p>
            <p className="text-foreground">
              Email: <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
