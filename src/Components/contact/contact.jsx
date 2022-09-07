import React from 'react'
import "./contact.css";
import { MdMailOutline } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import  { useRef } from "react"
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rm26l5q', 'template_swl3j9u', e.target, 'tSvDbN2ZfzY1jm4ID')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option' >
            <MdMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hiremoses411@gmail.com</h5>
            <a href="mmailto:hiremoses411@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram  className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Ezekiel Moses</h5>
            <a href="https://www.instagram.com/princecodes4115/" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348136940073</h5>
            <a href="https://api.whatsapp.com/send?phone08136940073" target="_blank">Send a message</a>
          </article>
        </div>
        <form useref="form" onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' />
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="message" rows="10"></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact