import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import RouteError from "../Components/RouteError";
import AppDetail from "../Pages/AppDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <RouteError></RouteError>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/appDetail/:id",
        Component : AppDetail
      }
    ],
  },
]);

export default router;
