import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";

const headerSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ezekiel-moses-557a63233/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Princecodes4115"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://dribbble.com/Princecodes4115"
        target="_blank"
        rel="noreferrer"
      >
        <FiDribbble />
      </a>
    </div>
  );
};

export default headerSocials;
