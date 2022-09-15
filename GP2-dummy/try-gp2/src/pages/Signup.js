import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logoGoogle from "../assets/google.png";
import logoFacebook from "../assets/facebook.png";
import logoTwitter from "../assets/twitter.png";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    handleSignin();
    alert("register succes");
    Login();
  };

  const Login = () => {
    navigate("/login");
  };

  const handleSignin = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      nama_user: username,
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://52.25.13.136:80/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.Data);
        Login();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
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
            <h3>SIGN UP</h3>
            <h6>Join with us!</h6>
          </div>
          <Form className="d-grid justify-content-center gap-3 w-100">
            <Form.Control
              type="username"
              placeholder="Create username"
              onChange={handleUsername}
              style={{ width: "300px" }}
              // onChange={}
            />
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
            <div className="mx-auto">
              <button
                variant="secondary"
                style={{ width: "100px" }}
                onClick={() => handleSignup()}
              >
                Sign up
              </button>
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
