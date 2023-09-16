// src/App.js
import React from "react";
import ProductList from "./components/Product/Product";
import ContactUs from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing";

const App = () => {
  return (
    <div className="app">
      <Landing />
      <ProductList />
      <ContactUs />
    </div>
  );
};

export default App;
