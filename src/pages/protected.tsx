import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const token = localStorage.getItem("isLoggedIn");

  return token ? <Navigate to="/home" />: <Navigate to = '/' />;
};

export default Protected;

