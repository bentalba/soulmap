import { CosmicBackground } from '@/components/CosmicBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const RefundAR = () => {
  return (
    <div className="min-h-screen relative" dir="rtl">
      <CosmicBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl relative z-10">
        <div className="space-y-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border/30 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="cosmic-gradient">سياسة الاسترجاع والاسترداد</span>
            </h1>
            <p className="text-muted-foreground">آخر تحديث: 14 نوفمبر 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              في Soulmapy، نلتزم بتقديم قراءات فلكية عالية الجودة ومخصصة. نظراً للطبيعة الرقمية الفورية لخدماتنا، يرجى قراءة سياسة الاسترداد الخاصة بنا بعناية قبل إجراء عملية شراء.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">١. سياسة عدم الاسترداد العامة</h2>
            <p className="text-foreground leading-relaxed">
              <strong>جميع المبيعات نهائية.</strong> بمجرد شراء القراءة ومعالجتها وإرسالها إلى عنوان بريدك الإلكتروني، <strong>لا يمكن استردادها أو استبدالها أو إلغاؤها.</strong>
            </p>
            <p className="text-foreground leading-relaxed">
              ينطبق ذلك لأن:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              <li>قراءاتنا مخصصة بالكامل بناءً على بياناتك الفريدة ولا يمكن إعادة بيعها أو إعادة استخدامها.</li>
              <li>بمجرد تسليم المنتج الرقمي، يكون قد تم استهلاكه ولا يمكن "إرجاعه".</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٢. الاستثناءات: متى يمكننا تقديم استرداد</h2>
            <p className="text-foreground leading-relaxed">
              على الرغم من سياستنا العامة، قد نقدم استرداداً <strong>فقط</strong> في الحالات التالية:
            </p>
            
            <div className="space-y-4 pr-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">أ) عدم التسليم بسبب خطأ من جانبنا:</h3>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                  <li>إذا لم تتلق قراءتك في غضون <strong>14 يوماً من تاريخ الشراء</strong> ولم تتلق أي اتصال منا يوضح التأخير، يحق لك طلب استرداد كامل.</li>
                  <li>يجب عليك الاتصال بنا على <a href="mailto:contact@soulmapy.com" className="text-primary hover:underline">contact@soulmapy.com</a> لحل مشكلة التسليم أولاً. إذا لم نتمكن من تسليم قراءتك، فسنقوم باسترداد أموالك بالكامل.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">ب) خطأ كبير في الخدمة:</h3>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                  <li>إذا تلقيت قراءة <strong>مختلفة بشكل كبير</strong> عن نوع الخدمة الموصوفة في وقت الشراء (على سبيل المثال، طلبت قراءة الخارطة الفلكية لكنك تلقيت قراءة توافق).</li>
                  <li>يجب عليك إخطارنا في غضون <strong>48 ساعة من استلام القراءة</strong> لتكون مؤهلاً لاسترداد أو تصحيح الطلب.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">ج) مشاكل فنية أو ملفات تالفة:</h3>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                  <li>إذا كان الملف المرسل إليك تالفاً أو لا يمكن فتحه، فيرجى إخطارنا على الفور. سنقوم بإعادة إرسال القراءة أو تقديم استرداد كامل إذا تعذر حل المشكلة.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٣. ما لا يؤهلك لاسترداد الأموال</h2>
            <p className="text-foreground leading-relaxed">
              <strong>لن يتم تقديم استردادات</strong> في الحالات التالية:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              <li><strong>عدم الرضا الشخصي:</strong> إذا كنت ببساطة لا توافق على أو لا تعجبك المعلومات الواردة في قراءتك. القراءات الفلكية ذاتية وتفسيرية بطبيعتها.</li>
              <li><strong>بيانات ميلاد غير صحيحة:</strong> إذا قدمت معلومات خاطئة أو غير دقيقة (تاريخ / وقت / مكان ميلاد خاطئ) ونتج عن ذلك قراءة غير دقيقة. أنت المسؤول عن صحة بياناتك.</li>
              <li><strong>"تغيير الرأي":</strong> إذا قررت أنك لم تعد تريد القراءة بعد شرائها وتسليمها.</li>
              <li><strong>التأخير بسبب إجراءات من جانبك:</strong> إذا لم ترد على رسائل البريد الإلكتروني أو طلبات المعلومات الإضافية التي أدت إلى تأخير في التسليم.</li>
              <li><strong>مشاكل البريد الإلكتروني خارج سيطرتنا:</strong> إذا ذهبت قراءتك إلى مجلد البريد العشوائي / غير المرغوب فيه، أو إذا قدمت عنوان بريد إلكتروني غير صحيح، ولم تتصل بنا في غضون 14 يوماً.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٤. كيفية طلب استرداد</h2>
            <p className="text-foreground leading-relaxed">
              إذا كنت تعتقد أنك مؤهل لاسترداد بموجب هذه السياسة:
            </p>
            <ol className="list-decimal pr-6 space-y-2 text-muted-foreground">
              <li>اتصل بنا على <a href="mailto:contact@soulmapy.com" className="text-primary hover:underline">contact@soulmapy.com</a> في أقرب وقت ممكن.</li>
              <li>قدم رقم طلبك وسبب طلب الاسترداد بوضوح.</li>
              <li>قم بتضمين أي لقطات شاشة أو تفاصيل ذات صلة (على سبيل المثال، دليل على عدم التسليم، أو ملف تالف).</li>
            </ol>
            <p className="text-foreground leading-relaxed pt-2">
              سنقوم بمراجعة طلبك والرد في غضون <strong>3-5 أيام عمل</strong>. إذا تمت الموافقة على استردادك، فسيتم معالجته إلى طريقة الدفع الأصلية الخاصة بك في غضون 7-10 أيام عمل.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٥. الإلغاءات</h2>
            <p className="text-foreground leading-relaxed">
              بمجرد تقديم الطلب، يتم الالتزام بموارد لإنشاء قراءتك المخصصة. لذلك:
            </p>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              <li>إذا كنت ترغب في <strong>إلغاء طلبك قبل بدء العمل</strong>، فاتصل بنا في أقرب وقت ممكن. إذا لم نبدأ بعد في قراءتك، فقد نكون قادرين على تقديم استرداد كامل أو جزئي.</li>
              <li><strong>لا يمكن إلغاء أو استرداد</strong> الطلبات بمجرد إرسال القراءة.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٦. رسوم رد المبالغ المدفوعة والمعاملات</h2>
            <p className="text-foreground leading-relaxed">
              يرجى ملاحظة أنه إذا تم إصدار استرداد، فقد لا نكون قادرين على استرداد أي رسوم معاملات لجهات خارجية (على سبيل المثال، رسوم Stripe / PayPal أو رسوم التحويل الدولية) التي تكبدتها أثناء عملية الشراء.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">٧. تحديث السياسة</h2>
            <p className="text-foreground leading-relaxed">
              نحتفظ بالحق في تحديث أو تغيير سياسة الاسترداد هذه في أي وقت. أي تحديثات ستكون فعالة فور نشرها على موقعنا. يرجى مراجعة هذه الصفحة بشكل دوري.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 border-t border-border/30 pt-6">
            <h2 className="text-2xl font-bold text-primary">اتصل بنا</h2>
            <p className="text-foreground leading-relaxed">
              إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الاسترداد هذه، يرجى عدم التردد في الاتصال بنا:
            </p>
            <p className="text-foreground">
              <strong>البريد الإلكتروني:</strong>{' '}
              <a href="mailto:contact@soulmapy.com" className="text-primary hover:underline">
                contact@soulmapy.com
              </a>
            </p>
            <p className="text-foreground leading-relaxed pt-4 font-medium">
              شكراً لك على ثقتك بـ Soulmapy لتوجيهك في رحلتك الكونية. نحن نقدر دعمك وفهمك.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefundAR;
