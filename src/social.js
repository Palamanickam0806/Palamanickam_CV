import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './social.css'

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://instagram.com/pazha_0806?igshid=MzNlNGNkZWQ4Mg=="
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/palamanickam-s-2ab81925b?fbclid=PAAaZPhABNPwGqPycuc6usbIDq41NJI0779xpDvz5ZywX5V61vhDFn33TkNnA"
        className="linkedin social">
       <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}