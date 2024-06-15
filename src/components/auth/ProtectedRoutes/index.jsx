import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children, isLogin, redirect = "/login" }) => {
  const navigate = useNavigate();
  console.log(redirect);
  if (!isLogin) return navigate(redirect);
  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
