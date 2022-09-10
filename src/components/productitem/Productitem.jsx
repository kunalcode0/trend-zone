import React from "react";
import Announce from "../announcement/Announce";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./Productitem.css";
import img1 from "../assets/niketshirt.jpg";

function Productitem() {
  return (
    <>
      <Announce />
      <Navbar />
      <div className="productitem__container">
        <div className="productitem__content">
          <div className="productitem__img">
            <img src={img1} alt="" />
          </div>
          <div className="productitem__description">
            <div className="description__title">
              <h2>Nike T-Shirt 100% Cotton</h2>
              <h3 className="Productitem__price"> RS 400/- only.</h3>
              <h4 className="productitem__delivery"> Free Delivery</h4>
            </div>

            <div className="productitem__selection">
              <div className="productitem__size">
                <h3>Size</h3>
                <select name="select" id="select4">
                  <option selected disabled>
                    Select
                  </option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>

              <div className="productitem__color">
                <h3>Color</h3>
                <div className="color1"></div>
                <div className="color2"></div>
                <div className="color3"></div>
                <div className="color4"></div>
                <div className="color5"></div>
              </div>
            </div>

            <div className="productitem__option">
              <div className="producitem__quantity">
                <h2>Quantity</h2>
                <div className="quantity__minus-btn">-</div>
                <div className="quantity__number">1</div>
                <div className="quantity__plus-btn">+</div>
              </div>

              <div className="productitem__btn">
                <button className="cart__btn"> Add to Cart</button>
                <button className="buy__btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Productitem;
