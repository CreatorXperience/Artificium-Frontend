import { createBrowserRouter } from "react-router";
import { lazy, Suspense, type JSX } from "react";
import route from "../constants/routes";

import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";

// Lazy imports
const ExampleComponent = lazy(() => import("../components/Example"));
const IdeaCard_1 = lazy(() => import("../components/IdeaCard_1"));
const IdeaCard_2 = lazy(() => import("../components/IdeaCard_2"));
const IdeaCard_3 = lazy(() => import("../components/IdeaCard_3"));
const Workspace = lazy(() => import("../pages/Workspace"));
const AccessRequest = lazy(() => import("../components/AccessRequest"));
const SignIn = lazy(() => import("../pages/Login/Index"));
const ForgetPassword = lazy(() => import("../components/ForgetPassword"));
const VerifyEmail = lazy(() => import("../components/VerifyEmail/VerifyEmail"));
const NewWorkspace = lazy(() => import("../pages/Workspace-new"));
const ResetPassword = lazy(
  () => import("../components/ResetPassword/ResetPassword")
);
const SignUp = lazy(() => import("../pages/SignUp"));
const WorkspacePreviewPage = lazy(
  () => import("../components/AccessRequest/ WorkspacePreviewPage")
);

// Loader component
// Remove the Loader component definition and import Loader from the new file
import { Loader } from "../components/Loader/Loader.tsx";

const withSuspense = (element: JSX.Element) => (
  <Suspense fallback={<Loader />}>{element}</Suspense>
);
import WorkspacePage from "../pages/Workspace/WorkspacePage";

const router = createBrowserRouter([
  {
    path: route.workspace,
    element: withSuspense(
      <ProtectedRoute>
        <NewWorkspace />
      </ProtectedRoute>
    ),
  },
  {
    path: route.home,
    element: (
      <ProtectedRoute>
        <WorkspacePage />
      </ProtectedRoute>
    ),
  },

  {
    path: route.example,
    element: withSuspense(
      <ProtectedRoute>
        <ExampleComponent />
      </ProtectedRoute>
    ),
  },
  {
    path: route.idea_1,
    element: withSuspense(<IdeaCard_1 />),
  },
  {
    path: route.idea_2,
    element: withSuspense(<IdeaCard_2 />),
  },
  {
    path: route.idea_3,
    element: withSuspense(<IdeaCard_3 />),
  },
  {
    path: route.joinWorkspace,
    element: withSuspense(
      <ProtectedRoute>
        <Workspace />
      </ProtectedRoute>
    ),
  },
  {
    path: `${route.AccessRequest}/:id`,
    element: withSuspense(
      <ProtectedRoute>
        <AccessRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: `${route.workSpacePreview}/:id`,
    element: withSuspense(
      <ProtectedRoute>
        <WorkspacePreviewPage />
      </ProtectedRoute>
    ),
  },

  {
    path: route.Login,
    element: withSuspense(
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: route.SignUp,
    element: withSuspense(
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: route.ForgetPassword,
    element: withSuspense(
      <PublicRoute>
        <ForgetPassword />
      </PublicRoute>
    ),
  },
  {
    path: route.ResetPassword,
    element: withSuspense(<ResetPassword />),
  },
  {
    path: route.VerifyEmail,
    element: withSuspense(<VerifyEmail />),
  },
]);

export default router;
