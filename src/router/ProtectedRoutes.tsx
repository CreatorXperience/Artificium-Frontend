// src/routes/ProtectedRoute.tsx
import { Navigate, useLocation } from "react-router";
import { useUser } from "../hooks/useUser";
import { Suspense, type ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();
  const location = useLocation();

  if (!isLoading && !user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  if (isLoading) {
    return <Suspense fallback={<h1>Loading</h1>}></Suspense>;
  }
  if (!isLoading && user) {
    return children;
  }
};

export default ProtectedRoute;
