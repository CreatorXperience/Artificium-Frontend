import { Navigate, useLocation } from "react-router";
import { useUser } from "../hooks/useUser";
import { type ReactNode } from "react";
import { Loader } from "../components/Loader/Loader";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  }

  if (!user || !user.id) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Example: if your app needs email verification
  // if (!user.isVerified) {
  //   return (
  //     <Navigate
  //       to={`/verify-email?userId=${user.id}`}
  //       state={{ from: location }}
  //       replace
  //     />
  //   );
  // }

  return <>{children}</>;
};

export default ProtectedRoute;
