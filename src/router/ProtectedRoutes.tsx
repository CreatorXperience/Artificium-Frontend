// src/routes/ProtectedRoute.tsx
import { Navigate, useLocation } from "react-router";
import { useUser } from "../hooks/useUser";
import type { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const location = useLocation();

  if (!user?.id) {
    // Not authenticated? Redirect to login.
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
