import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/Home";
import About from "./components/About";
import Studies from "./components/Studies";
import Media from "./components/Media";
import Newsletter from "./components/Newsletter";
import Prayer from "./components/Prayer";
import Contact from "./components/Contact";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/media" element={<Media />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prayer" element={<Prayer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
