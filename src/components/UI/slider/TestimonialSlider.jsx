import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
  <div>
    <p className="review__text">
      "I recently ordered from this restaurant and was blown away by the quality of the food and the speed of the delivery. The flavors were amazing and the portions were generous. I will definitely be ordering from here again!"
    </p>
    <div className=" slider__content d-flex align-items-center gap-3 ">
      <img src={ava01} alt="avatar" className=" rounded" />
      <h6>Jane Smith</h6>
    </div>
  </div>
  <div>
    <p className="review__text">
      "I've been a regular customer at this restaurant for years and have never been disappointed. The food is always fresh and delicious, and the service is top-notch. I highly recommend this place to anyone looking for a great meal!"
    </p>
    <div className="slider__content d-flex align-items-center gap-3 ">
      <img src={ava02} alt="avatar" className=" rounded" />
      <h6>John Johnson</h6>
    </div>
  </div>
  <div>
    <p className="review__text">
      "I ordered takeout from this restaurant and was impressed by how easy and convenient the process was. The food was ready on time and tasted amazing. I will definitely be ordering from here again!"
    </p>
    <div className="slider__content d-flex align-items-center gap-3 ">
      <img src={ava03} alt="avatar" className=" rounded" />
      <h6>Samantha Lee</h6>
    </div>
  </div>
</Slider>

  );
};

export default TestimonialSlider;
