import { RouterProvider } from "react-router";
import router from "./router/router";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient();
function App() {
  return (
    <div className="">
      <QueryClientProvider client={client}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
