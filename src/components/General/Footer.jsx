import React from "react";
import { FooterContainer } from "./styles";

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <div className="footer-link">
        <p>Home</p>
        <p>|</p>
        <p>Terms and Condition</p>
        <p>Privacy Policy</p>
        <p>|</p>
        <p>Collection Statement</p>
        <p>|</p>
        <p>Help</p>
        <p>|</p>
        <p>Manage Account</p>
      </div>
      <div className="footer-content">
        <p>Copyright c 2016 DEMO Streaming. All Rights Reserved.</p>
      </div>
      <div className="social-app-links">
        <div className="socials">
          <img
            src={require("../../assets/social/facebook-white.svg").default}
            alt="Facebook Social"
          />
          <img
            src={require("../../assets/social/twitter-white.svg").default}
            alt="Twitter Social"
          />
          <img
            src={require("../../assets/social/instagram-white.svg").default}
            alt="Instagran Social"
          />
        </div>
        <div className="apps">
          <img
            src={require("../../assets/store/app-store.svg").default}
            alt="App Store"
          />
          <img
            src={require("../../assets/store/play-store.svg").default}
            alt="Play Store"
          />
          <img
            src={require("../../assets/store/windows-store.svg").default}
            alt="windows Store"
          />
        </div>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
