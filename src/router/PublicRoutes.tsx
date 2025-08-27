import { Navigate, useLocation } from "react-router";
import { useUser } from "../hooks/useUser";
import { type ReactNode } from "react";
import { Loader } from "../components/Loader/Loader";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  }

  if (user?.id) {
    console.log("User is authenticated:", user);
    // If user is logged in, redirect to the page they came from
    const redirectTo = location.state?.from?.pathname || "/";
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
