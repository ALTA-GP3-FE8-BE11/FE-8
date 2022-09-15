import React, { useState, useEffect } from "react";
import { Col, Row, ListGroup, Card } from "react-bootstrap";
import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import logoGoogle from "../assets/google.png";
import logoFacebook from "../assets/facebook.png";
import logoTwitter from "../assets/twitter.png";
import Defaultpp from "../assets/Defaultpp.jpg";
import "../style/pageprofile.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import EditProfile from "../component/editProfile";

const PageProfile = () => {

  const [profil, setProfil] = useState([]);
  const [cookies, setCookies, removeCookies] = useCookies();
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/pageprofile')
  };

  const getProfil = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://52.25.13.136:80/users',
      headers: {
        'Authorization': `Bearer ${cookies.Token}`
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setProfil(response.data.Data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getProfil();
  }, [])

  // function log out
  const handleRemoveCookie = () => {
    removeCookies("Email")
    removeCookies("Password")
    alert('anda sudah logout')
    navigate('/login')
  }

  // function edit profile
  const [editName, setEditName] = useState();
  const [editEmail, setEditEmail] = useState();
  const [editPassword, setEditPassword] = useState();
  const [editAlamat, setEditAlamat] = useState();

  const handleEditName = (event) => {
    setEditName(event.target.value);
    console.log(editName);
  };
  const handleEditEmail = (event) => {
    setEditEmail(event.target.value);
  };
  const handleEditPassword = (event) => {
    setEditPassword(event.target.value);
  };
  const handleEditAlamat = (event) => {
    setEditAlamat(event.target.value);
  };

  const editProfile = (e) => {
    e.preventDefault();
    var axios = require('axios');
    var data = {
      nama_user: editName,
      email: editEmail,
      password: editPassword,
      alamat: editAlamat
    };
    console.log(data)

    var config = {
      method: 'put',
      url: 'http://52.25.13.136:80/users',
      headers: {
        'Authorization': `Bearer ${cookies.Token}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert('Selamat profil Anda berhasil diperbarui. Silakan untuk reload halaman profil')
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // show edit profile
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavbarNav />
      <div style={{ backgroundColor: "#DCDCDC" }}>
        <Row>
          <Col md="5">
            <h1 className="text-center mt-1 p-3">My Profile</h1>
            <Card.Img
              src={Defaultpp}
              className=""
              style={{ height: "37.722vw" }}
            />
          </Col>

          <Col md="7">
            <div className="container d-flex justify-content-center">
              <div
                className="bg-light p-5"
                style={{ width: "600px", height: "85vh" }}
              >
                <ListGroup
                  variant="flush"
                  style={{ width: "100%", lineHeight: "50px" }}
                  className=""
                >
                  <ListGroup.Item>{profil.nama_user}</ListGroup.Item>
                  <ListGroup.Item>{cookies.Email}</ListGroup.Item>
                  <ListGroup.Item>{cookies.Password}</ListGroup.Item>
                  <ListGroup.Item>{profil.alamat}</ListGroup.Item>
                  <EditProfile
                    handleClose={handleClose}
                    show={show}
                    handleEditName={handleEditName}
                    handleEditEmail={handleEditEmail}
                    handleEditPassword={handleEditPassword}
                    handleEditAlamat={handleEditAlamat}
                    handleSubmit={editProfile}
                  />
                </ListGroup>
                <div className="d-flex justify-content-center mt-5 gap-5 pb-5">
                  <img src={logoFacebook} alt="" width="30px" />
                  <img src={logoTwitter} alt="" width="30px" />
                  <img src={logoGoogle} alt="" width="30px" />
                </div>
                <div className="pb-5">
                  <a href="#" class="cta" onClick={handleShow}>
                    <span>Edit Profile</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
                <div className="pb-3">
                  <a href="#" class="cta" onClick={() => handleRemoveCookie()}>
                    <span>Log Out</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default PageProfile;
