import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
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
            loader: () => fetch('http://localhost:5000/categories')
        },
        {
            path: '/blog',
            element: <Blog />
        }
        ]
    }
])