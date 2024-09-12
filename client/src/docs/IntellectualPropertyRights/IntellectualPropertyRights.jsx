import React from 'react';
import './IntellectualPropertyRights.css';
import DiyarahLogo from '/icons/MallStackTitledCleared.png'

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const IntellectualPropertyRights = () => {
  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      <HeroSection />
      <Up />
      <div className="intellectual-property-rights-container">
        <header>
          <h1 className="intellectual-property-rights-title">حقوق الملكية الفكرية</h1>
        </header>

        <section>
          <p className="intellectual-property-rights-text">
            نحن في شركة ديارة العقارية نضع حقوق الملكية الفكرية في أولويتنا. جميع الحقوق الملكية الفكرية للمحتوى الذي نقدمه، سواء كانت صورًا، نصوصًا، أو أي مواد أخرى، تعود بالكامل إلى شركتنا.
          </p>
          <p className="intellectual-property-rights-text">
            يُمنع استخدام أو نقل أو تعديل أو نسخ أو نشر أو توزيع أي جزء من محتوانا دون الحصول على إذن كتابي منا. نحن نحتفظ بحقوقنا الكاملة ونتخذ جميع الإجراءات القانونية لحماية حقوقنا في حال حدوث انتهاك.
          </p>
        </section>

        <section>
          <h2>تراخيص الاستخدام</h2>
          <p>
            يُمنح للمستخدمين ترخيص غير حصري وغير قابل للانتقال لاستخدام خدماتنا ومحتوانا بموجب هذه الشروط والأحكام. ومع ذلك، يجب على المستخدمين الامتناع عن استخدام المحتوى بطرق تتعارض مع حقوق الملكية الفكرية المذكورة.
          </p>
        </section>

        <section>
          <h2>التعويض</h2>
          <p>
            يوافق المستخدمون على تعويض شركة ديارة العقارية وحمايتها من أي مطالبات أو خسائر تنشأ عن استخدامهم لخدماتنا أو انتهاكهم لحقوق الملكية الفكرية.
          </p>
        </section>

        <section>
          <h2>الاستخدام الشرعي</h2>
          <p>
            نحن نشجع على استخدام محتوانا بطرق تتوافق مع القوانين والأنظمة. يجب أن يكون الاستخدام الشرعي لمحتوانا في إطار القوانين الوطنية والدولية ذات الصلة.
          </p>
        </section>

        <section>
          <h2>الاستشارة القانونية</h2>
          <p>
            يُفضل دائمًا استشارة مستشار قانوني قبل استخدام أو تعديل أو نشر أي جزء من محتوانا، خاصة إذا كان الاستخدام ينطوي على استخدام تجاري أو تعديل للمحتوى.
          </p>
        </section>

        <section>
          <h2>الابتكار والتعاون</h2>
          <p>
            نحن مفتوحون دائمًا للتفاوض والتعاون فيما يتعلق بحقوق الملكية الفكرية. إذا كنتم مهتمين بالاستفادة من محتوانا بطرق معينة، يرجى التواصل مع فريقنا لمناقشة الاتفاقيات والتفاصيل.
          </p>
        </section>

        <section>
          <h2>شكرًا لاستخدام خدماتنا</h2>
          <p>
          نقدر اختياركم لاستخدام خدماتنا، ونتطلع دائمًا إلى تقديم محتوى عالي الجودة مع احترام تام لحقوق الملكية الفكرية.
          </p>
        </section>

        <div id='plogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IntellectualPropertyRights;
