import React from "react";
import { Route, Routes } from "react-router-dom";
import Shoppingbag from "../Components/Cart/Shoppingbag";
import Clearence from "./All_Products _Pages/Clearence";
import Jeans from "./All_Products _Pages/Jeans";
import Men from "./All_Products _Pages/Men";
// import Men from "./All_Products _Pages/Men";
import SingleProduct from "./All_Products _Pages/SingleProduct";
import Women from "./All_Products _Pages/Women";
import HomePage from "./Home/HomePage";
import Login from "./Login";
import Signup from "./Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/women" element={<Women />} />
      <Route path="/women/:id" element={<SingleProduct />} />
      <Route path="/shopingbag" element={<Shoppingbag />} />
      <Route path="/men/" element={<Men />} />
      <Route path="/men/:id" element={<SingleProduct />} />
      <Route path="/jeans" element={<Jeans />} />
      <Route path="/jeans/:id" element={<SingleProduct />} />
      <Route path="/clearence" element={<Clearence />} />
      <Route path="/clearence/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default MainRoutes;
