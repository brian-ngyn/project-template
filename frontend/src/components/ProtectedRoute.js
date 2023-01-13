import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoute = () => {
  const { user } = useUserAuth();

  if (user == null) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
