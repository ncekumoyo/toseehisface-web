import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/Home";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={null} />
          <Route path="/studies" element={null} />
          <Route path="/media" element={null} />
          <Route path="/newsletter" element={null} />
          <Route path="/contact" element={null} />
          <Route path="/prayer" element={null} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
