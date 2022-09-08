import React from "react";

import Header from "./Components/header/header";
import Nav from "./Components/navbar/navbar";
import About from "./Components/about/about";
import Experience from "./Components/experience/experince";
import Services from "./Components/services/services";
import Portfolio from "./Components/portfolio/portfolio";
import Testimonials from "./Components/testimonials/testimonials";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";
import Loader from "./Components/spinnerLoader";

const App = () => {
  console.log(process.env.CI);

  return (
    <React.Fragment>
      <Loader />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
