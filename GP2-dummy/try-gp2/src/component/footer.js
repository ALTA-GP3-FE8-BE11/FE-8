import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/footer.css";

const Footer = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark text-white p-3">
        <Container fluid>
          <Row className="justify-content-center w-100 text-white">
            <Col xs={8} md="6">
              <Col xs={12} md="6">
                <h5>Kutsuya.com</h5>
                <p style={{ marginLeft: "10px" }}>
                  Life is a journey to be experienced, not a problem to be
                  solved
                </p>
              </Col>
            </Col>
            <Col xs={6} md="3" className="footer-content">
              <div>
                <h5>About</h5>
                <div style={{ marginLeft: "10px" }}>
                  <Link
                    to="/team"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Staff
                  </Link>
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <Link
                    to="/contactus"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={6} md="3" className="footer-content">
              <div>
                <h5>Social</h5>
                <div style={{ marginLeft: "10px" }}>
                  <Link
                    to="https://www.kaskus.co.id/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Instagram
                  </Link>
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <Link
                    to="https://www.tiktok.com/id-ID/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
