import React from "react";
import "./Category.css";
import { categoryapi } from "./categoryapi";

function Category() {
  return (
    <>
    <div className="category__title-1">
        CATEGORY
    </div>
      <div className="category__container">
        {categoryapi.map((elem) => {
          const { id, src, title } = elem;
          return (
            <>
              <div className="category__content" key={id}>
                <div className="category__img">
                  <img src={src} alt="" />
                </div>
                <div className="category__title">
                <h2>{title}</h2>
                <button className="category__btn"> Explore</button>
              </div>
              </div>

              
            </>
          );
        })}
      </div>
    </>
  );
}

export default Category;
