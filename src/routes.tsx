import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import {
  AllCategories,
  CategoryFormPage,
  EmployeFormPage,
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
        path: "update-category/:id",
        element: <CategoryFormPage />,
      },
      {
        path: "update-employe/:id",
        element: <EmployeFormPage />,
      },
      {
        path: "new/employe",
        element: <EmployeFormPage />,
      },
      {
        path: "new/item",
        element: <ItemFormPage />,
      },
      {
        path: "update-item/:id",
        element: <ItemFormPage />,
      },
    ],
  },
]);

export default router;
