import React, { useState } from "react";
import notifyError from "../../components/notify/notifyError";
import Axios from "axios";
import notifySuccess from "../../components/notify/notifySuccess";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function RecoveryPassword() {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      notifyError("Tastează adresa de email.");
    } else {
      Axios.post("https://playvergrserver2-1.onrender.com/api/user/reset-password", { email })
        .then((res) => {
          if (res.status === 200) {
            notifySuccess(
              "An email with reset instructions has been sent to the address " +
                email +
                "."
            );
            const inputs = document.querySelectorAll("#email");
            inputs.forEach((input) => {
              input.value = "";
            });
          }
        })
        .catch(() =>
          notifyError("This email address is not associated with any account.")
        );
    }
  };

  return (
    <>
      <section className="sign-in-page">
        <Container>
          <Row className="row justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">Password Reset</h3>
                    <p className="text-body">
                    Enter your email address and we will send you a message with instructions to reset your password.
                    </p>
                    <Form className="mt-4">
                      {/* Email input */}
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control mb-0"
                          id="email"
                          placeholder="Tastează adresa de email"
                          autoComplete="off"
                          required
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="sign-info">
                        {/* Reset button */}
                        <Button
                          className="btn btn-primary mt-2"
                          style={{ backgroundColor: "red", borderColor: "red" }}
                          onClick={sendEmail}
                        >
                          Reset
                        </Button>{" "}
                        {/* Cancel button */}
                        <Link to="/login">
                          <Button className="btn btn-dark mt-2">
                          Cancel
                          </Button>
                        </Link>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ToastContainer />
    </>
  );
}
