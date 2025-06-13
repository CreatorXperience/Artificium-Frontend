import { createBrowserRouter } from "react-router";
import ExampleComponent from "../components/Example";
import route from "../constants/routes";

// add your routes here
const router = createBrowserRouter([
  {
    path: route.home,
    element: <ExampleComponent />,
  },
]);

export default router;
