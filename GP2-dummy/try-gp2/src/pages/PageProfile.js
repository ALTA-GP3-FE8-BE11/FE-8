import React, { useState, useEffect } from "react";
import { Col, Row, ListGroup, Card } from "react-bootstrap";
import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import logoGoogle from "../assets/google.png";
import logoFacebook from "../assets/facebook.png";
import logoTwitter from "../assets/twitter.png";
import Defaultpp from "../assets/Defaultpp.jpg";
import "../style/pageprofile.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const PageProfile = () => {

  const [profil, setProfil] = useState([]);
  const [cookies, setCookies, removeCookies] = useCookies();
  const navigate = useNavigate();

  const getProfil = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://52.25.13.136:80/users',
      headers: {
        'Authorization': `Bearer ${cookies.Token}`
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setProfil(response.data.Data);
        console.log(profil)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getProfil();
  }, [])

  const handleRemoveCookie = () => {
    removeCookies("Email")
    removeCookies("Password")
    alert('anda sudah logout')
    navigate('/login')
  }

  return (
    <div>
      <NavbarNav />
      <div style={{ backgroundColor: "#DCDCDC" }}>
        <Row>
          <Col md={5}>
            <h1 className="text-center mt-1">My Profile</h1>
            <Card.Img
              src={Defaultpp}
              className="p-1  mt-1"
              style={{ height: "37.722vw" }}
            />
          </Col>

          <Col md={7}>
            <div className="container d-flex justify-content-center">
              <div
                className="bg-light p-5"
                style={{ width: "600px", height: "85vh" }}
              >
                <ListGroup
                  variant="flush"
                  style={{ width: "60vh", lineHeight: "50px" }}
                  className="mt-5"
                >
                  <ListGroup.Item>{profil.nama_user}</ListGroup.Item>
                  <ListGroup.Item>{cookies.Email}</ListGroup.Item>
                  <ListGroup.Item>{cookies.Password}</ListGroup.Item>
                  <ListGroup.Item>{profil.alamat}</ListGroup.Item>
                </ListGroup>
                <div className="d-flex justify-content-center mt-5 gap-5 pb-5">
                  <img src={logoFacebook} alt="" width="30px" />
                  <img src={logoTwitter} alt="" width="30px" />
                  <img src={logoGoogle} alt="" width="30px" />
                </div>
                <div className="pb-3">
                  <a href="#" class="cta" onClick={() => handleRemoveCookie()}>
                    <span>Log Out</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default PageProfile;
