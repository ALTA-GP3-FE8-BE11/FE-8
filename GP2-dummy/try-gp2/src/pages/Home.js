import React from "react";
import Cards from "../component/card";
import Footer from "../component/footer";
import NavbarNav from "../component/navbar";
import { Tab, Tabs } from "react-bootstrap";
import "../style/footer.css";

const Home = () => {
  return (
    <div>
      <NavbarNav />
      <div className="d-flex">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
