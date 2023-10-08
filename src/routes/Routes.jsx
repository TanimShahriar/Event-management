import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage";
import Register from "../pages/Shared/Register";
import Login from "../pages/Shared/Login";
import Events from "../pages/Events/Events";
import Pricing from "../pages/Pricing/Pricing";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: '/categories/:id',
        element: <PrivateRoute><Events></Events></PrivateRoute>,
        loader: () => fetch('/event.json')
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>

      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      }

    ]
  },
]);

export default router;



