import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

const DetailProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <NavbarNav />
      <div style={{ backgroundColor: "#DCDCDC" }}>
        <div
          className="justify-content-center"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div className="bg-white w-75" style={{ borderRadius: "0px" }}>
            <Row className="p-3">
              <Col md="12" lg="12">
                <div className="text-center">
                  <h1>Detail Product</h1>
                </div>
              </Col>
            </Row>
          </div>

          <div className="container mt-1">
            <Row className="p-5">
              <Col
                md={6}
                className="bg-white"
                style={{ borderRadius: "10px", height: "450px" }}
              >
                <Row className="pt-3">
                  <Col className="d-flex justify-content-center p-1">
                    <h6>Rp. {location.state.price}</h6>
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <div style={{ textAlign: "right", padding: "2px" }}>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 4,5
                    </div>
                  </Col>
                </Row>

                <Row
                  style={{
                    marginLeft: "40px",
                    marginTop: "25px",
                    paddingTop: "20px",
                  }}
                >
                  <h2>{location.state.title}</h2>
                  <hr />
                  <p>Brand : {location.state.brand}</p>
                  <p>Warna : {location.state.warna}</p>
                  <p>Ukuran : {location.state.size}</p>
                </Row>

                <Row className="d-flex justify-content-center pt-5">
                  <Button className="w-50 mb-2" variant="secondary">
                    Tambah
                  </Button>
                </Row>
                <Row className="d-flex justify-content-center">
                  <Button
                    className="w-50 d-flex justify-content-center"
                    variant="secondary"
                  >
                    Beli
                  </Button>
                </Row>
              </Col>

              <Col md={6}>
                <div style={{ height: "450px" }}>
                  <Card.Img
                    src={location.state.image}
                    style={{ height: "450px", objectFit: "fill" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProduct;
