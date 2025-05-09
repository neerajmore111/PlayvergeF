import React, { useState } from "react";
import notifyError from "../notify/notifyError";
import notifySuccess from "../notify/notifySuccess";
import Axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (firstName.length < 3) {
      notifyError("Numele trebuie să conțină minim 3 caractere.");
    } else if (lastName.length < 3) {
      notifyError("Prenumele trebuie să conțină minim 3 caractere.");
    } else if (phoneNumber.length !== 10) {
      notifyError("Numărul de telefon trebuie să conțină exact 10 numere.");
    } else if (emailAddress.length < 5) {
      notifyError("Adresa de email trebuie să conțină minim 5 caractere.");
    } else if (message.length < 15) {
      notifyError(
        "Pentru a putea fi trimis mesajul, acesta trebuie să conțină minim 15 caractere."
      );
    } else {
      Axios.post("https://playvergrserver2-1.onrender.com/api/user/contact/", {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        message,
      })
        .then((res) => {
          if (res.status === 200) {
            notifySuccess("Mesajul tău a fost trimis.");
          }
        })
        .catch(() => notifyError("Mesajul tău nu s-a putut trimite."));
      const inputs = document.querySelectorAll(
        "#firstName, #lastName, #phoneNumber, #emailAddress, #message"
      );
      inputs.forEach((input) => {
        input.value = "";
      });
    }
  };

  return (
    <>
      <div className="text-center iq-title-box iq-box iq-title-default">
        <h2 className="iq-title">Send a message</h2>
        <p className="iq-title-desc">
        Fill out this form to get in touch with us.
        </p>
      </div>
      <div className="wrapper">
        <section>
          <Container>
            <Row className="row align-items-center justify-content-center h-100">
              <Col lg="10">
                <div
                  className="sign-user_card"
                  style={{ backgroundColor: "#161414" }}
                >
                  <Row>
                    <Col lg="12" className="device-margin">
                      <div className="profile-from">
                        <Form>
                          <Row>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Control
                                  type="text"
                                  className="form-control mb-0"
                                  id="firstName"
                                  placeholder="firstName"
                                  autoComplete="off"
                                  required
                                  onChange={(e) => {
                                    setFirstName(e.target.value);
                                  }}
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Control
                                  type="text"
                                  className="form-control mb-0"
                                  id="lastName"
                                  placeholder="last Name"
                                  autoComplete="off"
                                  required
                                  onChange={(e) => {
                                    setLastName(e.target.value);
                                  }}
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Control
                                  type="text"
                                  className="form-control mb-0"
                                  id="phoneNumber"
                                  placeholder="phone"
                                  autoComplete="off"
                                  required
                                  onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                  }}
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Control
                                  type="email"
                                  className="form-control mb-0"
                                  id="emailAddress"
                                  placeholder="E-mail"
                                  autoComplete="off"
                                  required
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                />
                              </Form.Group>
                            </Col>
                            <Col md="12">
                              <div className="cfield">
                                <span className="wpcf7-form-control-wrap your-message">
                                  <textarea
                                    name="your-message"
                                    id="message"
                                    cols="40"
                                    rows="10"
                                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="message"
                                    onChange={(e) => {
                                      setMessage(e.target.value);
                                    }}
                                  ></textarea>
                                </span>
                              </div>
                            </Col>
                          </Row>
                          <Button
                            type="button"
                            variant="btn btn-primary"
                            onClick={sendMessage}
                            style={{
                              backgroundColor: "red",
                              borderColor: "red",
                            }}
                          >
                            Send
                          </Button>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <ToastContainer />
      </div>
    </>
  );
}
