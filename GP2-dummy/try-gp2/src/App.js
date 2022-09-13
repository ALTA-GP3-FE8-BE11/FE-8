import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import DetailProduct from "./pages/DetailProduct";
import HistoryCarts from "./pages/historyCart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyCart from "./pages/myCart";
import PageProfile from "./pages/PageProfile";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Teams from "./pages/team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
        <Route path="/pageprofile" element={<PageProfile />} />
        <Route path="/historyCart" element={<HistoryCarts />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
