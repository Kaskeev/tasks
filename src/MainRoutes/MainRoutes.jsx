import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "../components/Counter/Counter";
import Home from "../components/Home/Home";
import Receipts from "../components/Receipts/Receipts";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/receipts" element={<Receipts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
