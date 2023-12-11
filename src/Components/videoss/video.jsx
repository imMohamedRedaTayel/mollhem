import React, { useState } from 'react'


import Modal from 'react-bootstrap/Modal';


const Video = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return <>
  
    <section className='video' >
        <div className="container">
            <h5 data-aos="fade-up" data-aos-duration={300} > فيديو تعريفي </h5>
            <div className="row d-flex  justify-content-center  align-items-center " data-aos="fade-up" data-aos-duration={600} >
                <div className="col-lg-6">
                    <div className="text-video  ">
                        <p>هي مبادرة تعليمية تهدف إلى تحسين جودة التعليم وتوفير فرص تعليمية أفضل للأطفال والشباب. تقوم المبادرة بتنظيم دورات تدريبية للمعلمين والمدربين في جميع أنحاء العالم، وتهدف إلى تزويدهم بالمهارات والأدوات اللازمة لتحسين جودة التعليم وزيادة فعالية التعلم. تشمل الدورات المقدمة من خلال المبادرة محاضرات وورش عمل وتدريبات عملية، وتغطي مواضيع مثل التعلم النشط والتعليم الإلكتروني والتقويم التربوي وإدارة الفصول الدراسية</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img-video">
                    
                             <span  onClick={handleShow}> <img src="/Image/video/Frame 390.png" alt="" /> </span>
                     

                        <img className='w-100' src="/Image/video/Rectangle 338.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <Modal centered 
        show={show} 
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        >
            
            <Modal.Body className='w-100 ' > 
                 <div className="videoFrame">
                    <iframe  className='video_frame w-100 h-100  ' src={`https://www.youtube.com/embed/DIVztFxCLNo?&autoplay=1`} title="Mr English is now live!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>    
            </Modal.Body>
            
        </Modal>
    </section>

  </>
}
export default Video