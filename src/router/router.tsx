import { createBrowserRouter } from "react-router";
import ExampleComponent from "../components/Example";
import route from "../constants/routes";
import IdeaCard_1 from "../components/IdeaCard_1";
import IdeaCard_3 from "../components/IdeaCard_3";
import IdeaCard_2 from "../components/IdeaCard_2";
import Workspace from "../components/Workspace";
import AccessRequest from "../components/AccessRequest";
import SignUp from "../components/SignUp";
import SignIn from "../components/Login/Index";
import ForgetPassword from "../components/ForgetPassword";
import VerifyEmail from "../components/VerifyEmail/VerifyEmail";
import ResetPassword from "../components/ResetPassword/ResetPassword";

// add your routes here
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
    path: route.idea_3,
    element: <IdeaCard_3 />,
  },
  {
    path: route.idea_2,
    element: <IdeaCard_2 />,
  },
  {
    path: route.Workspace,
    element: <Workspace />,
  },
  {
    path: route.AccessRequest,
    element: <AccessRequest />,
  },
  {
    path: route.SignUp,
    element: <SignUp />,
  },
  {
    path: route.Login,
    element: <SignIn />,
  },
  {
    path: route.ForgetPassword,
    element: <ForgetPassword />,
  },
  {
    path: route.VerifyEmail,
    element: <VerifyEmail />,
  },
  { path: route.ResetPassword, element: <ResetPassword /> }, // Assuming ResetPassword is similar to ForgetPassword
]);

export default router;
