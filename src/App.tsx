import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import RootLayout from './components/root-layout';
import Homepage from './pages/home';
import NotFoundPage from './pages/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
        index: true,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
