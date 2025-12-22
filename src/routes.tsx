import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import {
  AllCategories,
  CategoryFormPage,
  Employes,
  HomePage,
  ItemFormPage,
  Login,
  Register,
} from "./pages/index";

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
        element: <AllCategories />,
      },

      {
        path: "new/category",
        element: <CategoryFormPage />,
      },
      {
        path: "new/item",
        element: <ItemFormPage />,
      },
    ],
  },
]);

export default router;
