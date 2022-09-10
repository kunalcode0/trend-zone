import React from "react";
import Announce from "./components/announcement/Announce";
import Category from "./components/categories/Category";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/products/Product";
import Selection from "./components/selection/Selection";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <>
      <Announce />
      <Navbar />
      <Selection />
      <Slider />
      <Category />
      <Product />
      <Contact />
      <Footer />
     
    </>
  );
}

export default App;
