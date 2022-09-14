import React, { useEffect, useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import Cards from "../component/card";
import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import { Link, useNavigate } from "react-router-dom";
import "../style/productpage.css";
import axios from "axios";

const baseImage = 'https://i.scdn.co/image/ab6761610000e5eb5704a64f34fe29ff73ab56bb'

const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const handleDetailPage = (item) => {
        navigate("/try", {
            state: {
                image: item.file_image,
                title: item.nama_produk,
                size: item.ukuran,
                warna: item.warna,
                price: item.harga,
                brand: item.merk
            }
        });
    };

    const getData = async () => {
        var axios = require('axios');
        var config = {
            method: 'get',
            url: 'http://52.25.13.136:80/products',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setProducts(response.data.Data)
                console.log(response.data.Data.id)
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <NavbarNav />
            <div className="d-flex justify-content-end px-5 pt-3">
                <Link to="/historyCart">
                    <Button variant="secondary">History Cart</Button>
                </Link>
            </div>
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
                            {products.map((item) => {
                                return (
                                    <Cards
                                        image={item.file_image}
                                        title={item.nama_produk}
                                        harga={item.harga}
                                        handleDetailPage={() => handleDetailPage(item)}
                                    />
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    );
};

export default Product;
