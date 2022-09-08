import React from 'react'
import "./experince.css";
import {BsPatchCheckFill} from "react-icons/bs"

const experince = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="frontend__experience">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>
                  experienced</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                 <small className='text-light'>
                  Intermediate</small>
               </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill   className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>
                experienced</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                 <h4>React </h4>
                <small className='text-light'>
                experienced</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill   className='experience__details-icon'/>
              <div>
                 <h4>Bootstrap</h4>
                <small className='text-light'>
                experienced</small>
              </div>
             </article>
             <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>
                experienced</small>
              </div>
             </article>
          </div>
        </div>
        {/* End of frontend */}
        <div className="backend__experience">
        <h3>Design System</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill   className='experience__details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>
                Intermediate</small>
              </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill  className='experience__details-icon' />
            <div>
              <h4>Video Editing</h4>
              <small className='text-light'>
              experienced</small>
           </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill   className='experience__details-icon'/>
            <div>
              <h4>Wordpress</h4>
              <small className='text-light'>
              experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill  className='experience__details-icon'/>
            <div>
              <h4>Live streaming </h4>
              <small className='text-light'>
               experienced</small>
           </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill  className='experience__details-icon' />
             <div>
              <h4>Graphic Design</h4>
              <small className='text-light'>
              experienced</small>
          </div>
          </article>
          </div>
          </div>
      </div>
    </section>
  )
}

export default experince