import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Error } from "../Pages/Error";
import { Repositories } from "../Pages/Repositories";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error/>
    },
    {
        path: '/repos/:login',
        element: <Repositories/>
    }
]);