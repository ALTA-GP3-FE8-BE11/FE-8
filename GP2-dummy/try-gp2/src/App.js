import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
