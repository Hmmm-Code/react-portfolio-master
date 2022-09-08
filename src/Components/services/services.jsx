import React from 'react'
import "./services.css";
import {BsCheck} from "react-icons/bs"

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='services__list'>
             <li>
              <BsCheck className='services__list-icon' />
              <p>Customer Experience Consulting.</p>
              </li>
              <li>
              <BsCheck className='services__list-icon' />
              <p>User Research And Analysis.</p>
              </li>
              <li>
              <BsCheck className='services__list-icon' />
              <p>UI And Interaction Design For Your Websites And Applications.</p>
              </li>
              <li>
              <BsCheck className='services__list-icon' />
              <p>Customer Journey Mapping, Users Friendly.</p>
              </li>
              <li>
              <BsCheck className='services__list-icon' />
              <p>Mobile First Responsive Design.</p>
              </li>
              <li>
              <BsCheck className='services__list-icon' />
              <p>Wireframe And Interactive Prototyping, Design Thinking.</p>
               </li>
          </ul>
        </article>
        {/*END OF UI/UX DESIGN */}
        <article className='service'>
  <div className="service__head">
    <h3>Web Development</h3>
  </div>
  <ul className='services__list'>
     <li>
      <BsCheck className='services__list-icon' />
      <p>Create And Maintain  Websites.</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>Builds Responsive, Interactive, User Friendly Websites.</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>I Offer Web Support And Maintenance.</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>Custom Website That Perfect Your Business Or Personal Site.</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>Search Engine Optimization (SEO).</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>Revamp Your Online Presence With Web Development Service .</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>Content Management System.</p>
      </li>
  </ul>
</article>
        {/* END OF WEB DEVELOPMENT */}
<article className='service'>
  <div className="service__head">
    <h3>Video/Photo Editting</h3>
  </div>
  <ul className='services__list'>
     <li>
      <BsCheck className='services__list-icon' />
      <p> Edits Your Video And Photos Just As You Want.</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>I Add Amazing Animinations To Your Video.</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>Special And Amazing Effects To Your Photos.</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>Review And Refine Your Video.</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>I Create Intro Video For Your Business And Services.</p>
      </li>
      <li>
      <BsCheck className='services__list-icon' />
      <p>Creates Unique Logo For Your Business And Proffession .</p>
      </li>
  </ul>
  </article>
    {/*END OF VIDEO EDITING */}
     </div>
    </section >
  )
}

export default services