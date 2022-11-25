import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";

import Products from "../../Pages/Products/Products";
import Home from "../../Pages/Shared/Home/Home/Home";

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
            element: <Products />,
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: '/login',
            element: <Login />,
        }
        ]
    }
])