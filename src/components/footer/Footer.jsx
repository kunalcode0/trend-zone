import React from "react";
import "./Footer.css";
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

function Footer() {
  return <>
  
<div className="footer__container">
    <p className="footer__title">Trend Zone</p>
    <div className="footer__content">
        <div className="footer__social">
           <p> <BsInstagram/></p>
            <p><FaFacebookF/></p>
           <p> <BsTwitter/></p>
        </div>
        <div className="footer__category">
            <h2>Categories</h2>
           <div className="footer__category-p"> <p>Shirts</p>
            <p>T-sirts</p>
            <p>Lowers</p>
            <p>Jens</p>
            <p>Track-Pants</p>
            <p>Jackets</p>
            <p>Shoes</p>
            <p>Deos</p>
            <p>Slippers</p>
            <p>Under-Wears</p>
            </div>
        </div>
        <div className="footer__info">
            <div className="footer__contact">
                <h2>Contact</h2>
                <p>+91-8791-412-532</p>
                <p>trendzonebpt@gmail.com</p>
            </div>
            <div className="footer__address">
                <h2>Address</h2>
                <p>Trend-Zone,shop No-10  <br /> Near sonipat bus stand <br />
                Baghpat, Utter-Pradesh(250609) </p>

            </div>
            <div className="footer__timing">
                <h2>Timing</h2>
                <h3>Mon-Sat</h3>
                <p>9 AM - 10 PM</p>
            </div>
        </div>
    </div>
    <div className="footer__copy"> © Kunalcode0. All rights reserved</div>
</div>
  
  </>;
}

export default Footer;
