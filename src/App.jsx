import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Root from './Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Favourites from './pages/Favourites/Favourites';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "/favourites",
              element: <Favourites />,
          },
      ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
