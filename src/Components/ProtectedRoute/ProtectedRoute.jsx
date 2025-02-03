import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/connect" />;
};

export default ProtectedRoute;
