import React from "react";
import { Route, Routes } from "react-router-dom";
import Billing from "../Components/Cart/Billing";
import Order from "../Components/Cart/Order";
import Clearence from "./All_Products _Pages/Clearence";
import Jeans from "./All_Products _Pages/Jeans";
import Men from "./All_Products _Pages/Men";
import SingleProduct from "./All_Products _Pages/SingleProduct";
import Women from "./All_Products _Pages/Women";
import HomePage from "./Home/HomePage";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "../Components/Cart/Cart";
import Shipping from "../Components/Cart/Shipping";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/women" element={<Women />} />
      <Route path="/women/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/placeorder" element={<Order />} />
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
