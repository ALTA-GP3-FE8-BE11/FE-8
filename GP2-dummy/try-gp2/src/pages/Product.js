import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import Cards from "../component/card";
import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import { Link, useNavigate } from "react-router-dom";
import "../style/productpage.css";

const Product = () => {
  const navigate = useNavigate();

  const handleDetailPage = () => {
    navigate("/detailproduct");
  };
  return (
    <div>
      <NavbarNav />
      <Link to="/historyCart">
        <div className="d-flex justify-content-end px-5 pt-3">
          <Button variant="secondary">History Cart</Button>
        </div>
      </Link>
      <div className="container-fluid d-flex gap-3 p-3">
        <Row className="w-100 pb-3 pt-3">
          <Col xs={12} md="2">
            <div className="pb-3">
              <ListGroup>
                <ListGroup.Item>Pria</ListGroup.Item>
                <ListGroup.Item>Wanita</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col xs={12} md="10">
            <div className="d-flex flex-wrap justify-content-center gap-3 container-content">
              <Cards handleDetailPage={() => handleDetailPage()} />
              <Cards handleDetailPage={() => handleDetailPage()} />
              <Cards handleDetailPage={() => handleDetailPage()} />
              <Cards handleDetailPage={() => handleDetailPage()} />
              <Cards handleDetailPage={() => handleDetailPage()} />
              <Cards handleDetailPage={() => handleDetailPage()} />
              <Cards handleDetailPage={() => handleDetailPage()} />
              <Cards handleDetailPage={() => handleDetailPage()} />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
