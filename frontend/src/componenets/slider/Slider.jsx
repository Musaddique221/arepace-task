import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/img-hardware-1.jpg";
import img2 from "../../assets/img-hardware-2.jpg";
import img3 from "../../assets/img-hardware-4.jpg";
import img4 from "../../assets/img-hardware-5.jpg";

const images = [
  { img: img1, text: "Slide One: Fly with your car anywhere." },
  { img: img2, text: "Slide Two: Elevate your everyday travel." },
  { img: img3, text: "Slide Three: Tomorrow’s ride, today." },
  { img: img4, text: "Slide Four: Experience zero-gravity comfort." },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden px-8 mt-32">
      <h1 className="font-bold text-2xl  lg:text-6xl mb-6 max-w-3xl">Building radically better ways of moving.</h1>
      <Slider {...settings}>
        {images.map((slide, index) => (
          <div key={index} className="px-4">
            <div
              className="h-[555px] bg-cover bg-center relative rounded-[30px] overflow-hidden"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              <div className="absolute top-10 left-10 text-white max-w-[90%]">
                <h1 className="text-2xl lg:text-3xl font-bold">{slide.text}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomArrow = ({ onClick, direction }) => {
  return (
    <div
      className={`absolute top-1/2 z-10 transform -translate-y-1/2 cursor-pointer ${
        direction === "left" ? "left-0" : "right-0"
      }`}
      onClick={onClick}
    >
      <div className="bg-white text-black p-3 rounded-full shadow-lg text-xl font-bold">
        {direction === "left" ? "<" : ">"}
      </div>
    </div>
  );
};

export default HeroSlider;
