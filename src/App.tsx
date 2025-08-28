import { RouterProvider } from 'react-router';
import router from './router/router';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './context/UserProvider';
import { SocketProvider } from './context/SocketProvider';
import MediaProvider from './context/MediaProvider';
import { ProjectProvider } from './context/ProjectProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const client = new QueryClient();
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
function App() {
  // Hello
  return (
    <div className=''>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Toaster position='top-right' reverseOrder={false} />
        <QueryClientProvider client={client}>
          <ReactQueryDevtools initialIsOpen={false} />
          <UserProvider>
            <SocketProvider>
              <MediaProvider>
                <ProjectProvider>
                  <RouterProvider router={router}></RouterProvider>
                </ProjectProvider>
              </MediaProvider>
            </SocketProvider>
          </UserProvider>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
