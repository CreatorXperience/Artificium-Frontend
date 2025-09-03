// src/routes/ProtectedRoute.tsx
import { Navigate, useLocation } from "react-router";
import { useUser } from "../hooks/useUser";
import { Suspense, type ReactNode } from "react";
import { Loader } from "../components/Loader/Loader";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading, isError } = useUser();
  const location = useLocation();

  if (isError) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  if (!isLoading && !user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  if (isLoading) {
    return <Suspense fallback={<Loader />}></Suspense>;
  }

  return children;
};

export default ProtectedRoute;
