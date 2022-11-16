import {createBrowserRouter} from "react-router-dom";
import Layout from "../component/layout/Layout";
import HomePage from "../pages/home.page/homePage";
import LivePrice from "../pages/live-price.page/LivePrice";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/live-price",
                element: <LivePrice />
            },
        ],
    },
]);