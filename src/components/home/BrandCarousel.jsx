import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo2 from "../../assets/hp.jpg";
import logo1 from "../../assets/bro.png";
import logo3 from "../../assets/epson.png";
import logo4 from "../../assets/xerox.jpg";
import logo5 from "../../assets/sam.png";
import logo6 from "../../assets/can.png";
import logo7 from "../../assets/dell.png";


const BrandCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  const logos = [
    { id: 1, src: logo1, alt: "Logo 1" },
    { id: 2, src: logo2, alt: "Logo 2" },
    { id: 3, src: logo3, alt: "Logo 3" },
    { id: 4, src: logo4, alt: "Logo 4" },
    { id: 5, src: logo5, alt: "Logo 5" },
    { id: 6, src: logo6, alt: "Logo 6" },
    { id: 7, src: logo7, alt: "Logo 7" }
  ];
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {logos.map((logo) => (
          <div key={logo.id} className='border-end border-dark'>
            <img src={logo.src} alt={logo.alt} className="img-fluid p-2 mx-auto d-block " style={{height: "80px"}} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
