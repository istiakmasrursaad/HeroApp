import { createBrowserRouter } from "react-router-dom";

import MainLayOuts from "../Layouts/MainLayOuts";
import Allapps from "../Pages/Allapps";
import MyInstallation from "../Pages/Installation";
import AppDetails from "../Pages/Appdetails";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
     children: [
          {
            index: true,
            element: <Home />,
            loader: () => fetch("/Appdata.json"),
          },
          {
            path: "/apps",
            element: <Allapps />,
            loader: () => fetch("/Appdata.json"),
          },
          {
            path: "/installation",
            element: <MyInstallation />,
          },
          {
            path: "/appdetails",
            element: <AppDetails />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
  
  },
]);

export default router;
