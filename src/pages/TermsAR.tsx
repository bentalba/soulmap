import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const TermsAR = () => {
  return (
    <div className="min-h-screen relative" dir="rtl">
      <CosmicBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl relative z-10">
        <div className="space-y-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border/30 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="cosmic-gradient">شروط الخدمة</span>
            </h1>
            <p className="text-muted-foreground">آخر تحديث: 14 نوفمبر 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              تشكل شروط الخدمة هذه ("الشروط") اتفاقاً ملزماً قانوناً بينك ("أنت" أو "المستخدم") وبين Soulmapy ("نحن" أو "لنا" أو "الخاص بنا") فيما يتعلق بوصولك إلى واستخدامك لموقع Soulmapy ("الموقع") وجميع الخدمات ذات الصلة.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              بشراء خدمة أو الوصول إلى الموقع، فإنك تؤكد أنك قد قرأت وفهمت ووافقت على الالتزام بجميع هذه الشروط. إذا كنت لا توافق، فأنت ممنوع من استخدام هذا الموقع وخدماته.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">١. طبيعة الخدمات وإخلاء المسؤولية المطلوب</h2>
            <p className="text-foreground leading-relaxed">
              أنت تقر وتوافق على أن جميع القراءات الفلكية والتوقعات والإرشادات الروحية ("الخدمات") التي تقدمها Soulmapy هي <strong>لأغراض الترفيه والبصيرة الشخصية والتأمل الذاتي فقط.</strong>
            </p>
            <p className="text-foreground leading-relaxed">
              الخدمات <strong>لا تشكل</strong>، ويجب عدم استخدامها كبديل عن:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              <li>المشورة أو التشخيص أو العلاج الطبي أو النفسي أو الطب النفسي.</li>
              <li>المشورة المالية أو الاستثمارية.</li>
              <li>المشورة القانونية.</li>
            </ul>
            <p className="text-foreground leading-relaxed pt-2 font-medium">
              أنت توافق على عدم الاعتماد على الخدمات لاتخاذ قرارات حياتية مهمة تغير مجرى حياتك. أنت المسؤول الوحيد عن اختياراتك وأفعالك.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٢. الأهلية</h2>
            <p className="text-foreground leading-relaxed">
              يجب أن يكون عمرك <strong>ثمانية عشر (18) عاماً على الأقل</strong> (أو سن الرشد القانوني في منطقتك القضائية) لشراء أي خدمات من هذا الموقع. بإجراء عملية شراء، فإنك تقر وتضمن أنك بالغ قانونياً ولديك السلطة للدخول في هذه الاتفاقية.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٣. حقوق الملكية الفكرية</h2>
            <p className="text-foreground leading-relaxed">
              جميع المحتويات الموجودة على الموقع وجميع الملفات الرقمية والنصوص والتقارير المسلمة إليك ("القراءات") هي ملكية حصرية لـ Soulmapy ومحمية بموجب حقوق النشر وقوانين الملكية الفكرية الأخرى.
            </p>
            <p className="text-foreground leading-relaxed">
              عند التسليم، يتم منحك <strong>ترخيصاً محدوداً وغير حصري وغير قابل للتحويل</strong> لاستخدام القراءة المشتراة <strong>للاستخدام الشخصي وغير التجاري فقط.</strong>
            </p>
            <p className="text-foreground leading-relaxed">
              أنت ممنوع صراحةً من:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              <li>إعادة بيع أو مشاركة أو توزيع قراءتك.</li>
              <li>إعادة إنتاج أو نشر قراءتك (كلياً أو جزئياً) عبر الإنترنت أو خارجه.</li>
              <li>استخدام أي محتوى لأعمال مشتقة أو أغراض تجارية.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٤. الطلب والتسليم ومسؤولية المستخدم</h2>
            <div className="space-y-4 pr-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">أ) مسؤولية المستخدم:</h3>
                <p className="text-foreground leading-relaxed">
                  لطلب قراءة، يجب عليك تقديم بيانات شخصية دقيقة (الاسم والبريد الإلكتروني وبيانات الميلاد). <strong>أنت المسؤول الوحيد عن دقة هذه البيانات.</strong> نحن غير مسؤولين، ولن نقوم برد الأموال، عن قراءة غير دقيقة ناتجة عن بيانات غير صحيحة قدمتها.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">ب) التسليم:</h3>
                <p className="text-foreground leading-relaxed">
                  جميع الخدمات رقمية وسيتم تسليمها إلى عنوان البريد الإلكتروني الذي تقدمه. أوقات التسليم المدرجة على الموقع (على سبيل المثال، 3-5 أيام، 5-7 أيام) هي <strong>تقديرات فقط</strong> وغير مضمونة. قد تحدث تأخيرات بسبب حجم الطلبات الكبير.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٥. المدفوعات</h2>
            <p className="text-foreground leading-relaxed">
              يجب دفع جميع الخدمات بالكامل مقدماً قبل بدء أي عمل. تتم معالجة جميع المدفوعات من خلال بوابات طرف ثالث آمنة (مثل Stripe و PayPal). من خلال تقديم معلومات الدفع، فإنك تقر بأنك مصرح لك باستخدام طريقة الدفع المختارة. نحتفظ بالحق في رفض أو إلغاء أي طلب حسب تقديرنا.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٦. إخلاء المسؤولية والقيود</h2>
            <p className="text-foreground leading-relaxed">
              يتم تقديم جميع الخدمات <strong>"كما هي"</strong> و <strong>"حسب التوفر"</strong>. نحن لا نقدم أي ضمانات من أي نوع، صريحة أو ضمنية، فيما يتعلق بدقة أو اكتمال أو موثوقية أو ملاءمة الخدمات.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              إلى أقصى حد يسمح به القانون، لن تكون Soulmapy مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية ناشئة عن أو متعلقة باستخدامك للخدمات أو الموقع.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٧. سياسة الاسترداد</h2>
            <p className="text-foreground leading-relaxed">
              نظراً للطبيعة الرقمية الفورية لخدماتنا، <strong>جميع المبيعات نهائية.</strong> لا يتم تقديم استردادات بمجرد إرسال القراءة إليك.
            </p>
            <p className="text-foreground leading-relaxed">
              الاستثناءات الوحيدة هي:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              <li>إذا لم تتلق قراءتك في غضون 14 يوماً من تاريخ الشراء بسبب خطأ من جانبنا.</li>
              <li>إذا كانت القراءة المستلمة مختلفة بشكل كبير عن الخدمة الموصوفة في وقت الشراء.</li>
            </ul>
            <p className="text-foreground leading-relaxed pt-2">
              يرجى الاطلاع على <a href="/ar/refund" className="text-primary hover:underline">سياسة الاسترداد</a> الكاملة لمزيد من التفاصيل.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٨. التعديلات على الشروط</h2>
            <p className="text-foreground leading-relaxed">
              نحتفظ بالحق في تعديل أو استبدال هذه الشروط في أي وقت. إذا كان التعديل جوهرياً، فسوف نبذل جهوداً معقولة لتقديم إشعار لمدة 30 يوماً على الأقل قبل دخول أي شروط جديدة حيز التنفيذ. استخدامك المستمر للموقع أو الخدمات بعد أي تعديلات يشكل قبولاً للشروط المعدلة.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٩. القانون الحاكم</h2>
            <p className="text-foreground leading-relaxed">
              تخضع هذه الشروط وتفسر وفقاً لقوانين الولاية القضائية التي تعمل فيها Soulmapy، دون إشارة إلى مبادئ تعارض القوانين الخاصة بها.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 border-t border-border/30 pt-6">
            <h2 className="text-2xl font-bold text-primary">اتصل بنا</h2>
            <p className="text-foreground leading-relaxed">
              إذا كانت لديك أي أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا على:
            </p>
            <p className="text-foreground">
              <strong>البريد الإلكتروني:</strong>{' '}
              <a href="mailto:contact@soulmapy.com" className="text-primary hover:underline">
                contact@soulmapy.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAR;
