import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index:true,
                element: <Home></Home>,
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
           {
            path: "login",
            element: <Login></Login>,
           },
           {
            path: "register",
            element: <Register></Register>,
           },
           {
            path: "/dashboard",
            element: <DashboardLayout></DashboardLayout>
           }
        ]
      },
])

export default router;