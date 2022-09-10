import React from 'react'
import './Contact.css'

function Contact() {
  return (
   <>
   <div className="contact__container">
    <p className="contact__title">Contact Us</p>
    <h2 className="contact__p">Stay in Touch</h2>
    <div className="contact__content">
        <div className="contact__input">
            <input type="email" placeholder='Enter Your E-mail' />
            <button className='contact__btn'>Send</button>
        </div>
        <div className="contact__description">stay in touch for exclusive offer's and update's.</div>
    </div>
   </div>
   </>
  )
}

export default Contact
