<<<<<<< HEAD
import React from "react";
=======
import React from 'react'
>>>>>>> 4741c1dc1b2932579500592368b2d55db5cfb50b

import Header from "./Components/header/header";
import Nav from "./Components/navbar/navbar";
import About from "./Components/about/about";
import Experience from "./Components/experience/experince";
import Services from "./Components/services/services";
import Portfolio from "./Components/portfolio/portfolio";
import Testimonials from "./Components/testimonials/testimonials";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";
<<<<<<< HEAD
import Loader from "./Components/spinnerLoader";

const App = () => {
  console.log(process.env.CI);

=======
import Loader from './Components/spinnerLoader';

const App = () => {
>>>>>>> 4741c1dc1b2932579500592368b2d55db5cfb50b
  return (
    <React.Fragment>
      <Loader />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
<<<<<<< HEAD
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
=======
      <Portfolio/>
      <Testimonials />
      <Contact />
      <Footer/>
    </React.Fragment>
  );
}

export default App
>>>>>>> 4741c1dc1b2932579500592368b2d55db5cfb50b
