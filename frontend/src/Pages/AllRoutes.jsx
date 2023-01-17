import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";


const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>


    </Routes>
  );
};
export default AllRoutes;
// <Route path="/singleproduct/:id"  element={<SingleProduct />} />
//check
