import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Categories from "../pages/categories";
import Home from "../pages/home";
import Subsidiaries from "../pages/subsidiaries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/subsidiaries",
        element: <Subsidiaries />
      },
      {
        path: "/categories",
        element: <Categories />
      }
    ]
  },
]);

export default router;
