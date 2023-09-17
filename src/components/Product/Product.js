import React, { useEffect, useState } from "react";
import axios from "axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import Lottie from "lottie-react";
import BlackStar from "../../assets/desktop/Star 2.png";
import upArrow from "../../assets/desktop/Vector (4).png";
import next_Arrow from "../../assets/desktop/Arrow 1.png";
import prev_Arrow from "../../assets/desktop/Arrow 2.png";
import loadingAnimation from "../../assets/animation_lmmjfyua.json";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div className="sliderArrow nextArrow">
        <img src={next_Arrow} alt="nextArrow" />
      </div>
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div className="sliderArrow prevArrow">
        <img src={prev_Arrow} alt="prevArrow" />
      </div>
    </div>
  );
};

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("women's clothing");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product categories using Axios
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch products based on the selected category using Axios
    axios
      .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, [selectedCategory]);

  const handleTabSelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    // Reset products to an empty array
    setProducts([]);
    setIsLoading(true);
  };

  const settings = {
    dots: false,
    infinite: true,
    // arrows: true,
    pauseOnHover: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3.5, // Number of slides to show at once
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2, // Adjust the number of slides for smaller screens
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Adjust the number of slides for mobile screens
        },
      },
    ],
  };

  return (
    <div className="products_section">
      <div className="container">
        <div className="products">
          <div className="productPage_Title">
            <h2>New products</h2>
            <div className="titleUnderline">
              <img src={BlackStar} alt="BlackStar" />
            </div>
          </div>

          <div className="product_Category">
            <Tabs
              activeKey={selectedCategory}
              onSelect={handleTabSelect}
              className="categoryTabs"
            >
              {categories.map((category) => (
                <Tab key={category} eventKey={category} title={category}>
                  {isLoading ? (
                    <div className="loader">
                      <Lottie
                        animationData={loadingAnimation}
                        loop={true}
                        autoplay={true}
                        className="loadingAnimation"
                      />
                    </div>
                  ) : (
                    <>
                      {products.length === 0 ? (
                        <h1 className="noContent">No Contents Available</h1>
                      ) : (
                        <Slider {...settings}>
                          {products.map((product) => (
                            <div className="product_item" key={product.id}>
                              <div className="imageBG">
                                <img
                                  className="productImage"
                                  src={product.image}
                                  alt={product.title}
                                />
                                <a
                                  className="product_Hyperlink"
                                  href="/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img src={upArrow} alt="upArrow" />
                                </a>
                              </div>
                              <div className="product_caption">
                                <h3
                                  className="productTitle"
                                  title={product.title}
                                >
                                  {product.title}
                                </h3>
                                <p className="productDescp">
                                  {product.description}
                                </p>
                                <p className="productPricing">
                                  ${product.price}
                                </p>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      )}
                    </>
                  )}
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
