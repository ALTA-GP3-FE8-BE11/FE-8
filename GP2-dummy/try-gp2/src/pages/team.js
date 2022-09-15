import React from "react";
import Navbar from "../component/navbar";
import Team from "../component/team";
import Teams2 from "../component/team2";
import Footer from "../component/footer";
import "../style/team1.css";

import Jar from "../assets/Jar.jpeg";
import Dwi from "../assets/dwi.jpg";
import Zul from "../assets/zul.jpg";
import Arif from "../assets/Arif.jpg";

const Teams = () => {
  return (
    <>
      <div style={{ backgroundColor: "#D9D9D9" }}>
        <Navbar />
        <Team />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card p-0">
                <div className="card-image">
                  <img src={Jar} alt="" />
                </div>
                <div className="card-content d-flex flex-column align-items-center">
                  <h4 className="pt-2">Ganjar Widatama</h4>
                  <h5>
                    belajar ngoding itu stres,tapi lebih stres ga ngapa-ngapain
                  </h5>

                  <ul className="social-icons d-flex justify-content-center">
                    <li>
                      <a href="www.facebook.com">
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="www.twitter.com">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="www.instagram.com">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card p-0">
                <div className="card-image">
                  <img src={Zul} alt="" />
                </div>
                <div className="card-content d-flex flex-column align-items-center">
                  <h4 className="pt-2">Rofifatuz Zulfa</h4>
                  <h5>kerja, kerja, main, tipes, kembali ke kata pertama</h5>

                  <ul className="social-icons d-flex justify-content-center">
                    <li>
                      <a href="www.facebook.com">
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="www.twitter.com">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="www.instagram.com">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card p-0">
                <div className="card-image">
                  <img src={Arif} alt="" />
                </div>
                <div className="card-content d-flex flex-column align-items-center">
                  <h4 className="pt-2">Arif fiyana</h4>
                  <h5>jangan ampe jadi bang toyib</h5>

                  <ul className="social-icons d-flex justify-content-center">
                    <li>
                      <a href="www.facebook.com">
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="www.twitter.com">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="www.instagram.com">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Teams2 />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card p-0">
                <div className="card-image">
                  <img src={Dwi} alt="" />
                </div>
                <div className="card-content d-flex flex-column align-items-center">
                  <h4 className="pt-2">Muh Dwi Arifianto</h4>
                  <h5>jangan menyerah sebelum hari deadline</h5>

                  <ul className="social-icons d-flex justify-content-center">
                    <li>
                      <a href="www.facebook.com">
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="www.twitter.com">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="www.instagram.com">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card p-0">
                <div className="card-image">
                  <img
                    src="https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=Farhan"
                    alt=""
                  />
                </div>
                <div className="card-content d-flex flex-column align-items-center">
                  <h4 className="pt-2">Rofifatuz Zulfa</h4>
                  <h5>kerja, kerja, main, tipes, kembali ke kata pertama</h5>

                  <ul className="social-icons d-flex justify-content-center">
                    <li>
                      <a href="www.facebook.com">
                        <span className="fab fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="www.twitter.com">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="www.instagram.com">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teams;
