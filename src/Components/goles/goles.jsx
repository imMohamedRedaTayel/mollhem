import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/swiper.min.css';


// import required modules
import { Pagination } from "swiper";


const Goles = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS on component mount
      }, []);

  return <>
    <section className='goles' >
        <div className="container">     
            <h6 className='position-relative ' data-aos="fade-up" data-aos-duration={200}  > عن المبادرة </h6>
        </div>
        <div className="container" data-aos="fade-up" data-aos-duration={400} >
        <Swiper
        slidesPerView={3.3}
        spaceBetween={30}
        pagination={{
            clickable: true,
          }}
            modules={[Pagination]}
            className="mySwiper"

            // responsive 

            breakpoints={{
                // نطاق شاشة الهواتف الذكية

                400: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },

                500: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },

                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // نطاق شاشة الأجهزة اللوحية
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // نطاق شاشة الحواسب المكتبية
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}


        >
            <SwiperSlide>
                <div className="goles-Info mt-5  ">
                    <div className='alCenter' >
                        <img src="/Image/about/Frame (1).png" alt="icons" className='pl-3' />
                        <h5>تهدف المبادرة التدريبية إلى</h5>                        
                    </div>
                    <p> تحسين جودة التعليم وتأثيره على حياة الطلاب، حيث تقدم دورة تدريبية للمعلمين تشمل محاضرات وورش عمل وتدريبات عملية، وستقدم مجانًا لأول 1000 معلم </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="goles-Info mt-5  ">
                    <div className='alCenter' >
                        <img src="/Image/about/Frame (1).png" alt="icons" className='pl-3' />
                        <h5>تهدف المبادرة التدريبية إلى</h5>                        
                    </div>
                    <p> تحسين جودة التعليم وتأثيره على حياة الطلاب، حيث تقدم دورة تدريبية للمعلمين تشمل محاضرات وورش عمل وتدريبات عملية، وستقدم مجانًا لأول 1000 معلم </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="goles-Info mt-5  ">
                    <div className='alCenter' >
                        <img src="/Image/about/Frame (1).png" alt="icons" className='pl-3' />
                        <h5>تهدف المبادرة التدريبية إلى</h5>                        
                    </div>
                    <p> تحسين جودة التعليم وتأثيره على حياة الطلاب، حيث تقدم دورة تدريبية للمعلمين تشمل محاضرات وورش عمل وتدريبات عملية، وستقدم مجانًا لأول 1000 معلم </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="goles-Info mt-5  ">
                    <div className='alCenter' >
                        <img src="/Image/about/Frame (1).png" alt="icons" className='pl-3' />
                        <h5>تهدف المبادرة التدريبية إلى</h5>                        
                    </div>
                    <p> تحسين جودة التعليم وتأثيره على حياة الطلاب، حيث تقدم دورة تدريبية للمعلمين تشمل محاضرات وورش عمل وتدريبات عملية، وستقدم مجانًا لأول 1000 معلم </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="goles-Info mt-5  ">
                    <div className='alCenter' >
                        <img src="/Image/about/Frame (1).png" alt="icons" className='pl-3' />
                        <h5>تهدف المبادرة التدريبية إلى</h5>                        
                    </div>
                    <p> تحسين جودة التعليم وتأثيره على حياة الطلاب، حيث تقدم دورة تدريبية للمعلمين تشمل محاضرات وورش عمل وتدريبات عملية، وستقدم مجانًا لأول 1000 معلم </p>
                </div>
            </SwiperSlide>
   
        </Swiper>
        {/* <div className="row">

            <div className="col-lg-4">
                
            </div>
            <div className="col-lg-4">
                <div className="goles-Info mt-5  ">
                    <div className='alCenter' >
                        <img src="/Image/about/Frame (2).png" alt="icons" className='pl-3' />
                        <h5>تهدف المبادرة التدريبية إلى</h5>                        
                    </div>
                    <p> تحسين جودة التعليم وتأثيره على حياة الطلاب، حيث تقدم دورة تدريبية للمعلمين تشمل محاضرات وورش عمل وتدريبات عملية، وستقدم مجانًا لأول 1000 معلم </p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="goles-Info mt-5  ">
                    <div className='alCenter' >
                        <img src="/Image/about/Frame (3).png" alt="icons" className='pl-3' />
                        <h5>تهدف المبادرة التدريبية إلى</h5>                        
                    </div>
                    <p> تحسين جودة التعليم وتأثيره على حياة الطلاب، حيث تقدم دورة تدريبية للمعلمين تشمل محاضرات وورش عمل وتدريبات عملية، وستقدم مجانًا لأول 1000 معلم </p>
                </div>
            </div>
        </div> */}
        </div>
    </section>
  </>
}

export default Goles




