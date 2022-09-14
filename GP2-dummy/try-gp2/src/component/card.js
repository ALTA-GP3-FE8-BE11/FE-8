import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import sepatu from "../assets/sepatu.png";

const Cards = ({ title, harga, image, handleDetailPage }) => {
  return (
    <div>
      <Card style={{ width: "14rem", marginTop: "2vw", marginLeft: "2vw" }}>
        <Card.Img variant="top" style={{ borderColor: "gray", width: '10rem', objectFit: 'cover' }} src={image} />
        <Card.Body style={{ borderColor: "gray" }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <div style={{ textDecoration: "underline" }}>{harga}</div>
            <div style={{ textAlign: "right" }}>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 4,5
            </div>
          </Card.Text>
        </Card.Body>
        <button
          variant="primary"
          style={{
            width: "100%",
            color: "whitesmoke",
            backgroundColor: "gray",
            borderColor: "gray",
          }}
          onClick={handleDetailPage}
        >
          Product Details
        </button>
      </Card>
    </div>
  );
};

export default Cards;
