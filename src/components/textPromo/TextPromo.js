import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import picture1 from "../../assets/images/about-us/tv.png";
import picture2 from "../../assets/images/about-us/device-pile.png";
import picture3 from "../../assets/images/about-us/kidsValueProp.png";

export default function TextPromo() {
  return (
    <>
      <Container fluid className="p-0">
        {/* First row */}
        <div
          className="map-container firstElelement"
          style={{ backgroundColor: "black" }}
        >
          <Container>
            <Row className="about-us-row text-center align-items-center">
              {/* First column */}
              <Col md="5">
                <div className="text-center">
                  <img
                    width="1000"
                    height="1000"
                    src={picture1}
                    className=" img-fluid attachment-large size-large"
                    alt=""
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
              </Col>
              {/* Second column */}
              <Col md="7">
                <div className="text-left iq-title-box iq-title-default">
                  <h3 className="iq-title">Watch on TV</h3>
                  <p className="iq-title-desc" style={{ fontSize: 23 }}>
                  Watch your favorite movies on Smart TV, PlayStation, Xbox, Chromecast,
                  Apple TV, Blu-ray players, and more. StreamIT brings the magic of cinema to your home.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Second row */}
        <div
          className="map-container secondElelement"
          style={{ backgroundColor: "black" }}
        >
          <Container>
            <Row className="about-us-row text-center align-items-center">
              {/* First column */}
              <Col md="7">
                <div className="text-left iq-title-box iq-title-default">
                  <h3 className="iq-title">Watch anywhere, anytime.</h3>
                  <p className="iq-title-desc" style={{ fontSize: 23 }}>
                  Stream your favorite movies unlimitedly on your phone, tablet, 
                  laptop, and TV—completely free. Our streaming service is 100% free.
                  </p>
                </div>
              </Col>
              {/* Second column */}
              <Col md="5">
                <div className="text-center">
                  <img
                    width="1000"
                    height="1000"
                    src={picture2}
                    className=" img-fluid attachment-large size-large"
                    alt=""
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Third row */}
        <div className="map-container" style={{ backgroundColor: "black" }}>
          <Container>
            <Row className="about-us-row text-center align-items-center">
              {/* First column */}
              <Col md="5">
                <div className="text-center">
                  <img
                    width="1000"
                    height="1000"
                    src={picture3}
                    className=" img-fluid attachment-large size-large"
                    alt=""
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
              </Col>
              {/* Second column */}
              <Col md="7">
                <div className="text-left iq-title-box iq-title-default">
                  <h3 className="iq-title">
                  Watch movies together with kids.
                  </h3>
                  <p className="iq-title-desc" style={{ fontSize: 23 }}>
                  Send kids on adventures with their favorite characters, in a 
                  space created just for them.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}
