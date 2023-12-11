import React from 'react'
import { Link as Scroll} from 'react-scroll';


const Hero = () => {
  return <>
  
    <div className="hero alCenter ">
        <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="hero-text">
                <h1>“مُلْهمْ”</h1>
                <h2>1000معلم مؤثر،</h2>
                <h3>يرسمون مستقبل الأجيال</h3>
                <p>التميز لن يأتيك على طبقٍ من ذهب، فتدريسك بالطرق التقليدية لن يمنحك الفرصة الكاملة لإضافة أثر وبصمة في حياتك أو حياة طلابك</p>
                <div className="buttons">
                    <button className='ml-3' > بادر بالحجز </button>
                    <Scroll spy={ true }  smooth={true} offset={ -60 }  to="video" > <img className='ml-1 ' src="/Image/header/Frame 404.png" alt="Video" /> <span> مشاهده الفيديو </span> </Scroll>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="hero-Img">
                    <img src="/Image/header/team.png" alt="Team" />
                </div>
            </div>
        </div>
        </div>
        <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,96L120,133.3C240,171,480,245,720,245.3C960,245,1200,171,1320,133.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
  
  </>
}

export default Hero