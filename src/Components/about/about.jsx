<<<<<<< HEAD
import React from "react";
import "./about.css";
import Me from "../../assets/Moseley.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
=======
import React from 'react'
import "./about.css";
import Me from "../../assets/Moseley.jpeg";
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"


const about = () => {
  return (
    <section id='about'>
>>>>>>> 4741c1dc1b2932579500592368b2d55db5cfb50b
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
<<<<<<< HEAD
            <img src={Me} alt="About me" />
=======
              <img src={Me} alt="About image" />
>>>>>>> 4741c1dc1b2932579500592368b2d55db5cfb50b
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
<<<<<<< HEAD
            <article className="about__card">
              {" "}
              {/* first card */}
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years experience</small>
            </article>
            <article className="about__card">
              {" "}
              {/* second  card */}
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>35+ clients WorldWide</small>
            </article>
            <article className="about__card">
              {" "}
              {/* Third card */}
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>27+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ipsa aut sequi dolore eius suscipit quia dolor illo recusandae,
            consectetur temporibus ipsum voluptatibus ut esse sit! Laboriosam
            perspiciatis quos debitis.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
=======
              <article className="about__card">     {/* first card */}
                <FaAward className='about_icon' />
                <h5>Experience</h5>
                <small>2+ years experience</small>
              </article>  
              <article className="about__card">    {/* second  card */}
               <FiUsers className='about_icon' />
               <h5>Clients</h5>
               <small>35+ clients WorldWide</small>
               </article>
              <article className="about__card">     {/* Third card */}
                <VscFolderLibrary className='about_icon' />
                <h5>Projects</h5>
                <small>27+ completed</small>
             </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa aut sequi dolore eius suscipit quia dolor illo recusandae, consectetur temporibus ipsum voluptatibus ut esse sit! Laboriosam perspiciatis quos debitis.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's chat</a>
        </div>
      </div>
    </section>
  )
}

export default about
>>>>>>> 4741c1dc1b2932579500592368b2d55db5cfb50b
