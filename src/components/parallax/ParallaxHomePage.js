import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import parallax from "../../assets/images/parallax/p1.jpg";
import parallaxBackground from "../../assets/images/parallax/p1_sonic.jpg";
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

export default function ParallaxHomePage() {
  return (
    <>
      <section
        id="parallex"
        className="parallax-window"
        style={{ backgroundImage: `url(${parallaxBackground})` }}
      >
        <Container fluid className="h-100">
          <Row className="align-items-center justify-content-center h-100 parallaxt-details">
            {/* First column */}
            <Col lg="6" className="r-mb-23">
              <div className="text-left">
                {/* Promo title */}
                <h1
                  className="trending-text big-title text-uppercase mt-0"
                  style={{ fontSize: 50 }}
                >
                 Cinema at your home!
                </h1>
                {/* Promo description */}
                <p style={{ fontSize: 19 }}>
                Everything you love, in one place – the most spectacular blockbusters,
                the boldest stories, and unforgettable classic films are all now on StreamIT.
                </p>
                <p style={{ fontSize: 19 }}>
                Enjoy iconic titles from Warner Bros., HBO,
                Max Originals, DC, Cartoon Network, and many more — for the first time, all in one place.
                </p>
                <p style={{ fontSize: 19 }}>
                Stream unlimited movies on your phone, tablet, 
                laptop, and TV — at no cost. StreamIT is a free streaming service that requires no monthly subscription!
                </p>
                {/* See more button */}
                <div className="parallax-buttons">
                  <Link
                    to="/team"
                    className="btn btn-hover"
                    style={{ fontWeight: "bold" }}
                  >
                    Information <i className="fa fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </Col>
            {/* Second column */}
            <Col lg="6">
              <div className="parallax-img">
                <Link to="#">
                  <img
                    src={parallax}
                    className="img-fluid w-100"
                    alt="parallax"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
