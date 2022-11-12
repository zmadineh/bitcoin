import {createBrowserRouter} from "react-router-dom";
import Layout from "../component/layout/Layout";
import HomePage from "../pages/home/homePage";
import LivePrice from "../pages/live-price/LivePrice";

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
                path: "/live",
                element: <LivePrice />
            },
        ],
    },
]);