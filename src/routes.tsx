import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ItemsTable from "./components/ItemsTable";
import Employes from "./pages/Employes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Categories from "./pages/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ItemsTable />,
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
