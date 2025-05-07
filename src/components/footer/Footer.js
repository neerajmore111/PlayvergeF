import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GooglePlay from "../../assets/images/footer/01.jpg";
import AppStore from "../../assets/images/footer/02.jpg";

export default function Footer() {
  return (
    <>
      <footer id="contact" className="footer-one iq-bg-dark">
        <div className="footer-top">
          <Container fluid>
            <Row className="footer-standard">
              <Col lg="6">
                <div className="widget text-left">
                  <div className="menu-footer-link-1-container">
                    <ul id="menu-footer-link-1" className="menu p-0">
                      <li
                        id="menu-item-7314"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314"
                      >
                        <Link to="/terms-of-use">Terms and Conditions</Link>
                      </li>
                      <li
                        id="menu-item-7316"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7316"
                      >
                        <Link to="/privacy-policy">
                        Privacy Policy
                        </Link>
                      </li>
                      <li
                        id="menu-item-7118"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118"
                      >
                        <Link to="/FAQ">Frequently Asked Questions (FAQs)</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget text-left">
                  <div className="textwidget">
                    <p>
                      <small>
                        © 2025 Playverge. All rights reserved!
                      </small>
                    </p>
                    <p>
                      <small>
                      All videos on this platform are trademarks, and all images and related content
                      are the property of Playverge Inc. Duplication and copying of these materials are strictly prohibited.
                      </small>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6" className="mt-4 mt-lg-0">
                <h6 className="footer-link-title">Follow us on </h6>
                <ul className="info-share">
                  <li>
                    <Link
                      target="_blank"
                      to="#"
                      onClick={() =>
                        window.open("https://www.facebook.com", "_blank")
                      }
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="#"
                      onClick={() =>
                        window.open("https://www.instagram.com", "_blank")
                      }
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="#"
                      onClick={() =>
                        window.open("https://twitter.com/?lang=en", "_blank")
                      }
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="#"
                      onClick={() =>
                        window.open("https://www.youtube.com", "_blank")
                      }
                    >
                      <i className="fa fa-youtube-play"></i>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg="3" md="6" className="mt-4 mt-lg-0">
                <div className="widget text-left">
                  <div className="textwidget">
                    <h6 className="footer-link-title">
                    Download the app from
                    </h6>
                    <div className="d-flex align-items-center">
                      <Link
                        className="app-image"
                        to="#"
                        onClick={() =>
                          window.open(
                            "https://play.google.com/store/games?gl=RO",
                            "_blank"
                          )
                        }
                      >
                        <img src={GooglePlay} alt="play-store" />
                      </Link>
                      <br />
                      <Link
                        className="ml-3 app-image"
                        to="#"
                        onClick={() =>
                          window.open(
                            "https://www.apple.com/app-store/",
                            "_blank"
                          )
                        }
                      >
                        <img src={AppStore} alt="app-store" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
