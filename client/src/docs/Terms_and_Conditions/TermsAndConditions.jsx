import React from 'react';
import './TermsAndConditions.css';

import DiyarahLogo from '/icons/MallStackTitledCleared.png'

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const TermsAndConditions = () => {
  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      <HeroSection />
      <Up />
      <div className="terms-and-conditions-container">
        <header>
          <h1 className="terms-and-conditions-title">شروط وأحكام الاستخدام</h1>
        </header>

        <section>
          <p className="terms-and-conditions-text">
            نرحب بكم في صفحة شروط وأحكام الاستخدام لشركة ديارة العقارية. يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا. يعتبر استخدامكم للخدمات تأكيدًا على موافقتكم والالتزام بتلك الشروط والأحكام.
          </p>
        </section>

        <section>
          <h2>1. الاستخدام والوصول</h2>
          <p>نمنحكم ترخيصًا غير حصري وغير قابل للانتقال للوصول واستخدام خدماتنا وفقًا لهذه الشروط والأحكام. يجب عليكم عدم نقل أو مشاركة تفاصيل الوصول الخاصة بكم مع أي شخص آخر.</p>
        </section>

        <section>
          <h2>2. المحتوى والحقوق</h2>
          <p>جميع الحقوق الملكية الفكرية للمحتوى المقدم من خلال خدماتنا تعود إلى شركة ديارة العقارية. يجب عليكم عدم استخدام أو نسخ أو نشر أو نقل أي جزء من المحتوى دون إذن كتابي.</p>
        </section>

        <section>
          <h2>3. التزامات المستخدم</h2>
          <p>عند استخدام خدماتنا، يجب عليكم الامتناع عن نشر أو نقل أي محتوى يكون مسيئًا أو غير قانوني. نحتفظ بالحق في حظر الوصول لأي مستخدم يخالف هذه التزامات.</p>
        </section>

        <section>
          <h2>4. التعويض</h2>
          <p>أنتم توافقون على تعويض شركة ديارة العقارية وحمايتها من أي مطالبات أو خسائر ناتجة عن استخدامكم لخدماتنا أو انتهاككم لهذه الشروط والأحكام.</p>
        </section>

        <section>
        <h2>5. شكرًا لاستخدامكم خدماتنا</h2>
          <p>
          نقدر اختياركم لاستخدام خدماتنا في مجال العقارات. نحن نسعى دائمًا لتوفير تجربة ممتازة وفعّالة لمستخدمينا.
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

export default TermsAndConditions;
