import Header from './Components/Home';
import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
