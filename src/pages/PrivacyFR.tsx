import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const PrivacyFR = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl relative z-10">
        <div className="space-y-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border/30 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="cosmic-gradient">Politique de Confidentialité</span>
            </h1>
            <p className="text-muted-foreground">Dernière mise à jour : 14 novembre 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Cette Politique de Confidentialité décrit comment Soulmapy (« nous », « notre » ou « nos ») collecte, utilise, divulgue et protège vos informations personnelles lorsque vous visitez notre site web (le « Site ») ou achetez nos services.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              En accédant au Site ou en utilisant nos services, vous consentez explicitement à la collecte, à l'utilisation et au traitement de vos informations tels que décrits dans cette Politique. Cela inclut le traitement des données sensibles de naissance, essentielles à la fourniture de nos services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Informations que nous collectons</h2>
            <p className="text-foreground leading-relaxed">
              Nous collectons les informations nécessaires pour fournir nos services et améliorer votre expérience.
            </p>
            
            <div className="space-y-4 pl-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">a) Informations personnelles que vous fournissez :</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Données d'identité et de contact :</strong> Votre nom complet et votre adresse e-mail.</li>
                  <li><strong className="text-foreground">Données de naissance sensibles :</strong> Votre date de naissance, l'heure précise de naissance et le lieu de naissance. Ces données sont requises pour générer et livrer votre lecture astrologique personnalisée.</li>
                  <li><strong className="text-foreground">Données de paiement :</strong> Vos informations de paiement sont traitées de manière sécurisée par nos passerelles de paiement tierces (ex : Stripe, PayPal). Nous ne stockons pas les détails complets de votre carte de crédit sur nos serveurs.</li>
                  <li><strong className="text-foreground">Communications :</strong> Toute information fournie lorsque vous nous contactez pour obtenir de l'aide ou que vous incluez dans les notes de votre commande.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">b) Données techniques collectées automatiquement :</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Données d'utilisation :</strong> Informations sur la façon dont vous utilisez notre Site, y compris les pages visitées et le temps passé.</li>
                  <li><strong className="text-foreground">Données de l'appareil et de connexion :</strong> Votre adresse IP, le type de navigateur, le système d'exploitation et les informations sur l'appareil.</li>
                  <li><strong className="text-foreground">Données des cookies :</strong> Nous utilisons des cookies et des technologies similaires pour faire fonctionner le site, assurer la sécurité et analyser le trafic.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Comment nous utilisons vos informations (Base Légale)</h2>
            <p className="text-foreground leading-relaxed">
              Nous utilisons vos informations uniquement aux fins spécifiques suivantes et sur les bases légales suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Pour exécuter notre contrat :</strong> Pour traiter votre paiement et livrer les lectures astrologiques personnalisées que vous avez achetées. Le traitement de vos données de naissance est nécessaire à l'exécution de ce contrat.</li>
              <li><strong className="text-foreground">Pour communiquer :</strong> Pour vous envoyer les confirmations de commande, vos lectures terminées et répondre à vos demandes.</li>
              <li><strong className="text-foreground">Pour nos intérêts légitimes :</strong> Pour améliorer la fonctionnalité de notre Site, analyser les tendances des utilisateurs à des fins internes et assurer la sécurité de notre Site (ex : prévention de la fraude).</li>
              <li><strong className="text-foreground">Pour se conformer aux obligations légales :</strong> Pour tenir des registres conformément aux lois fiscales ou autres lois applicables.</li>
            </ul>
            <p className="text-foreground leading-relaxed font-medium pt-2">
              Nous ne vendrons, n'échangerons ni ne louerons jamais vos informations personnelles à des tiers à des fins de marketing.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. Stockage et protection des données</h2>
            <p className="text-foreground leading-relaxed">
              Nous nous engageons à protéger vos données. Nous mettons en œuvre des mesures de sécurité conformes aux normes de l'industrie, notamment :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Technologie Secure Sockets Layer (SSL) pour crypter les données en transit.</li>
              <li>Processeurs de paiement tiers sécurisés et conformes à la norme PCI.</li>
              <li>Contrôles d'accès internes stricts pour limiter qui peut consulter vos informations personnelles.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed pt-2">
              Bien que nous prenions toutes les mesures raisonnables pour protéger vos données, aucune méthode de transmission électronique ou de stockage n'est sécurisée à 100 %. En utilisant nos services, vous reconnaissez ce risque inhérent.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. Divulgation à des tiers</h2>
            <p className="text-foreground leading-relaxed">
              Nous ne partageons pas vos informations personnelles, sauf dans les circonstances limitées décrites ci-dessous :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Processeurs de paiement :</strong> Pour traiter votre paiement en toute sécurité.</li>
              <li><strong className="text-foreground">Prestataires de services :</strong> Pour héberger notre Site et gérer nos communications par e-mail (ex : hébergeur web, fournisseur de messagerie).</li>
            </ul>
            <p className="text-foreground leading-relaxed pt-2">
              Ces tiers sont contractuellement tenus d'utiliser vos informations uniquement pour exécuter les services que nous avons demandés et de maintenir leur confidentialité et leur sécurité. Nous ne partageons jamais vos données de naissance sensibles avec des annonceurs ou des plateformes marketing.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">5. Transferts internationaux de données</h2>
            <p className="text-foreground leading-relaxed">
              En tant que service mondial, vos informations peuvent être traitées dans des pays autres que le vôtre. Nos prestataires de services sont choisis pour leurs normes élevées de protection des données (ex : conformité RGPD). Nous prenons toutes les mesures raisonnables pour garantir que vos données sont traitées en toute sécurité, quel que soit leur emplacement.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">6. Conservation des données et vos droits</h2>
            <p className="text-foreground leading-relaxed">
              <strong>Conservation des données :</strong> Nous conservons vos informations personnelles uniquement aussi longtemps que nécessaire pour livrer votre lecture, fournir un support de suivi et nous conformer à nos obligations légales (ex : comptabilité). Nous supprimerons en toute sécurité vos données de naissance sensibles sur demande ou après une période d'inactivité définie.
            </p>
            <div className="space-y-2">
              <p className="text-foreground leading-relaxed">
                <strong>Vos droits :</strong> Selon votre localisation, vous avez le droit de :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Accès :</strong> Demander une copie des données personnelles que nous détenons à votre sujet.</li>
                <li><strong className="text-foreground">Rectification :</strong> Demander la correction de toute donnée inexacte ou incomplète.</li>
                <li><strong className="text-foreground">Effacement (Droit à l'oubli) :</strong> Demander la suppression de vos données personnelles, sous réserve de nos obligations légales.</li>
                <li><strong className="text-foreground">Retrait du consentement :</strong> Retirer votre consentement à notre traitement à tout moment (bien que cela puisse nous empêcher de fournir des services non encore livrés).</li>
              </ul>
            </div>
            <p className="text-foreground leading-relaxed pt-2">
              Pour exercer ces droits, veuillez nous contacter à : <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a>
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">7. Confidentialité des enfants</h2>
            <p className="text-foreground leading-relaxed">
              Nos services ne sont pas destinés aux personnes de moins de 16 ans. Nous ne collectons pas sciemment d'informations personnelles auprès de personnes de moins de 16 ans. Si nous apprenons que nous l'avons fait, nous prendrons des mesures pour les supprimer immédiatement.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">8. Modifications de cette politique</h2>
            <p className="text-foreground leading-relaxed">
              Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Tout changement sera publié sur cette page avec une date de « Dernière mise à jour » révisée. Votre utilisation continue du Site après de tels changements constitue votre acceptation de la nouvelle politique.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">9. Contact</h2>
            <p className="text-foreground leading-relaxed">
              Pour toute question concernant cette Politique de Confidentialité, veuillez nous contacter à :
            </p>
            <p className="text-foreground">
              E-mail : <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyFR;
