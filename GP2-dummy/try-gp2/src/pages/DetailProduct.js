import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import sepatu from "../assets/sepatu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DetailProduct = () => {
  return (
    <div>
      <NavbarNav />
      <div style={{ backgroundColor: "#DCDCDC" }}>
        <div
          className="container p-2 "
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
                    <h6>Rp. 600.000</h6>
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
                  <h2> NIKE </h2>
                  <hr />
                  <p>Bahan : kulit asli</p>
                  <p>Warna : hitam, coklat</p>
                  <p>Ukuran : 36, 37, 38, 39, 40, 41, 42</p>
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
                <Card.Img src={sepatu} className="p-3 mt-4" />
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
