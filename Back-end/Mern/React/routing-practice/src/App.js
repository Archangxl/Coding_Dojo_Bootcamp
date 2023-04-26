import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import WordOrNumber from "./Components/WordOrNumber";
import ThreePartRoute from "./Components/ThreePartRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:wordOrNumber" element={<WordOrNumber />} />
        <Route path="/:word/:textColor/:backgroundColor" element={<ThreePartRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
