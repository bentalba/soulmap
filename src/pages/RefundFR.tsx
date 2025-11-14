import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const RefundFR = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl relative z-10">
        <div className="space-y-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border/30 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="cosmic-gradient">Politique de Remboursement</span>
            </h1>
            <p className="text-muted-foreground">Dernière mise à jour : 14 novembre 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Chez Soulmapy, nous nous engageons à fournir des lectures astrologiques personnalisées de haute qualité à tous nos clients. En raison de la nature de nos services, une fois qu'une lecture a été créée et livrée, elle représente du temps, de l'énergie et une expertise astrologiques qui ne peuvent pas être retournés ou annulés. Par conséquent, veuillez lire attentivement cette Politique de Remboursement avant d'effectuer un achat.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Politique Générale de Remboursement</h2>
            <div className="space-y-2 bg-destructive/10 border border-destructive/30 rounded-lg p-6">
              <p className="text-foreground leading-relaxed font-semibold text-lg">
                Toutes les ventes sont finales. Nous n'offrons pas de remboursements, d'échanges ou de crédits pour les lectures achetées.
              </p>
              <p className="text-foreground leading-relaxed pt-2">
                Une fois que vous avez passé commande et que le paiement a été confirmé, vous reconnaissez et acceptez que le service astrologique acheté sera effectué et livré conformément à nos Conditions Générales de Service, et qu'aucun remboursement ne sera accordé, sauf dans des circonstances exceptionnelles décrites ci-dessous.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Justification de la Politique de Non-Remboursement</h2>
            <p className="text-foreground leading-relaxed">
              Les lectures astrologiques que nous fournissons sont des services personnalisés qui nécessitent du temps, de la recherche et un savoir-faire professionnel. Une fois qu'une lecture est effectuée, elle ne peut pas être « retournée » de la même manière qu'un produit physique. Nous consacrons des efforts considérables à chaque lecture pour garantir une analyse astuce approfondie et significative.
            </p>
            <p className="text-foreground leading-relaxed pt-2">
              De plus, nos services sont livrés sous forme numérique (PDF ou messages écrits), ce qui signifie que vous recevez et pouvez conserver de manière permanente les informations de votre lecture une fois qu'elle vous est livrée.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. Exceptions Limitées</h2>
            <p className="text-foreground leading-relaxed">
              Bien que nous ne remboursions généralement pas les commandes terminées, nous pouvons envisager des exceptions dans les circonstances suivantes :
            </p>
            
            <div className="space-y-4 pl-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">a) Facturation en Double :</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Si vous avez été facturé par erreur deux fois pour la même commande en raison d'une erreur de traitement de paiement, nous émettrons immédiatement un remboursement pour les frais dupliqués après vérification.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">b) Non-Livraison pour des Raisons Techniques :</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Si, après avoir payé votre commande, nous ne parvenons pas à livrer votre lecture dans un délai de 72 heures en raison d'une erreur ou d'un problème technique imputable à Soulmapy, et que nous ne pouvons pas résoudre le problème dans un délai raisonnable, nous pourrons offrir soit un remboursement complet, soit un crédit pour votre achat futur, à notre discrétion.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed pt-4 font-medium">
              Veuillez noter : La non-livraison due à des informations de contact incorrectes fournies par vous (ex : adresse e-mail incorrecte) ou à des problèmes techniques de votre côté (ex : filtres anti-spam bloquant nos e-mails) ne sera pas éligible au remboursement.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. Désaccord avec le Contenu de la Lecture</h2>
            <p className="text-foreground leading-relaxed">
              Les lectures astrologiques sont de nature subjective et interprétative. Bien que nous nous efforcions de fournir des informations précises, éclairantes et personnalisées, vous pouvez ne pas être d'accord avec les interprétations ou trouver certaines parties de la lecture non pertinentes pour vos circonstances personnelles.
            </p>
            <p className="text-foreground leading-relaxed pt-2 font-medium">
              Le désaccord avec le contenu, l'interprétation ou les informations de votre lecture ne constitue pas un motif de remboursement. En effectuant un achat, vous reconnaissez que l'astrologie est une pratique exploratoire et n'est pas garantie d'être exacte ou applicable à 100 % à votre situation.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">5. Rétractations d'Achats et Annulations</h2>
            <p className="text-foreground leading-relaxed">
              Si vous changez d'avis après avoir passé une commande mais avant que la lecture ne soit livrée, vous pouvez nous contacter immédiatement à <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a>. Nous ferons tous les efforts raisonnables pour annuler votre commande et émettre un remboursement si le travail sur votre lecture n'a pas encore commencé.
            </p>
            <p className="text-foreground leading-relaxed pt-2">
              Cependant, si notre astrologue a déjà commencé à travailler sur votre lecture, aucun remboursement ne sera accordé, car un temps et des efforts considérables ont déjà été investis dans votre commande.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">6. Erreurs dans les Informations Fournies</h2>
            <p className="text-foreground leading-relaxed">
              Nos lectures sont basées sur les informations de naissance que vous fournissez (nom complet, date de naissance, heure et lieu de naissance). Si vous fournissez des informations incorrectes ou incomplètes et que la lecture livrée ne répond pas à vos attentes en conséquence, aucun remboursement ne sera accordé.
            </p>
            <p className="text-foreground leading-relaxed pt-2">
              Veuillez vérifier attentivement toutes les informations que vous soumettez avant de finaliser votre commande.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">7. Rétrofacturations et Litiges</h2>
            <p className="text-foreground leading-relaxed">
              Si vous déposez une rétrofacturation ou un litige auprès de votre banque ou société de carte de crédit au lieu de nous contacter directement pour résoudre tout problème, nous nous réservons le droit de suspendre définitivement votre accès à notre Site et à nos services.
            </p>
            <p className="text-foreground leading-relaxed pt-2">
              Les rétrofacturations frauduleuses seront contestées et pourront entraîner des poursuites judiciaires conformément aux lois locales.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">8. Comment Demander une Exception</h2>
            <p className="text-foreground leading-relaxed">
              Si vous pensez que votre situation relève de l'une des exceptions limitées décrites ci-dessus, veuillez nous contacter immédiatement à :
            </p>
            <p className="text-foreground py-2">
              E-mail : <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a>
            </p>
            <p className="text-foreground leading-relaxed">
              Veuillez fournir :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Votre nom complet</li>
              <li>Adresse e-mail utilisée lors de l'achat</li>
              <li>Numéro de commande (si disponible)</li>
              <li>Une description détaillée de votre problème</li>
            </ul>
            <p className="text-foreground leading-relaxed pt-2">
              Nous examinerons votre demande et répondrons dans un délai de 7 jours ouvrables. Les décisions concernant les exceptions à notre politique de remboursement sont entièrement à notre discrétion et sont finales.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">9. Modifications de cette Politique</h2>
            <p className="text-foreground leading-relaxed">
              Nous nous réservons le droit de modifier cette Politique de Remboursement à tout moment. Tout changement sera publié sur cette page avec une date de « Dernière mise à jour » révisée. Vos achats sont régis par la version de la Politique de Remboursement en vigueur au moment de votre commande.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">10. Contact</h2>
            <p className="text-foreground leading-relaxed">
              Pour toute question concernant cette Politique de Remboursement, veuillez nous contacter à :
            </p>
            <p className="text-foreground">
              E-mail : <a href="mailto:yusra@soulmapy.com" className="text-primary hover:underline">yusra@soulmapy.com</a>
            </p>
          </div>

          {/* Final Note */}
          <div className="space-y-4 border-t border-border/30 pt-6">
            <p className="text-muted-foreground leading-relaxed italic">
              En effectuant un achat sur Soulmapy, vous reconnaissez avoir lu, compris et accepté cette Politique de Remboursement.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefundFR;
