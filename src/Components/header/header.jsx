import React from 'react'
import "./header.css";
import Cta from "./cta";
import Me from "../../assets/me.jpeg"
import HeaderSocials from './headerSocials';
import {BsFillArrowDownCircleFill} from "react-icons/bs"

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ezekiel Moses</h1>
        <div className="text-light">Frontend Developer</div>
        <Cta />
        <HeaderSocials />
        <img src={Me} alt="my-imgage" className='me'/>

        <a href='#contact' className='scroll_down'><BsFillArrowDownCircleFill /></a>
      </div>
   </header>
  )
}

export default header