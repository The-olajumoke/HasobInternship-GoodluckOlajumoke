import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import LocationIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/PhoneAndroid";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedinIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <footer className="footer">
      <Row className=" footer__row justify-content-md-center">
        <Col className="footer__side "></Col>
        <Col
          className="footer__main  d-flex justify-content-between"
          lg={9}
          md={12}
          xs={12}
        >
          <Row className="w-100">
            <Col className="footer__mainCol" lg={3} md={6} xs={6}>
              {/* 1st div of links */}
              <div className="footer__cont">
                <h4 className="footer__heading">Pages</h4>
                <Link className="footer__link">
                  <span>Home</span>
                </Link>
                <Link className="footer__link">
                  <span>Product</span>
                </Link>
                <Link className="footer__link">
                  <span>Pricing</span>
                </Link>
                <Link className="footer__link">
                  <span>About</span>
                </Link>
                <Link className="footer__link">
                  <span>Contact</span>
                </Link>
                <Link className="footer__link">
                  <span>Home</span>
                </Link>
              </div>
            </Col>

            <Col className="footer__mainCol" lg={2} md={6} xs={6}>
              {/* 2nd div of links */}
              <div className="footer__cont">
                <h4 className="footer__heading">Designer</h4>
                <Link className="footer__link">
                  <span>Home</span>
                </Link>
                <Link className="footer__link">
                  <span>Product</span>
                </Link>
                <Link className="footer__link">
                  <span>Pricing</span>
                </Link>
                <Link className="footer__link">
                  <span>About</span>
                </Link>
                <Link className="footer__link">
                  <span>Contact</span>
                </Link>
                <Link className="footer__link">
                  <span>Home</span>
                </Link>
              </div>
            </Col>

            <Col className="footer__mainCol" lg={2} md={6} xs={6}>
              {/* 3rd div of links */}
              <div className="footer__cont">
                <h4 className="footer__heading opac">Pages</h4>
                <Link className="footer__link">
                  <span>Home</span>
                </Link>
                <Link className="footer__link">
                  <span>Product</span>
                </Link>
                <Link className="footer__link">
                  <span>Pricing</span>
                </Link>
                <Link className="footer__link">
                  <span>About</span>
                </Link>
                <Link className="footer__link">
                  <span>Contact</span>
                </Link>
                <Link className="footer__link">
                  <span>Home</span>
                </Link>
              </div>
            </Col>

            <Col className="footer__mainCol" lg={5} md={6} xs={6}>
              {/* 4th div of links */}
              <div className="footer__cont footer__contact">
                <span className="footer__heading d-flex">
                  <LocationIcon className="footer__icon" />
                  7489 Mackinbird Hill Undefined{" "}
                </span>
                <span className="d-flex my-2 font-weight-bold">
                  <PhoneIcon className="footer__icon" />
                  (239) 555-01-08
                </span>
                {/* social icons */}
                <div className="d-flex my-5">
                  <TwitterIcon className="footer__icon mr-3" />
                  <FacebookIcon className="footer__icon mx-3" />
                  <LinkedinIcon className="footer__icon mx-3" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
