import React from "react";
import Navbar from "../component/navbar";
import Card from "react-bootstrap/Card";
import Jar from "../assets/Jar.jpeg";
import Team from "../component/team";
import Teams2 from "../component/team2";
import Footer from "../component/footer";
const Teams = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#D9D9D9" }}>
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
              marginTop: "5vw",
              marginLeft: "25%",
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
          {/* <Card
            style={{
              marginTop: "5vw",
              marginLeft: "10%",
              width: "18rem",
              height: "14rem",
              border: "0",
            }}
          ></Card> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teams;
