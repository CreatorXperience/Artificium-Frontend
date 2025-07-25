import { createBrowserRouter } from "react-router";
import ExampleComponent from "../components/Example";
import route from "../constants/routes";
import IdeaCard_1 from "../components/IdeaCard_1";
import IdeaCard_2 from "../components/IdeaCard_2";
import IdeaCard_3 from "../components/IdeaCard_3";
import Workspace from "../pages/Workspace";
import AccessRequest from "../components/AccessRequest";
import SignIn from "../pages/Login/Index";
import ForgetPassword from "../components/ForgetPassword";
import VerifyEmail from "../components/VerifyEmail/VerifyEmail";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import SignUp from "../pages/SignUp";

import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";

const router = createBrowserRouter([
  {
    path: route.home,
    element: <ExampleComponent />,
  },
  {
    path: route.idea_1,
    element: <IdeaCard_1 />,
  },
  {
    path: route.idea_2,
    element: <IdeaCard_2 />,
  },
  {
    path: route.idea_3,
    element: <IdeaCard_3 />,
  },
  {
    path: route.Workspace,
    element: (
      <ProtectedRoute>
        <Workspace />
      </ProtectedRoute>
    ),
  },
  {
    path: route.AccessRequest,
    element: (
      <ProtectedRoute>
        <AccessRequest />
      </ProtectedRoute>
    ),
  },
  // 🔐 Public-only routes (auth pages)
  {
    path: route.Login,
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: route.SignUp,
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: route.ForgetPassword,
    element: (
      <PublicRoute>
        <ForgetPassword />
      </PublicRoute>
    ),
  },
  {
    path: route.ResetPassword,
    element: (
      <PublicRoute>
        <ResetPassword />
      </PublicRoute>
    ),
  },
  {
    path: route.VerifyEmail,
    element: (
      <PublicRoute>
        <VerifyEmail />
      </PublicRoute>
    ),
  },
]);

export default router;
