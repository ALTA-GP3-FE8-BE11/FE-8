import React from "react";
import { Button, Form } from "react-bootstrap";
import logoGoogle from "../assets/google.png";
import logoFacebook from "../assets/facebook.png";
import logoTwitter from "../assets/twitter.png";

const Signup = () => {
  return (
    <div
      style={{
        backgroundColor: "#DCDCDC",
        paddingTop: "90px",
        paddingBottom: "90px",
      }}
    >
      <div className="container d-flex justify-content-center">
        <div
          className="bg-light p-5"
          style={{ width: "400px", borderRadius: "15px" }}
        >
          <div className="text-center pb-4">
            <h3>SIGN UP</h3>
            <h6>Join with us!</h6>
          </div>
          <Form className="d-grid justify-content-center gap-3 w-100">
            <Form.Control
              type="username"
              placeholder="Create username"
              style={{ width: "300px" }}
            />
            <Form.Control
              type="email"
              placeholder="Email"
              style={{ width: "300px" }}
            />
            <Form.Control type="password" placeholder="Password" />
            <div className="mx-auto">
              <Button variant="secondary" style={{ width: "100px" }}>
                Sign up
              </Button>
            </div>
          </Form>
          <div className="text-center pt-4">or sign up with</div>
          <div className="d-flex justify-content-center pt-4 gap-5 ">
            <img src={logoFacebook} alt="" width="30px" />
            <img src={logoTwitter} alt="" width="30px" />
            <img src={logoGoogle} alt="" width="30px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
