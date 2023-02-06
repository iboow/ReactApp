import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/error";
import Accomodation from "./pages/accomodation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/accomodation" element={<Accomodation />} />
      </Routes>
    </BrowserRouter>
  );
}
