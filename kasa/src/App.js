import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import Error from "./pages/Error/error";
import Accomodation from "./pages/Accomodation/accomodation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="/accomodation" element={<Accomodation />} />
      </Routes>
    </BrowserRouter>
  );
}
