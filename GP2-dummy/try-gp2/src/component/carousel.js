import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sepatu from "../assets/sepatu.png";

const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block h-50 w-50 "
          style={{ marginLeft: "25%" }}
          src={sepatu}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block h-50 w-50"
          style={{ marginLeft: "25%" }}
          src={sepatu}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="" style={{ color: "white" }}>
            Nike Aja ini mah
          </h3>
          <p>Sepatu Nike Dengan harga Murah </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
