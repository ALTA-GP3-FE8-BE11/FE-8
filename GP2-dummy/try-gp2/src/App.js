import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teams from "./pages/team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
