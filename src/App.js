import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

import Product from "./components/Product/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products/:gameName" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
