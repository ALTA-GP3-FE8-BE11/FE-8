import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import { useCookies } from "react-cookie";
import Cart from "../component/cart";
import Checkout from "../component/checkout";
import ModalMod from "../component/modal";

const MyCart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cookies, setCookies, removeCookies] = useCookies();
  const [cart, setCart] = useState([]);

  // get all product in cart
  const getCart = () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'http://52.25.13.136:80/carts',
      headers: {
        'Authorization': `Bearer ${cookies.Token}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCart(response.data.Data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getCart();
  }, [])

  return (
    <div>
      <NavbarNav />
      <Container fluid className="p-5">
        <h3>My Cart</h3>
        <div className="pt-3">
          <Row>
            <Col md={12} lg="8">
              <div>
                {cart.map((item) => {
                  return (
                    <Cart
                      image={item.file_image}
                      title={item.nama_produk}
                      size={item.ukuran}
                      brand={item.merk}
                      harga={item.harga}
                      id={item.id}
                    />
                  )
                })}
              </div>
            </Col>
            <Col md={12} lg="4">
              <div className="px-3" style={{ border: "1px solid gray" }}>
                <h5 className="pt-3">Checkout</h5>
                <div className="container pt-3">
                  <Checkout />
                </div>
                <div className="pt-5 pb-3 d-flex justify-content-center">
                  <Button
                    className="w-75"
                    variant="secondary"
                    onClick={handleShow}
                  >
                    Bayar
                  </Button>
                  <ModalMod show={show} handleClose={handleClose} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default MyCart;
