import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoGoogle from "../assets/google.png";
import logoFacebook from "../assets/facebook.png";
import logoTwitter from "../assets/twitter.png";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies();

  const homeless = () => {
    navigate("/pageprofile");
  };

  const mbakzul = () => {
    navigate("/login");
  };

  const HandleLogin = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://52.25.13.136:80/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.Data);
        setCookies("Email", email, { path: "/" });
        setCookies("Password", password, { path: "/" });
        setCookies("Token", response.data.Data, { path: "/" });
        homeless();
      })
      .catch(function (error) {
        mbakzul();
      });
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

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
            <h3>LOGIN</h3>
            <h6>Please enter your email and password!</h6>
          </div>
          <Form className="d-grid justify-content-center gap-4 w-100">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={handleEmail}
              style={{ width: "300px" }}
            />
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
            <div className="mx-auto"></div>
          </Form>
          <div className="d-flex justify-content-center">
            <button
              variant="secondary"
              onClick={() => HandleLogin()}
              style={{
                width: "100px",
                border: "1px solid gray",
                color: "#00001F",
                borderRadius: "5px",
              }}
            >
              Login
            </button>
          </div>
          <div className="d-flex justify-content-center pt-3 gap-5 pb-5">
            <img src={logoFacebook} alt="" width="30px" />
            <img src={logoTwitter} alt="" width="30px" />
            <img src={logoGoogle} alt="" width="30px" />
          </div>
          <div className="text-center pt-3">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
