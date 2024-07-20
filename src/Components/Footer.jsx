import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | Prince-Nagarkoti | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/PrinceNagarkoti" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/prince_nagrkoti?igsh=MWZpY2tmMDN5OTFxcQ==" target="_blank">
          <FaInstagram />
        </a>

        <a href="mailTo:nagarkotiprince0@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
