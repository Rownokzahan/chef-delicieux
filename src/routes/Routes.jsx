import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Chef from "../pages/Chef";
import { ChefAndRecipesLoader } from "../loaders/ChefAndRecipesLoader";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog";
import ChefsAndLatestRecipesLoader from "../loaders/ChefsAndLatestRecipesLoader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: ChefsAndLatestRecipesLoader
            },

            {
                path: "/chef/:id",
                element: <PrivateRoute><Chef /></PrivateRoute>,
                loader: ({ params }) => ChefAndRecipesLoader(params.id)
            },

            {
                path: "/blog",
                element: <Blog />
            },

            {
                path: "/login",
                element: <Login />
            },

            {
                path: "/register",
                element: <Register />
            },
        ]
    },
]);

export default router;