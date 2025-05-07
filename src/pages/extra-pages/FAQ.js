import React, { useState } from "react";
import Header from "../../components/header/Header";
import BannerPages from "../../components/banners/BannerPages";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import multipleDevices from "../../assets/images/multipleDevices.png";

export default function FAQ() {
  const [faq, setfaq] = useState("1");

  return (
    <>
      <Header />
      <BannerPages pageName="Întrebări frecvente" />
      <main id="main" className="site-main">
        <Container>
          <Row>
            <Col lg="12" sm="12">
              <div className="iq-accordion iq-accordion-square">
                <div
                  className={`iq-accordion-block  1 ${
                    faq === "1" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("1");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                    What is Playverge?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "1" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Playverge is a free streaming service that lets its users watch movies on any internet-connected device. 
                      The service is 100% free and incurs no costs. Watch as much as you want, whenever you want, with no ads—everything is free. 
                      There’s always something new to discover, as we add new movies every week.
                    </p>
                  </div>
                </div>
                <div
                  className={`iq-accordion-block 2  ${
                    faq === "2" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("2");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                    "What devices can I use to watch the movies?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "2" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Watch anywhere, anytime on any device with an internet 
                      connection.{" "}
                    </p>
                    <p className="iq-content-text">
                      {" "}
                     You can watch the movies on iPhone, iPad, Android phone, Android tablet, Apple TV, Android TV, Chromecast, Samsung TV, LG TV, Chrome OS, macOS, Windows PC, 
                     PS4, and PS5—and in the future, the app will be available on other devices as well.{" "}
                    </p>
                    <p className="iq-content-text">
                      {" "}
                      Thanks to its responsive design, the service can 
                      be viewed on any screen!{" "}
                    </p>
                    <div className=" text-center" style={{ paddingTop: 5 }}>
                      <img
                        src={multipleDevices}
                        width="500"
                        className="img-fluid d-block mx-auto mb-3"
                        alt="multipleDevices"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`iq-accordion-block 3 ${
                    faq === "3" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("3");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                    What can I watch on Playverge?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "3" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Playverge offers a new viewing experience and brings you, for the first time in one place, the most fascinating stories from Warner Bros., HBO, DC, Cartoon Network, and more. Our service features an exceptionally 
                      rich library, with award-winning films, feature-length movies, documentaries, anime, and much more.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={`iq-accordion-block 4  ${
                    faq === "4" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("4");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                    How can I delete my account?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "4" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      Playverge is a flexible service, so there are no hidden clauses or obligations.
                      You can easily cancel your account by contacting the service administrator, and there are no cancellation fees.{" "}
                    </p>
                    <p className="iq-content-text">
                      {" "}
                      To get in touch with them, you need to fill out
                       the form on the page.{" "}
                      <Link to="/contact-us" style={{ fontWeight: "bold" }}>
                        Contact
                      </Link>{" "}
                      Please provide your first and last name, phone number, email address, and in the message, the reason for 
                      canceling your user account. This helps us improve our service in the future.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={`iq-accordion-block 5  ${
                    faq === "5" ? "iq-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("5");
                  }}
                >
                  <div className="iq-accordion-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordion-title iq-heading-title">
                    What is the content rating system?
                    </h4>
                  </div>
                  <div
                    className={`iq-accordion-details ${
                      faq === "5" ? "d-block" : "d-none"
                    }`}
                  >
                    <p className="iq-content-text">
                      {" "}
                      The content rating system represents a rating system for movies and TV
                      shows with the purpose of estimating their suitability for certain audiences based on their content.{" "}
                    </p>
                    <p className="iq-content-text">
                      {" "}
                      The MPA (Motion Picture Association) rating system is an example of a content evaluation 
                      system used to help parents decide which media content is appropriate for their children..{" "}
                    </p>
                    <div>
                      <Card.Body>
                        <div
                          className="table-responsive"
                          style={{ paddingTop: 20 }}
                        >
                          <table
                            id="datatable"
                            className="table table-striped table-bordered"
                          >
                            <thead>
                              <tr>
                                <th style={{ textAlign: "center" }}>
                                A content rating symbol 
                                </th>
                                <th style={{ textAlign: "center" }}>
                                description
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>G</td>
                                <td>
                                General public - all ages are admitted.
                                </td>
                              </tr>
                              <tr>
                                <td>R</td>
                                <td>
                                "Restricted - contains adult material,
                                and approval from a parent is required for children under 17 years old.
                                </td>
                              </tr>
                              <tr>
                                <td>PG</td>
                                <td>
                                  <p>
                                    
                                  </p>Parental guidance suggested - some material
                                   may not be suitable for children.
                                </td>
                              </tr>
                              <tr>
                                <td>PG-13</td>
                                <td>
                                  <p>
                                  Parents strongly cautioned - some material may 
                                  be inappropriate for children under 13, and parents are urged to be cautious.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>NC-13</td>
                                <td>
                                  <p>
                                  Adults only - persons under 17 are not allowed
                                  to view this content.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>TV-MA</td>
                                <td>
                                  <p>
                                  Adults only - this program is specifically 
                                  designed to be viewed by adults and may therefore be unsuitable for children under 17.
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Card.Body>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
