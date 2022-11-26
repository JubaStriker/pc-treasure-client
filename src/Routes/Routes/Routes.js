import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/Dashboard/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/Orders/MyOrders";

import Products from "../../Pages/Products/Products";
import Home from "../../Pages/Shared/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [{
            path: '/',
            element: <Home />
        },
        {
            path: '/home',
            element: <Home />,

        },
        {
            path: '/blog',
            element: <Blog />
        },
        {
            path: '/category/:id',
            element: <PrivateRoute><Products /></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/signup',
            element: <SignUp />,
        }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders />
            }
        ]
    }
])