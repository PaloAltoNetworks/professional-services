import React from "react";
import Slider from "react-slick";

function SliderComponent(props) {

  const SlickArrowPrev = ({ currentSlide, slideCount, ...props }) => (
    <img
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      src="icons/slider-arrow-back.svg"
    />
  );

  const SlickArrowNext = ({ currentSlide, slideCount, ...props }) => (
    <img
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      src="icons/slider-arrow-forward.svg"
    />
  );

  const defaultSettings = {
    autoplay: true,
    autoplaySpeed: 7500,
    dots: true,
    infinite: true,
    speed: 850,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SlickArrowNext />,
    prevArrow: <SlickArrowPrev />,
    responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...defaultSettings} {...props}>
      {props.children}
    </Slider >
  )
}

export default SliderComponent
