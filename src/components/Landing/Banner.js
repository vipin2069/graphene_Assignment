import React from "react";
import bigStar from "../../assets/desktop/Star 3.png";
import modelImg from "../../assets/desktop/jessica-radanavong-IchPBHFD0pw-unsplash.png";
import big_lineStar from "../../assets/desktop/Star 4.png";
import upArrow from "../../assets/desktop/Vector (3).png";
import mobileModelImg from "../../assets/mobile/jessica-radanavong-IchPBHFD0pw-unsplash.png";
import mobileBigStar from "../../assets/mobile/Star 3.png";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="container">
        <div className="lowerBarline">
          <img src={big_lineStar} alt="big_lineStar" />
        </div>
        <div className="bannerOverlay"></div>
        <div className="bannerOverlay2"></div>
        <div className="banner">
          <div className="bannerText_area">
            <h1 className="bannerText1">Fresh</h1>
            <h1 className="outlined_text">2022</h1>
            <h1 className="bannerText2">Look</h1>
          </div>
          <div className="bannerBgStar">
            <img className="bigStar" src={bigStar} alt="bigStar" />
            <img
              className="mobileBigStar"
              src={mobileBigStar}
              alt="mobileBigStar"
            />
          </div>
          <div className="bannerProduct_img">
            <img className="modelImg" src={modelImg} alt="modelImg" />
            <img
              className="mobileModelImg"
              src={mobileModelImg}
              alt="mobileModelImg"
            />
            <div className="model_ProductDetail">
              <p>Oregon jacket</p>
              <p>$124</p>
            </div>
          </div>
          <a href="/" className="seeMore">
            <p>See more</p>
            <img src={upArrow} alt="See_more" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
