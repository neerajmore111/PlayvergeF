import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../context/authenticationContext/AuthenticationContext";
import { login } from "../../context/authenticationContext/apiCalls";
import notifyError from "../../components/notify/notifyError";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthenticationContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      notifyError("Please enter your email address.");
    } else if (password.length === 0) {
      notifyError("Please enter your password.");
    } else {
      login({ email, password }, dispatch);
    }
  };

  return (
    <>
      <section className="sign-in-page">
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center">
              <div className="sign-user_card ">
                {/* Input form */}
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">Conectare</h3>
                    <Form className="mt-4">
                      {/* Input email */}
                      <Form.Group>
                        <Form.Control
                          type="email"
                          className="form-control mb-0"
                          id="emailAddress"
                          placeholder="Enter your email address"
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Form.Group>
                      {/* Input password */}
                      <Form.Group>
                        <Form.Control
                          type="password"
                          className="form-control mb-0"
                          id="password"
                          placeholder="Enter your password"
                          autoComplete="off"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Link to="/">
                        <div className="sign-info">
                          {/* Connect button */}
                          <Button
                            className="btn btn-hover btn-primary1"
                            onClick={handleLogin}
                          >
                            Log in
                          </Button>
                        </div>
                      </Link>
                    </Form>
                  </div>
                </div>
                {/* Text */}
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                  Don't have an account yet?
                    <Link
                      to="register"
                      className="text-primary ml-2"
                      style={{ fontWeight: "bold" }}
                    >
                      Register
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <Link
                      to="recovery-password"
                      className="f-link"
                      style={{ color: "white" }}
                    >
                     Forgot your password?
                    </Link>
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
