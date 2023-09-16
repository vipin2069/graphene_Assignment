import React from "react";
import truck from "../../assets/desktop/Layer 156.png";
import facebook from "../../assets/desktop/Vector.png";
import linkedin from "../../assets/desktop/Vector (1).png";
import twitter from "../../assets/desktop/Vector (2).png";
import instagram from "../../assets/desktop/Group 6.png";

const Header = () => {
  return (
    <div className="header_container">
      <div className="container">
        <div className="header">
          <div className="leftTop_header">
            <a href="/" className="deliveryBox">
              <img src={truck} alt="truck" />
              <p>Free Delivery</p>
            </a>
            <div className="midLine"></div>
            <a href="/" className="policy">
              <p>Return Policy</p>
            </a>
          </div>
          <div className="rightTop_header">
            <a href="/" className="loginText">
              Login
            </a>
            <a href="/" className="followUs">
              Follow US
            </a>
            <div className="socialLinks">
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="/">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
