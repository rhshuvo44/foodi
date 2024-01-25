import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Signup from "../pages/Signup";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: (
          <PrivateRouter>
            <Menu />
          </PrivateRouter>
        ),
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
]);
export default router;
