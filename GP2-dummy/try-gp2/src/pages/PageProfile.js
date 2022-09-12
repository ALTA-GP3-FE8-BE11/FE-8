import React from "react";
import { Col, Row, ListGroup, Card } from "react-bootstrap";
import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import logoGoogle from "../assets/google.png";
import logoFacebook from "../assets/facebook.png";
import logoTwitter from "../assets/twitter.png";

import sepatu from "../assets/sepatu.png";

const PageProfile = () => {
  return (
    <div>
      <NavbarNav />
      <div style={{ backgroundColor: "#DCDCDC" }}>
        <Row>
          <Col md={6}>
            <h1 className="text-center mt-5">My Profile</h1>
            <Card.Img src={sepatu} className="p-3 mt-4" />
          </Col>

          <Col md={6}>
            <div className="container d-flex justify-content-center">
              <div
                className="bg-light p-5"
                style={{ width: "600px", height: "80vh" }}
              >
                <ListGroup
                  variant="flush"
                  style={{ width: "60vh", lineHeight: "50px" }}
                  className="mt-5"
                >
                  <ListGroup.Item>Username</ListGroup.Item>
                  <ListGroup.Item>Email</ListGroup.Item>
                  <ListGroup.Item>Alamat</ListGroup.Item>
                  <ListGroup.Item>Password</ListGroup.Item>
                  <ListGroup.Item></ListGroup.Item>
                </ListGroup>
                <div className="d-flex justify-content-center mt-5 gap-5 pb-5">
                  <img src={logoFacebook} width="30px" />
                  <img src={logoTwitter} width="30px" />
                  <img src={logoGoogle} width="30px" />
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
