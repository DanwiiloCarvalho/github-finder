import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Repositories } from "../Pages/Repositories";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/repos/:login',
        element: <Repositories />
    }
]);