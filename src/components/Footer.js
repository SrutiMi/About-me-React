import React from "react";
import emailIcon from "../img/email.png";
import githubIcon from "../img/githubicon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <h2><u>Contact me</u></h2>
      <div className = "contact-info">
              <img src={emailIcon} width="30px" alt="email icon" />
              <h4>mishrasruti978@gmail.com</h4>
      </div>
      <div className="contact-info">
             <img src={githubIcon} width="30px" alt="github icon" />
              <h4>
                <a href="https://github.com/SrutiMi">SrutiMi</a>
              </h4>
      </div>
      <br />
      <br />
      <hr />
      
    </footer>
  );
}
