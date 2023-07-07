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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
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
                path: "/product-details",
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
                element: <Dashboard />
            },
            {
                path: "/dashboard/customer",
                element: <PrivateRoute><CustomerList /></PrivateRoute>
            },
            {
                path: "/dashboard/customer/create",
                // element: <PrivateRoute><AddCustomer /></PrivateRoute>
                element: <AddCustomer />
            },
            {
                path: "/dashboard/customer/details/:id",
                // element: <PrivateRoute><CustomerDetails /></PrivateRoute>
                element: <CustomerDetails />
            },
        ]
    },
]);

export default router;