import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const PrivacyAR = () => {
  return (
    <div className="min-h-screen relative" dir="rtl">
      <CosmicBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl relative z-10">
        <div className="space-y-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border/30 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="cosmic-gradient">سياسة الخصوصية</span>
            </h1>
            <p className="text-muted-foreground">آخر تحديث: 14 نوفمبر 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              توضح سياسة الخصوصية هذه كيفية قيام Soulmapy ("نحن" أو "لنا" أو "الخاص بنا") بجمع معلوماتك الشخصية واستخدامها والكشف عنها وحمايتها عند زيارتك لموقعنا الإلكتروني ("الموقع") أو شراء خدماتنا.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              من خلال الوصول إلى الموقع أو استخدام خدماتنا، فإنك توافق صراحةً على جمع معلوماتك واستخدامها ومعالجتها كما هو موضح في هذه السياسة. يتضمن ذلك معالجة بيانات ميلادك الحساسة، والتي تعد ضرورية لنا لتقديم خدماتنا.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">١. المعلومات التي نجمعها</h2>
            <p className="text-foreground leading-relaxed">
              نجمع المعلومات اللازمة لتقديم خدماتنا وتحسين تجربتك.
            </p>
            
            <div className="space-y-4 pr-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">أ) المعلومات الشخصية التي تقدمها:</h3>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">بيانات الهوية والاتصال:</strong> اسمك الكامل وعنوان بريدك الإلكتروني.</li>
                  <li><strong className="text-foreground">بيانات الميلاد الحساسة:</strong> تاريخ ميلادك، ووقت الميلاد الدقيق، ومكان الميلاد. هذه البيانات مطلوبة لإنشاء وتقديم قراءتك الفلكية المخصصة.</li>
                  <li><strong className="text-foreground">بيانات الدفع:</strong> تتم معالجة معلومات الدفع الخاصة بك بشكل آمن من خلال بوابات الدفع التابعة لجهات خارجية (مثل Stripe و PayPal). نحن لا نخزن تفاصيل بطاقتك الائتمانية الكاملة على خوادمنا.</li>
                  <li><strong className="text-foreground">الاتصالات:</strong> أي معلومات تقدمها عند الاتصال بنا للحصول على الدعم أو تضمينها في ملاحظات طلبك.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">ب) البيانات التقنية المجمعة تلقائياً:</h3>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">بيانات الاستخدام:</strong> معلومات حول كيفية استخدامك لموقعنا، بما في ذلك الصفحات التي تمت زيارتها والوقت المستغرق.</li>
                  <li><strong className="text-foreground">بيانات الجهاز والاتصال:</strong> عنوان IP الخاص بك، ونوع المتصفح، ونظام التشغيل، ومعلومات الجهاز.</li>
                  <li><strong className="text-foreground">بيانات ملفات تعريف الارتباط:</strong> نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتشغيل الموقع، وضمان الأمان، وتحليل حركة المرور.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٢. كيف نستخدم معلوماتك (الأساس القانوني)</h2>
            <p className="text-foreground leading-relaxed">
              نستخدم معلوماتك فقط للأغراض المحددة التالية وعلى الأسس القانونية التالية:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">للوفاء بعقدنا:</strong> لمعالجة دفعتك وتقديم القراءات الفلكية المخصصة التي اشتريتها. معالجة بيانات ميلادك ضرورية لتنفيذ هذا العقد.</li>
              <li><strong className="text-foreground">للتواصل:</strong> لإرسال تأكيدات الطلب والقراءات المكتملة والرد على استفساراتك.</li>
              <li><strong className="text-foreground">للمصالح المشروعة:</strong> لتحسين وظائف موقعنا، وتحليل اتجاهات المستخدمين للأغراض الداخلية، وضمان أمان موقعنا (مثل منع الاحتيال).</li>
              <li><strong className="text-foreground">للامتثال للالتزامات القانونية:</strong> للاحتفاظ بالسجلات كما تقتضي الضرائب أو القوانين المعمول بها الأخرى.</li>
            </ul>
            <p className="text-foreground leading-relaxed font-medium pt-2">
              لن نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأي طرف ثالث لأغراض تسويقية أبداً.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٣. تخزين البيانات وحمايتها</h2>
            <p className="text-foreground leading-relaxed">
              نحن نأخذ أمان معلوماتك على محمل الجد ونستخدم تدابير أمنية معقولة تجارياً لحمايتها من الوصول غير المصرح به أو الكشف أو التعديل أو الإتلاف.
            </p>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">التشفير:</strong> يتم نقل البيانات عبر اتصالات آمنة (SSL/TLS).</li>
              <li><strong className="text-foreground">التخزين:</strong> يتم تخزين معلوماتك الشخصية على خوادم آمنة مع وصول محدود.</li>
              <li><strong className="text-foreground">الاحتفاظ:</strong> نحتفظ ببياناتك الشخصية فقط طالما كان ذلك ضرورياً لتقديم خدماتنا والوفاء بالتزاماتنا القانونية.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٤. مشاركة المعلومات مع أطراف ثالثة</h2>
            <p className="text-foreground leading-relaxed">
              نحن لا نبيع أو نشارك معلوماتك الشخصية إلا في الظروف المحدودة التالية:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">مقدمو الخدمات:</strong> قد نشارك بياناتك مع مقدمي خدمات موثوقين (مثل معالجات الدفع، ومضيفي المواقع) الذين يساعدوننا في تقديم خدماتنا.</li>
              <li><strong className="text-foreground">الامتثال القانوني:</strong> قد نكشف عن معلوماتك إذا طلبت القانون ذلك أو إذا كان ذلك ضرورياً لحماية حقوقنا أو سلامة الآخرين.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٥. حقوقك</h2>
            <p className="text-foreground leading-relaxed">
              اعتماداً على موقعك، قد يكون لك حقوق معينة فيما يتعلق ببياناتك الشخصية:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">الوصول والتصحيح:</strong> يمكنك طلب نسخة من معلوماتك الشخصية أو تصحيح المعلومات غير الدقيقة.</li>
              <li><strong className="text-foreground">الحذف:</strong> يمكنك طلب حذف بياناتك، رهناً بالتزاماتنا القانونية.</li>
              <li><strong className="text-foreground">الاعتراض والتقييد:</strong> يمكنك الاعتراض على معالجة معينة أو طلب تقييد استخدام بياناتك.</li>
              <li><strong className="text-foreground">قابلية النقل:</strong> يمكنك طلب نقل بياناتك إلى طرف آخر.</li>
            </ul>
            <p className="text-foreground leading-relaxed pt-2">
              لممارسة أي من هذه الحقوق، يرجى الاتصال بنا على: <a href="mailto:contact@soulmapy.com" className="text-primary hover:underline">contact@soulmapy.com</a>
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٦. ملفات تعريف الارتباط</h2>
            <p className="text-foreground leading-relaxed">
              نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربتك. يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٧. خصوصية الأطفال</h2>
            <p className="text-foreground leading-relaxed">
              خدماتنا غير موجهة للأفراد دون سن 18 عاماً. نحن لا نجمع معلومات شخصية عن قصد من الأطفال.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٨. التغييرات على هذه السياسة</h2>
            <p className="text-foreground leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية عن طريق نشر السياسة الجديدة على هذه الصفحة مع تاريخ "آخر تحديث" محدث.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 border-t border-border/30 pt-6">
            <h2 className="text-2xl font-bold text-primary">اتصل بنا</h2>
            <p className="text-foreground leading-relaxed">
              إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:
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

export default PrivacyAR;
