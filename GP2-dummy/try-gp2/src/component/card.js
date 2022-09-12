import React from "react";
import { Card, Button } from "react-bootstrap";
import sepatu from "../assets/sepatu.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  return (
    <div>

      <Card style={{ width: "18rem", marginTop: "2vw", marginLeft: "2vw" }}>
        <Card.Img variant="top" style={{ borderColor: "gray" }} src={sepatu} />
        <Card.Body style={{ borderColor: "gray" }}>
          <Card.Title>Nike Aja Ini Mah</Card.Title>
          <Card.Text>
            <div style={{ textDecoration: "underline" }}>Rp 6.000.000</div>
            <div style={{ textAlign: "right" }}>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 4,5
            </div>
          </Card.Text>
          <Button
            variant="primary"
            style={{
              width: "100%",
              color: "whitesmoke",
              backgroundColor: "gray",
              borderColor: "gray",
            }}
          >
            Product Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
