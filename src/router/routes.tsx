import { Navigate, createBrowserRouter as Router } from "react-router-dom";
import Login from "../pages/auth/login";
import { Signup } from "../pages/auth/signup";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";

const routes = Router([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>  
            },
        ]
    },
    {
        path: '*',
        element: <div>NO page found</div>,
    },
])

export default routes;