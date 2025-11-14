import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const TermsFR = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl relative z-10">
        <div className="space-y-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border/30 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="cosmic-gradient">Conditions Générales de Service</span>
            </h1>
            <p className="text-muted-foreground">Dernière mise à jour : 14 novembre 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Bienvenue sur Soulmapy. En accédant ou en utilisant notre site web (le « Site ») et en achetant nos services, vous acceptez d'être lié par les présentes Conditions Générales de Service (les « Conditions »). Veuillez les lire attentivement. Si vous n'acceptez pas ces Conditions, vous ne devez pas utiliser notre Site.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Description des Services</h2>
            <p className="text-foreground leading-relaxed">
              Soulmapy fournit des lectures astrologiques personnalisées, basées sur les informations de naissance que vous fournissez (nom complet, date de naissance, heure et lieu de naissance). Ces lectures incluent :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Lecture de Thème Natal</li>
              <li>Lecture de Synastrie</li>
              <li>Lecture de Thème Composite</li>
            </ul>
            <p className="text-foreground leading-relaxed pt-2">
              Les lectures sont livrées sous forme de documents PDF ou de messages écrits (sur Instagram ou d'autres plateformes) dans un délai de 72 heures suivant la confirmation de votre commande. Les délais de livraison peuvent varier en fonction de la demande, mais nous nous efforçons de respecter ce délai.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Exclusion de Responsabilité – À des Fins de Divertissement Uniquement</h2>
            <div className="space-y-2 bg-destructive/10 border border-destructive/30 rounded-lg p-6">
              <p className="text-foreground leading-relaxed font-semibold">
                IMPORTANT : Les lectures et services astrologiques proposés sur ce site sont fournis uniquement à des fins de divertissement, d'exploration de soi et de réflexion personnelle. L'astrologie n'est pas reconnue comme une science et ne doit pas être considérée comme un conseil professionnel de quelque nature que ce soit.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>Nos lectures NE remplacent PAS et NE doivent PAS remplacer</strong> :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Conseil médical, psychologique ou de santé mentale</li>
                <li>Conseil juridique ou services juridiques</li>
                <li>Conseil financier, planification d'investissement ou services connexes</li>
                <li>Conseil en carrière ou décisions professionnelles</li>
                <li>Conseil matrimonial, relationnel ou thérapie</li>
              </ul>
              <p className="text-foreground leading-relaxed pt-2">
                <strong>Vous reconnaissez et acceptez que :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Les lectures astrologiques sont de nature subjective et interprétative. Bien que nous mettions tout notre savoir-faire dans nos analyses, aucune garantie n'est donnée concernant l'exactitude, l'actualité ou l'exhaustivité d'une lecture.</li>
                <li>Vous assumez l'entière responsabilité de toute décision ou action entreprise sur la base des informations de votre lecture.</li>
                <li>Nous ne serons pas tenus responsables de tout dommage, perte ou résultat défavorable découlant de votre confiance dans votre lecture.</li>
              </ul>
            </div>
            <p className="text-foreground leading-relaxed pt-2">
              Si vous rencontrez des problèmes de santé physique ou mentale, des problèmes juridiques ou financiers, veuillez consulter des professionnels agréés et qualifiés dans ces domaines.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. Exactitude des Informations Fournies</h2>
            <p className="text-foreground leading-relaxed">
              Vous acceptez de fournir des informations complètes, exactes et à jour (en particulier vos données de naissance : nom complet, date, heure et lieu de naissance). L'exactitude de votre lecture dépend fortement de l'exactitude des informations que vous fournissez. Nous ne sommes pas responsables des inexactitudes résultant de la saisie de données incorrectes ou incomplètes de votre part.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. Paiement et Prix</h2>
            <p className="text-foreground leading-relaxed">
              Tous les prix sont affichés en dollars américains (USD), sauf indication contraire. Le paiement est dû au moment de l'achat et est traité via nos passerelles de paiement tierces sécurisées (ex : Stripe, PayPal). En effectuant un achat, vous garantissez que vous avez le droit légal d'utiliser le mode de paiement fourni.
            </p>
            <p className="text-foreground leading-relaxed pt-2">
              Nous nous réservons le droit de modifier les prix à tout moment sans préavis. Cependant, tout changement de prix n'affectera pas les commandes déjà confirmées et payées.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">5. Livraison</h2>
            <p className="text-foreground leading-relaxed">
              Nous livrons vos lectures personnalisées par e-mail (sous forme de PDF) ou par message direct sur Instagram dans un délai de 72 heures suivant la confirmation de paiement. Dans de rares cas, la livraison peut prendre plus de temps en raison d'un volume élevé de commandes ou de circonstances imprévues. Si vous n'avez pas reçu votre lecture dans un délai de 72 heures, veuillez nous contacter à <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a>.
            </p>
            <p className="text-foreground leading-relaxed pt-2">
              Il vous incombe de fournir une adresse e-mail valide ou des identifiants de messagerie corrects. Nous ne sommes pas responsables de la non-livraison résultant d'adresses e-mail incorrectes, de dossiers de courrier indésirable ou de problèmes techniques de votre côté.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">6. Droits de Propriété Intellectuelle</h2>
            <p className="text-foreground leading-relaxed">
              Tout le contenu de notre Site, y compris mais sans s'y limiter le texte, les graphiques, les logos, les images, le contenu audio et vidéo, et vos lectures astrologiques personnalisées, est la propriété de Soulmapy ou de ses concédants de licence et est protégé par les lois marocaines et internationales sur le droit d'auteur et la propriété intellectuelle.
            </p>
            <p className="text-foreground leading-relaxed pt-2">
              Lorsque vous achetez une lecture, vous recevez une licence personnelle, non exclusive et non transférable pour voir et utiliser cette lecture à des fins personnelles uniquement. Vous ne pouvez pas :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Reproduire, distribuer, modifier ou créer des œuvres dérivées de la lecture.</li>
              <li>Partager ou revendre votre lecture à des tiers.</li>
              <li>Utiliser la lecture à des fins commerciales.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">7. Conduite de l'Utilisateur</h2>
            <p className="text-foreground leading-relaxed">En utilisant notre Site, vous acceptez de :</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Ne pas utiliser le Site à des fins illégales ou non autorisées.</li>
              <li>Ne pas tenter de nuire à la fonctionnalité ou à la sécurité du Site (ex : piratage, introduction de logiciels malveillants).</li>
              <li>Ne pas télécharger, publier ou transmettre de contenu abusif, diffamatoire, obscène ou autrement répréhensible.</li>
            </ul>
            <p className="text-foreground leading-relaxed pt-2">
              Nous nous réservons le droit de résilier ou de suspendre votre accès au Site à tout moment, avec ou sans préavis, si vous violez ces Conditions.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">8. Limitation de Responsabilité</h2>
            <div className="space-y-2 bg-muted/30 border border-border/30 rounded-lg p-6">
              <p className="text-foreground leading-relaxed font-semibold">
                DANS LA MESURE MAXIMALE PERMISE PAR LA LOI APPLICABLE :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Soulmapy et ses propriétaires, employés et affiliés ne seront pas tenus responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif découlant de ou lié à votre utilisation du Site ou de nos services.</li>
                <li>Notre responsabilité totale envers vous pour toute réclamation découlant de l'utilisation du Site ou de l'achat de services ne dépassera pas le montant que vous nous avez payé pour la commande spécifique en question.</li>
              </ul>
              <p className="text-foreground leading-relaxed pt-2">
                Cette limitation s'applique que la responsabilité présumée soit fondée sur un contrat, un délit, une négligence, une responsabilité stricte ou toute autre base, et même si nous avons été informés de la possibilité de tels dommages.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">9. Indemnisation</h2>
            <p className="text-foreground leading-relaxed">
              Vous acceptez d'indemniser, de défendre et de dégager de toute responsabilité Soulmapy, ses propriétaires, employés et affiliés contre toute réclamation, responsabilité, dommage, perte et dépense (y compris les honoraires d'avocat raisonnables) découlant de ou liés à votre utilisation du Site ou de nos services, votre violation de ces Conditions, ou votre violation de tout droit d'un tiers.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">10. Droit Applicable et Compétence</h2>
            <p className="text-foreground leading-relaxed">
              Ces Conditions sont régies et interprétées conformément aux lois du <strong>Royaume du Maroc</strong>, sans égard à ses dispositions en matière de conflit de lois.
            </p>
            <p className="text-foreground leading-relaxed pt-2">
              Tout litige découlant de ou lié à ces Conditions ou à votre utilisation du Site sera soumis à la compétence exclusive des tribunaux de <strong>Kenitra, Maroc</strong>. En acceptant ces Conditions, vous consentez à vous soumettre à la compétence personnelle de ces tribunaux.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">11. Modifications des Conditions</h2>
            <p className="text-foreground leading-relaxed">
              Nous nous réservons le droit de modifier ou de remplacer ces Conditions à tout moment à notre seule discrétion. Tout changement sera publié sur cette page avec une date de « Dernière mise à jour » révisée. Votre utilisation continue du Site après de tels changements constitue votre acceptation des nouvelles Conditions. Il est de votre responsabilité de consulter régulièrement ces Conditions.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">12. Divisibilité</h2>
            <p className="text-foreground leading-relaxed">
              Si une disposition de ces Conditions est jugée invalide ou inapplicable par un tribunal compétent, cette disposition sera limitée ou éliminée dans la mesure minimale nécessaire, et les dispositions restantes de ces Conditions resteront pleinement en vigueur.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">13. Intégralité de l'Accord</h2>
            <p className="text-foreground leading-relaxed">
              Ces Conditions, ainsi que notre Politique de Confidentialité et notre Politique de Remboursement, constituent l'intégralité de l'accord entre vous et Soulmapy concernant votre utilisation du Site et remplacent tous les accords et compréhensions antérieurs, écrits ou oraux.
            </p>
          </div>

          {/* Section 14 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">14. Contact</h2>
            <p className="text-foreground leading-relaxed">
              Pour toute question concernant ces Conditions, veuillez nous contacter à :
            </p>
            <p className="text-foreground">
              E-mail : <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a>
            </p>
          </div>

          {/* Final Note */}
          <div className="space-y-4 border-t border-border/30 pt-6">
            <p className="text-muted-foreground leading-relaxed italic">
              En utilisant Soulmapy, vous reconnaissez avoir lu, compris et accepté d'être lié par les présentes Conditions Générales de Service.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsFR;
