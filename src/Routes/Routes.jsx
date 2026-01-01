import { createBrowserRouter } from "react-router-dom";

import MainLayOuts from "../Layouts/MainLayOuts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
  
  },
]);

export default router;
