import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Employes from "./pages/Employes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "employes",
        element: <Employes />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
]);

export default router;
