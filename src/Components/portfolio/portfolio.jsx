import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"



const data = [
  {
    id: 1,
    Image: IMG1,
    Title: "Cryptocurrency And Financial Visualisation",
    Github: "https://www.github.com",
    Dribble: "https://www.dribble.com"
  },
  {
  id: 2,
  Image: IMG2,
  Title: "Cryptocurrency And Financial Visualisation",
  Github: "https://www.github.com",
  Dribble: "https://www.dribble.com"
  },
  {
  id: 3,
  Image: IMG3,
  Title: "Cryptocurrency And Financial Visualisation",
  Github: "https://www.github.com",
  Dribble: "https://www.dribble.com"
  },
  {
  id: 4,
  Image: IMG4,
  Title: "Cryptocurrency And Financial Visualisation",
  Github: "https://www.github.com",
  Dribble: "https://www.dribble.com"
  },
  {
  id: 5,
  Image: IMG5,
  Title: "Cryptocurrency And Financial Visualisation",
  Github: "https://www.github.com",
  Dribble: "https://www.dribble.com"
  },
  {
  id: 6,
  Image: IMG6,
  Title: "Cryptocurrency And Financial Visualisation",
  Github: "https://www.github.com",
  Dribble: "https://www.dribble.com"
},
]


const portfolio = () => {
  return (
    <section id='portfolio'>
       <h5>My Recent Works</h5>
       <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, Image, Title, Github, Dribble }) => {
            return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
            <img src={Image} alt={Title} />
            </div>
                <h3>{ Title}</h3>
            <div className="portfolio__item-cta">
            <a href={Github} className='btn' 
            target="_blank">Github</a>
            <a href={Dribble} className='btn'
            target="_blank">Live Demo</a>
            </div>
            </article> 
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio