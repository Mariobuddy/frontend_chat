import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children, isLogin, redirect = "/login" }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate(redirect);
    }
  }, [isLogin, navigate, redirect]);

  if (!isLogin) return null;

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
