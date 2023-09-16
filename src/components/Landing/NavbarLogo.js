import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import midLine_Star from "../../assets/desktop/Star 1.png";

const NavbarLogo = ({ menuItems }) => {
  return (
    <div className="navbar_section">
      <div className="container">
        <div className="navbar_container">
          <div className="headTitle">
            <div className="logoName">ShopKart</div>
            <div className="cartBox">
              <div className="wishlist">WISHLIST (0)</div>
              <div className="baglist">BAG (0)</div>
            </div>
          </div>
          <div className="title_Underline">
            <div className="midline"></div>
            <img src={midLine_Star} alt="star" className="line_star" />
          </div>
          <Navbar expand="lg" className="navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {menuItems.map((item) => (
                  <React.Fragment key={item.id}>
                    {item.child ? (
                      <NavDropdown title={item.name} id="basic-nav-dropdown">
                        {item.child.map((childItem) => (
                          <NavDropdown.Item
                            key={childItem.id}
                            href={`#${childItem.id}`}
                          >
                            {childItem.name}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    ) : (
                      <Nav.Link href={`#${item.id}`}>{item.name}</Nav.Link>
                    )}
                  </React.Fragment>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogo;
