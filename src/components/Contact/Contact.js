import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactUs = () => {
  // Implement form validation and rendering here
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic and validation here
  };

  return (
    <>
      <div className="contact_section">
        <div className="container">
          <div className="contactPage">
            <div className="formContainer">
              <div className="newsletter">
                <h3>Newslleter</h3>
                <p>Get news about articles and updates in your inbox.</p>
              </div>
              <Form className="contactForm" onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="text"
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button variant="primary" type="submit">
                  SEND
                </Button>
              </Form>
            </div>
            <div className="getIn_Touch">
              <h1>GET</h1>
              <h1>IN TOUCH</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright 2022 All Right Reserved By SG</div>
    </>
  );
};

export default ContactUs;
