import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#Home" className="footer__logo">
        My logo
      </a>

      <ul className="perma-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/princecodes4115/">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/Princecodes4115">
          <BsTwitter />
        </a>
        <a href="https://www.messenger.com/t/profile/">
          <BsMessenger />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; code-with-moses.All Right Reserved</small>
      </div>
    </footer>
  );
};

export default footer;
