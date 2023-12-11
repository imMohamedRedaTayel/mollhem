import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

        useEffect(() => {
          AOS.init(); // Initialize AOS on component mount
        }, []);

  return <section className='about' >
    <div className="container">
        <h5 data-aos="fade-up" data-aos-duration={200} > ملهم هي منصة من أجل البناء التربوي والتعليمي، 
        <br/>
        يعمل عليها فريق من الأكاديميين والتربويين العرب بخبرات وتأثير عالمي      </h5>


        <div className="row" data-aos="fade-up" data-aos-duration={400} >
            <div className="col-lg-6">
                <div className="about-Info"  >
                        <div className=' alCenter ' >
                        <img src="/Image/about/Frame (1).png" alt="icon"    />
                        <h3   >تم تأسيسها بتعاون كلاً من:</h3>
                        </div>
                        <h4  > الدكتور | رمزي عبدالعزيز المؤثر التعليمي، صاحب خبرات تدريس بألمانيا وفنلندا لقرابة 14 سنة. 
                        مع باحث الدكتوراه | سامي الفضالي الخبير التربوي ومؤسس مشارك في منظومة فليكسي التعليمية. </h4>
                </div>
                <div className="about-Info mt-4  ">
                        <div className=' alCenter ' >
                        <img src="/Image/about/Frame (2).png" alt="icon" />
                        <h3>أهداف ملهم:</h3>
                        </div>
                        <h4> صناعة محتوى تثقيفي وتوعوي معاصر في كافة نواحي العمل التربوي والتعليمي من أجل النهوض بمستوى المعلم والمربي وكذلك أولياء الأمور في جميع ربوع الوطن العربي. </h4>
                </div>
                <div className="about-Info mt-4 ">
                        <div className=' alCenter ' >
                        <img src="/Image/about/Frame (3).png" alt="icon" />
                        <h3>أولى مبادرات ملهم:</h3>
                        </div>
                        <h4> 1000 معلم عربي مؤثر </h4>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="about-Img">
                    <img className='w-100 ' src="/Image/about/Frame.png" alt="lucters" />
                </div>
            </div>

        </div>

    </div>
  </section>
}

export default About