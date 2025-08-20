// src/routes/PublicRoute.tsx
// import { Navigate } from "react-router";
import { Navigate } from "react-router";
import { useUser } from "../hooks/useUser";
import { Suspense, type ReactNode } from "react";
import { Loader } from "../components/Loader/Loader";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <Suspense fallback={<Loader />}></Suspense>;
  }
  if (!isLoading && user?.id) {
    // Authenticated user trying to visit login, signup, etc.? Redirect to home.
    return <Navigate to="/workspace" replace />;
  }

  return children;
};

export default PublicRoute;
