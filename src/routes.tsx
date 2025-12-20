import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { Categories, Employes, HomePage, Login, Register } from "./pages/index";

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
