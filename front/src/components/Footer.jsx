import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="frame">
        <img src={Logo} alt="" />
      </div>
      <span>
        Made with <b>React</b> by <i>Nishank Shetty</i> 😎
      </span>
    </footer>
  );
};

export default Footer;
