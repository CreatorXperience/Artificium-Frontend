import { RouterProvider } from "react-router";
import router from "./router/router";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

const client = new QueryClient();
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";
function App() {
  return (
    <div className="">
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Toaster position="top-right" reverseOrder={false} />
        <QueryClientProvider client={client}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
