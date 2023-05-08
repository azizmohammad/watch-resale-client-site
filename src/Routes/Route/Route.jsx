import { createBrowserRouter } from "react-router-dom";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import AllOrders from "../../Dashboard/AllOrders/AllOrders";
import AllSellers from "../../Dashboard/AllSellers/AllSellers";
import CategoryAdded from "../../Dashboard/CategoryAdded/CategoryAdded";
import DashbordLayout from "../../Dashboard/DashBordLayout/DashbordLayout";
import MyOrder from "../../Dashboard/MyOrder/MyOrder";
import ProductAdded from "../../Dashboard/ProductAdded/ProductAdded";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import AllWatch from "../../Pages/Home/ResaleWatch/AllWatch";
import Login from "../../Pages/Login/Login";
import ErrorsPage from "../../Pages/Shared/ErrorsPage/ErrorsPage";
import SingUp from "../../Pages/SingUp/SingUp";
import PrivateRoutes from "../Private/PrivateRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorsPage></ErrorsPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>,
            },
            {
                path: '/allwatch',
                element: <AllWatch></AllWatch>
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },

        ]
    },


    {
        path: '/dashboard',
        element: <PrivateRoutes><DashbordLayout></DashbordLayout></PrivateRoutes>,
        errorElement: <ErrorsPage></ErrorsPage>,

        children: [
            {
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>,
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyers></AllBuyers>,
            },
            {
                path: '/dashboard/allseller',
                element: <AllSellers></AllSellers>,
            },
            {
                path: '/dashboard/allorders',
                element: <AllOrders></AllOrders>,
            },
            {
                path: '/dashboard/addproduct',
                element: <ProductAdded></ProductAdded>,
            },

            {
                path: '/dashboard/addcategory',
                element: <CategoryAdded></CategoryAdded>,
            },

        ]
    }


])

export default router;