import React from "react";
import Header from "./Header";
import NavbarLogo from "./NavbarLogo";
import Banner from "./Banner";

const Landing = () => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];
  return (
    <div className="landing_container">
      <Header />
      <div className="banner_Bg"></div>
      <NavbarLogo menuItems={navbar} />
      <Banner />
    </div>
  );
};

export default Landing;
