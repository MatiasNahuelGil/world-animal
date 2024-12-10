import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SLIDERIMAGES } from "../../data/SliderInfo";

export const SliderContainer = () => {

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true, 
  };

  return (
    <div style={{ width: "90%", margin: "0 auto", padding: '2em .5em'}}>
      <Slider {...settings}>
        {SLIDERIMAGES.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={`Imagen ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderContainer;
