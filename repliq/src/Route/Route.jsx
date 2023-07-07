import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layouts/Main/Main.jsx";
import Registration from "../Pages/Registration/Registration.jsx";
import Login from "../Pages/Login/Login.jsx";
import ProductList from "../Pages/ProductList/ProductList.jsx";
import ProductDetails from "../Pages/ProductDetails/ProductDetails.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import Dashboard from "../Dashboard/Dashboard/Dashboard.jsx";
import DashboardLayouts from "../Layouts/Dashboard/DashboardLayouts.jsx";
import CustomerList from "../Dashboard/CustomerList/CustomerList.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AddCustomer from "../Dashboard/AddCustomer/AddCustomer.jsx";
import CustomerDetails from "../Dashboard/CustomerDetails/CustomerDetails.jsx";
import AddProductByAdmin from "../Dashboard/AddProduct/AddProductByAdmin.jsx";
import AdminProductList from "../Dashboard/ProductList/AdminProductList.jsx";
import AdminProductDetails from "../Dashboard/ProductDetails/AdminProductDetails.jsx";
import OrderList from "../Dashboard/OrderList/OrderList.jsx";
import OrderDetails from "../Dashboard/OrderDetails/OrderDetails.jsx";
import Home from "../Pages/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/all-product",
                element: <ProductList />
            },
            {
                path: "/product-details/:id",
                element: <ProductDetails />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayouts />,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
            {
                path: "/dashboard/customer",
                element: <PrivateRoute><CustomerList /></PrivateRoute>
            },
            {
                path: "/dashboard/customer/create",
                element: <PrivateRoute><AddCustomer /></PrivateRoute>
            },
            {
                path: "/dashboard/customer/details/:id",
                element: <PrivateRoute><CustomerDetails /></PrivateRoute>
            },
            {
                path: "/dashboard/product",
                element: <PrivateRoute><AdminProductList /></PrivateRoute>
            },
            {
                path: "/dashboard/product/create",
                element: <PrivateRoute><AddProductByAdmin /></PrivateRoute>
            },
            {
                path: "/dashboard/product/details/:id",
                element: <PrivateRoute><AdminProductDetails /></PrivateRoute>
            },
            {
                path: "/dashboard/order",
                element: <PrivateRoute><OrderList /></PrivateRoute>
            },
            {
                path: "/dashboard/order/details/:id",
                element: <PrivateRoute><OrderDetails /></PrivateRoute>
            },
        ]
    },
]);

export default router;