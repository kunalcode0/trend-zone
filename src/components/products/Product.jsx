import React from "react";
import "./Product.css";
import { productapi } from "./productapi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {useState} from 'react'

function Product() {
    const [isActive, setIsActive] = useState(false);
    const change = event => {
      // 👇️ toggle isActive state on click
      setIsActive(current => !current);
    };
    const [iscart, setiscart] = useState(false);
    const cart = event => {
        // 👇️ toggle isActive state on click
        setiscart(current => !current);
      };
  return (
    <>
      <div className="product__title-1">Top Products</div>
      <Swiper
        className="container achivement__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <div className="product__container">
          {productapi.map((elem) => {
            const { id, src } = elem;
            return (
              <>
                <SwiperSlide className="product__content" key={id}>
                  <div className="product__img">
                    <img src={src} alt="" />
                  </div>
                  <div className="product__icon">
                    <AiOutlineHeart className={isActive ? 'icon__like-clicked' : 'icon__like'} onClick={change}/>
                    <AiOutlineShoppingCart  className={iscart ? 'icon__cart-clicked' : 'icon__cart'} onClick={cart}/>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </div>
      </Swiper>
    </>
  );
}

export default Product;
