import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
        <div className="d-flex justify-content-center pb-3">
          <button
            variant="primary"
            style={{
              width: "75%",
              color: "whitesmoke",
              backgroundColor: "gray",
              border: '1px solid gray',
              borderRadius: '8px'
            }}
            onClick={handleDetailPage}
          >
            Product Details
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
