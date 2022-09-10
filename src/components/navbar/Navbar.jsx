import React from "react";
import "./Navbar.css";
import {BiSearchAlt2} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import gif1 from '../assets/navgif.gif'
import gif2 from '../assets/basket.gif'
import {useState} from 'react'

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const close = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  return (
    <>
      <div className="navbar">
        <div className="search">
          <div className="language">EN</div>
          <div className="input__items">
            <input className="input" type="search" />
          </div>
          <BiSearchAlt2 className="search__btn"/>
        </div>

        <div className="logo">
            <div className="logo__gif"><img src={gif1} alt="" /></div>
            <div className="logo__title">Trend Zone</div>

        </div>
        <div className={isActive ? 'right__div' : 'right__div-close'}>
            <div className="resister">Resister</div>
            <div className="sign__in">Sign In</div>
            <div className="shopping__cart"><img src={gif2} alt="" /></div>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu onClick={close}/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
