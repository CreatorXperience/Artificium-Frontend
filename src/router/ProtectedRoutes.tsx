// src/routes/ProtectedRoute.tsx
import { Navigate, useLocation } from "react-router";
import { useUser } from "../hooks/useUser";
import { Suspense, type ReactNode } from "react";
import { Loader } from "../components/Loader/Loader";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();
  const location = useLocation();

  if (!isLoading && !user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  if (isLoading) {
    return <Suspense fallback={<Loader />}></Suspense>;
  }
  if (!isLoading && user) {
    // User is authenticated, render the children components
    // if (!user.isVerified) {
    //   return (
    //     <Navigate
    //       to={`/verify-email?userId=${user.id}`}
    //       state={{ from: location }}
    //     />
    //   );
    // }

    return children;
  }
};

export default ProtectedRoute;
