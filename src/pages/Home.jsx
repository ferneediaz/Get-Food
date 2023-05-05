import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "At our restaurant, we understand that time is of the essence. That's why we offer quick and reliable delivery services that ensure your meal arrives fresh and hot, right to your doorstep.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Looking for a cozy and comfortable place to enjoy your meal? Look no further than our restaurant! With our warm and inviting atmosphere, you can enjoy delicious food and great company in a relaxed and welcoming environment.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "In a hurry? No problem! With our easy pick-up service, you can order your meal ahead of time and have it ready for you to grab and go. It's the perfect solution for busy people on the go!",
  },
];


const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
          <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Hungry and Craving Convenience?</h5>
                <h1 className="mb-4 hero__title">
                  <span>Get Delicious Food</span> Delivered <br /> Right to Your Door
                </h1>

                <p>
                  At our restaurant, we make it easy for you to satisfy your cravings without ever leaving your home. With our user-friendly platform, you can easily browse our menu, place your order, and have your meal delivered right to your doorstep in no time.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      <Link to="/foods">Order now <i class="ri-arrow-right-s-line"></i></Link>
                    </button>

                    <button className="all__foods-btn">
                      <Link to="/foods">See all foods</Link>
                    </button>
                  </div>
                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
  <Container>
    <Row>
      <Col lg="12" className="text-center">
        <h5 className="feature__subtitle mb-4">Discover Our Menu</h5>
        <h2 className="feature__title">Sit Back and Relax</h2>
        <h2 className="feature__title">
          We'll <span>Take Care</span> of the Rest
        </h2>
        <p className="mb-1 mt-4 feature__text">
          At our restaurant, we serve only the freshest and most delicious meals that are sure to satisfy your cravings. Whether you're in the mood for something sweet or savory, we've got you covered.
        </p>
        <p className="feature__text">
          Our menu features a wide variety of dishes, from classic comfort foods to exotic flavors from around the world. And with our easy-to-use platform, you can order from anywhere and have your meal delivered right to your doorstep.
        </p>
      </Col>



            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-get-food" className="w-100" />
            </Col>

            <Col lg="6" md="6">
  <div className="get-food">
    <h2 className="get-food mb-4">
      Why Choose <span>Get Food?</span>
    </h2>
    <p className="get__food-desc">
      Get Food is the ultimate food delivery app that brings fresh and tasty meals right to your doorstep. With our easy-to-use platform, you can order from any location and enjoy quality support every step of the way.
    </p>

    <ListGroup className="mt-4">
      <ListGroupItem className="border-0 ps-0">
        <p className="choose__us-title d-flex align-items-center gap-2 ">
          <i class="ri-checkbox-circle-line"></i> Fresh and Tasty Meals
        </p>
        <p className="choose__us-desc">
          Our restaurant partners use only the freshest ingredients to prepare delicious meals that are sure to satisfy your cravings.
        </p>
      </ListGroupItem>

      <ListGroupItem className="border-0 ps-0">
        <p className="choose__us-title d-flex align-items-center gap-2 ">
          <i class="ri-checkbox-circle-line"></i> Quality Support
        </p>
        <p className="choose__us-desc">
          Our dedicated support team is available 24/7 to assist you with any questions or concerns you may have.
        </p>
      </ListGroupItem>

      <ListGroupItem className="border-0 ps-0">
        <p className="choose__us-title d-flex align-items-center gap-2 ">
          <i class="ri-checkbox-circle-line"></i> Convenient Ordering
        </p>
        <p className="choose__us-desc">
          With Get Food, you can order from any location and have your meal delivered right to your doorstep in no time.
        </p>
      </ListGroupItem>
    </ListGroup>
  </div>
</Col>

          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
