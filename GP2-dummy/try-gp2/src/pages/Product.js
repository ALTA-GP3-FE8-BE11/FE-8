import React, { useEffect, useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import ModProd from "../component/mod-prod";
import Cards from "../component/card";
import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import "../style/productpage.css";

const baseImage =
    "https://i.scdn.co/image/ab6761610000e5eb5704a64f34fe29ff73ab56bb";

const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [namaproduk, setNamaproduk] = useState([]);
    const [brand, setBrand] = useState([]);
    const [ukuran, setUkuran] = useState([]);
    const [gender, setGender] = useState([]);
    const [harga, setHarga] = useState([]);
    const [gambar, setGambar] = useState([]);
    const [deskripsi, setDeskripsi] = useState([]);

    const handleDetailPage = (item) => {
        navigate("/detailproduct", {
            state: {
                image: item.file_image,
                title: item.nama_produk,
                size: item.ukuran,
                warna: item.warna,
                price: item.harga,
                brand: item.merk,
            },
        });
    };

    const getData = async () => {
        var axios = require("axios");
        var config = {
            method: "get",
            url: "http://52.25.13.136:80/products",
            headers: {
                "Content-Type": "application/json",
            },
        };
        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                setProducts(response.data.Data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const [cookies, setCookies, removeCookies] = useCookies();

    const addProduct = () => {
        var axios = require("axios");

        var data = {
            nama_produk: namaproduk,
            ukuran: ukuran,
            merk: brand,
            gender_pengguna: gender,
            harga: harga,
            file_image: gambar,
            deskripsi: deskripsi,
        };
        // console.log(data)

        var config = {
            method: "post",
            url: "http://52.25.13.136:80/products",
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NjMyNzgwNDgsInVzZXJJZCI6Mzh9.haWrjIW6qxQH0cr9-oWjamPSNG0pcBHCfKHDFeeanqM',
                'Content-Type': 'application/json'
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                getData();
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    };

    // show add product
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNamaproduk = (event) => {
        setNamaproduk(event.target.value);
        console.log(namaproduk);
    };
    const handleBrand = (event) => {
        setBrand(event.target.value);
    };
    const handleUkuran = (event) => {
        setUkuran(event.target.value);
    };
    const handleGender = (event) => {
        setGender(event.target.value);
    };
    const handleHarga = (event) => {
        setHarga(event.target.value);
    };
    const handleGambar = (event) => {
        setGambar(event.target.value);
    };
    const handleDeskripsi = (event) => {
        setDeskripsi(event.target.value);
    };

    return (
        <div>
            <NavbarNav />
            <div className="d-flex justify-content-end px-5 pt-3">
                <Button className="mx-1" variant="secondary" onClick={handleShow}>
                    Add Product
                </Button>

                <ModProd
                    handleSubmit={(e) => addProduct(e.target.value)}
                    show={show}
                    handleClose={handleClose}
                    handleNamaproduk={handleNamaproduk}
                    handleBrand={handleBrand}
                    handleUkuran={handleUkuran}
                    handleGender={handleGender}
                    handleHarga={handleHarga}
                    handleGambar={handleGambar}
                    handleDeskripsi={handleDeskripsi}
                />
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
                                );
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
