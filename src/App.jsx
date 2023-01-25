import React from "react";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog/:title" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
