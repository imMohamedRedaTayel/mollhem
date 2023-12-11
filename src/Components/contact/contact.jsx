import React from 'react'

const Contact = () => {
    return <>

        <section className='contact' >
            <div className="container">
                <h5> تكلفة المبادرة </h5>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-Info  ">
                            <img src="/Image/video/Frame 390.png" alt="" />
                            <div className="text-contact">
                                <h4 >تكلفة هذه الدورة الفعلية هي €399,00</h4>
                                <h4 className='clr' >ستقدم لأول 1000 معلم مجاناً تماماً</h4>
                            </div>
                        </div>

                        <div className="contact-Info mt-3 ">
                            <img src="/Image/video/Frame 390.png" alt="" />
                            <div className="text-contact">
                                <h4 > تكلفة الشهادة 49 USD </h4>
                                <h4 className='clr' > إذا رغبت في الحصول على شهادة موثقة
                                    من تعليم وأكاديمية فليكسي
                                    وبإمضاء د. رمزي وجميع السادة المحاضرين   </h4>
                            </div>
                        </div>

                        <div className="title-contact">
                            <h3>فترة الدورة:</h3>
                            <h3> من 16 يونيو إلى 16 أغسطس 2023 </h3>
                            <h3> 30 ساعة تدريبية – 16 ساعة محاضرات وورش عمل </h3>
                            <h3> المحاضرات يومي الجمعة والسبت من كل أسبوع عبر برنامج زووم </h3>
                            <h3 className='active' >  مدة الدورة: شهرين   </h3>
                            <h3> الدورة ستكون باللغة العربية تتخللها المصطلحات التربوية الإنجليزية </h3>
                        </div>

                        <button> سجل الان </button>

                    </div>

                    <div className="col-lg-6   ">
                        <div className="img-contact  ">
                            <img className='active' src="/Image/contact/free.png" alt="" />
                            <img  className='w-100 ' src="/Image/contact/1.webp" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </>
}

export default Contact

