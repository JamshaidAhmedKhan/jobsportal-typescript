import { createBrowserRouter as Router } from "react-router-dom";
import Login from "../pages/auth/login";
import { Signup } from "../pages/auth/signup";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import FindJobs from "../pages/FindJobs";
import BrowseCompanies from "../pages/BrowseCompanies";
import PostJobs from "../pages/PostJobs";
import Profile from "../pages/Profile";

const routes = Router([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/findjobs",
        element: <FindJobs />,
      },
      {
        path: "/browsecompanies",
        element: <BrowseCompanies />,
      },
      {
        path: "/postjobs",
        element: <PostJobs/>
      }
    ],
  },
  {
    path: "*",
    element: <div>NO page found</div>,
  },
]);

export default routes;
