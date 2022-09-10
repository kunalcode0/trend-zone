import React from "react";
import "./Slider.css";
import {sliderapi} from './sliderapi'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

function Slider() {
  
  return (
    <>
      <div className="slider__container">

      <Swiper
        className="container achivement__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
       
        {sliderapi.map((elm,index)=>{
            const {id, h1, src, h2} = elm;
        {
          return(
            <SwiperSlide className="slider__content" key={id}>
                <div className="slider__img">
                    <img src={src} alt="" />
                </div>
                <div className="slider__description">
                    <h1>{h1}</h1>
                    <h2>{h2}</h2>
                    <button className="slider__btn">Shop Now</button>
                </div>
            </SwiperSlide>
          )
        }
       })}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
