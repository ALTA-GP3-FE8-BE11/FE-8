import React from "react";
import Navbar from "../component/navbar";
import Card from "react-bootstrap/Card";
import Team from "../component/team";
import Teams2 from "../component/team2";
import Footer from "../component/footer";

import Jar from "../assets/Jar.jpeg";
import dwi from "../assets/dwi.jpg";
import zul from "../assets/zul.jpg";

const Teams = () => {
  return (
    <>
      <div style={{ backgroundColor: "#D9D9D9" }}>
        <Navbar />
        <Team />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Card
            style={{
              marginTop: "5vw",
              marginLeft: "10%",
              width: "18rem",
              height: "14rem",
              border: "0",
              backgroundColor: "#D9D9D9",
            }}
          >
            <Card.Img
              style={{
                marginLeft: "5vw",
                height: "60%",
                width: "50%",
                borderRadius: "20%",
                textAlign: "center",
              }}
              variant="top"
              src={Jar}
            />
            <Card.Body>
              <Card.Title style={{ marginLeft: "2.5vw" }}>
                Ganjar Widatama
              </Card.Title>
              <Card.Text>
                Belajar ngoding itu stres, tapi lebih stres ga ngapa-ngapain
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              marginTop: "5vw",
              marginLeft: "10%",
              backgroundColor: "#D9D9D9",
              width: "18rem",
              height: "14rem",
              border: "0",
            }}
          >
            <Card.Img
              style={{
                marginLeft: "4vw",
                height: "60%",
                width: "55%",
                borderRadius: "20%",
                textAlign: "center",
              }}
              variant="top"
              src={zul}
            />
            <Card.Body>
              <Card.Title style={{ marginLeft: "2.5vw" }}>
                Rofifatuz Zulfa
              </Card.Title>
              <Card.Text>
                kerja, kerja, main, tipes, kembali ke kata pertama.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              marginTop: "5vw",
              marginLeft: "10%",
              backgroundColor: "#D9D9D9",
              width: "18rem",
              height: "14rem",
              border: "0",
            }}
          >
            <Card.Img
              style={{
                marginLeft: "5vw",
                height: "60%",
                width: "50%",
                borderRadius: "50%",
                textAlign: "center",
              }}
              variant="top"
              src={Jar}
            />
            <Card.Body>
              <Card.Title style={{ marginLeft: "2.5vw" }}>
                Ganjar Widatama
              </Card.Title>
              <Card.Text>
                Belajar ngoding itu stres, tapi lebih stres ga ngapa-ngapain
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Teams2 />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Card
            style={{
              marginTop: "0vw",
              marginLeft: "25%",
              backgroundColor: "#D9D9D9",
              width: "18rem",
              height: "14rem",
              border: "0",
            }}
          >
            <Card.Img
              style={{
                marginTop: "2vw",
                marginLeft: "5vw",
                height: "70%",
                width: "60%",
                borderRadius: "20%",
                textAlign: "center",
              }}
              variant="top"
              src={dwi}
            />
            <Card.Body>
              <Card.Title style={{ marginLeft: "2.5vw" }}>
                Muh Dwi Arifianto
              </Card.Title>
              <Card.Text>Jangan menyerah sebelum hari deadline</Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              marginTop: "2vw",
              marginLeft: "10%",
              marginBottom: "5vw",
              backgroundColor: "#D9D9D9",
              width: "18rem",
              height: "14rem",
              border: "0",
            }}
          >
            <Card.Img
              style={{
                marginLeft: "5vw",
                height: "60%",
                width: "50%",
                borderRadius: "50%",
                textAlign: "center",
              }}
              variant="top"
              src={Jar}
            />
            <Card.Body>
              <Card.Title style={{ marginLeft: "2.5vw" }}>
                Ganjar Widatama
              </Card.Title>
              <Card.Text>
                Belajar ngoding itu stres, tapi lebih stres ga ngapa-ngapain
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teams;
