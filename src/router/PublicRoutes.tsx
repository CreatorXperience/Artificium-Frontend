// src/routes/PublicRoute.tsx
// import { Navigate } from "react-router";
import { useUser } from "../hooks/useUser";
import type { ReactNode } from "react";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  if (user?.id) {
    // Authenticated user trying to visit login, signup, etc.? Redirect to home.
    // return <Navigate to="/workspace" replace />;
  }

  return children;
};

export default PublicRoute;
