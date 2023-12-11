import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


    return (
      <div className="prandes" data-aos="fade-up" data-aos-duration={200}  >
        <h2 className="" > شركائنا </h2>
        <Slider {...settings}>
            <div className="mt-4 " data-aos="fade-up" data-aos-duration={400}  >
            <img className="w-100" src="/Image/partners/3elm.png" alt="prandes" />
          </div>
          <div className="mt-4"  data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/afer.png" alt="prandes" />
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/dipdux.png" alt="prandes" />
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/educationclinic.png" alt="prandes" />
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/eduhub21.png" alt="prandes" />
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/flexi.png" alt="prandes" />
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/infology.png" alt="prandes" />
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/m3afer.png" alt="prandes" />
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-duration={400}>
            <img className="w-100" src="/Image/partners/mohamedshaltout.png" alt="prandes" />
          </div>
          <div className="mt-4"data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/octucode.png" alt="prandes" />
          </div>
          <div className="mt-4"data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/ramzyabdelaziz.png" alt="prandes" />
          </div>
          <div className="mt-4"data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/taleek.png" alt="prandes" />
          </div>
          <div className="mt-4"data-aos="fade-up" data-aos-duration={400} >
            <img className="w-100" src="/Image/partners/tawgeh.png" alt="prandes" />
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-duration={400}>
            <img className="w-100" src="/Image/partners/zAmericanEnglish.png" alt="prandes" />
          </div>
        </Slider>
      </div>
    );
  }
}