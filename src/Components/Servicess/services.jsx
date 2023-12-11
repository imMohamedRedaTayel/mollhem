import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS on component mount
      }, []);

  return <>
  
  <section className='services   ' >
    <div className="container">
        <h5 data-aos="fade-up" data-aos-duration={200} > محاور الدورة </h5>
        <div className="title"  >
            <h4>لماذا نُعلم:</h4>
            <p>اكتشف الهدف الأعمق وراء التدريس وما هو دورك وقيمتك الحقيقية كمعلم ملهم ومؤثر في حياة طلابك.</p>
        </div>
        <div className="row d-flex  justify-content-center  align-items-center " data-aos="fade-up" data-aos-duration={700} >
            <div className="col-lg-6">
                <ul className='text-services' >
                    <li data-aos="fade-up" data-aos-duration={300} >ستتعرف على قصص نجاح ملهمة لشخصيات أضافت الكثير للبشرية وكان السبب الرئيسي في ذلك هو المعلم المربي.</li>
                    <li data-aos="fade-up" data-aos-duration={400} >تعلم كيفية تصميم بيئة تعليمية احترافية وجذابة تعزز التعلم والفهم بعمق واكتشاف المواهب ونقاط القوة لدى طلابك على اختلاف قدراتهم وتحصيلهم الدراسي.</li>
                    <li data-aos="fade-up" data-aos-duration={500} > ستتعرف على أهم المهارات التي تجعل منك معلم معاصر واحترافي ومن خلالها تستطيع أن تلتحق بأفضل المؤسسات التعليمية أو تنشيء منصتك للتدريس اونلاين. </li>
                </ul>
            </div>
            <div className="col-lg-6">
                <div className="img-servises">
                    <img  data-aos="fade-up" data-aos-duration={400} className='w-100 mb-4 ' src="/Image/services/Rectangle 340.png" alt="" />
                </div>
            </div>


            <div className="col-lg-6">
                <ul className='text-services' >
                    <li data-aos="fade-up" data-aos-duration={300} >ستتعرف على قصص نجاح ملهمة لشخصيات أضافت الكثير للبشرية وكان السبب الرئيسي في ذلك هو المعلم المربي.</li>
                    <li data-aos="fade-up" data-aos-duration={400} >تعلم كيفية تصميم بيئة تعليمية احترافية وجذابة تعزز التعلم والفهم بعمق واكتشاف المواهب ونقاط القوة لدى طلابك على اختلاف قدراتهم وتحصيلهم الدراسي.</li>
                    <li data-aos="fade-up" data-aos-duration={500} > ستتعرف على أهم المهارات التي تجعل منك معلم معاصر واحترافي ومن خلالها تستطيع أن تلتحق بأفضل المؤسسات التعليمية أو تنشيء منصتك للتدريس اونلاين. </li>
                </ul>
            </div>
            <div className="col-lg-6">
                <div className="img-servises">
                    <img data-aos="fade-up" data-aos-duration={400} className='w-100 mb-4  ' src="/Image/services/Rectangle 340 (1).png" alt="" />
                </div>
            </div>


            <div className="col-lg-6">
                <ul className='text-services' >
                    <li data-aos="fade-up" data-aos-duration={300} >ستتعرف على قصص نجاح ملهمة لشخصيات أضافت الكثير للبشرية وكان السبب الرئيسي في ذلك هو المعلم المربي.</li>
                    <li data-aos="fade-up" data-aos-duration={400} >تعلم كيفية تصميم بيئة تعليمية احترافية وجذابة تعزز التعلم والفهم بعمق واكتشاف المواهب ونقاط القوة لدى طلابك على اختلاف قدراتهم وتحصيلهم الدراسي.</li>
                    <li data-aos="fade-up" data-aos-duration={500} > ستتعرف على أهم المهارات التي تجعل منك معلم معاصر واحترافي ومن خلالها تستطيع أن تلتحق بأفضل المؤسسات التعليمية أو تنشيء منصتك للتدريس اونلاين. </li>
                </ul>
            </div>
            <div className="col-lg-6">
                <div className="img-servises">
                    <img data-aos="fade-up" data-aos-duration={400} className='w-100 mb-4 ' src="/Image/services/Rectangle 340 (2).png" alt="" />
                </div>
            </div>


        </div>
    </div>
  </section>

  </>
}

export default Services