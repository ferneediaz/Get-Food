import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";


const Footer = () => {
  return (
    <footer className="footer">
    <Container>
      <Row>
        <Col lg="3" md="4" sm="6">
          <div className=" footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5>Get Food</h5>
            <p>
              At Get Food, we're passionate about providing our customers with delicious and satisfying meals that are sure to please. Whether you're in the mood for something sweet or savory.
            </p>
          </div>
        </Col>
  
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Luzhu District, Kaohsiung City, Taiwan</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 0978548735</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: dananferneediaz@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              All Rights Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-2 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>

               <a href="https://www.facebook.com/Anfernee.penn">
                    <i class="ri-facebook-line"></i>
                  </a> {"  "}

                  <a href="https://github.com/ferneediaz">
                    <i class="ri-github-line"></i>
                  </a>{"  "}

                  <a href="https://www.linkedin.com/in/anferneediaz/">
                    <i class="ri-linkedin-line"></i>
                  </a>{"  "}

              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
