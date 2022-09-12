import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HistoryCarts from "./pages/historyCart";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HistoryCarts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
