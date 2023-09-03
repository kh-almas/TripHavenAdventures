import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../Layouts/Dashboard/DashboardLayouts.jsx";
import Main from "../Layouts/Main/Main.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import ProductDetails from "../Pages/ProductDetails/ProductDetails.jsx";
import PlaceList from "../Pages/PlaceList/PlaceList.jsx";
import Registration from "../Pages/Registration/Registration.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Dashboard from "../Dashboard/Dashboard/Dashboard.jsx";
import UserList from "../Dashboard/userList/UserList.jsx";
import UserDetails from "../Dashboard/UserDetails/UserDetails.jsx";
import AdminPlaceList from "../Dashboard/PlaceList/AdminPlaceList.jsx";
import AddPlaceByAdmin from "../Dashboard/AddPlace/AddPlaceByAdmin.jsx";
import AdminPlaceDetails from "../Dashboard/PlaceDetails/AdminPlaceDetails.jsx";
import OrderList from "../Dashboard/OrderList/OrderList.jsx";
import OrderDetails from "../Dashboard/OrderDetails/OrderDetails.jsx";
import SubscriberList from "../Dashboard/SubscriberList/SubscriberList.jsx";
import Insights from "../Pages/Insights/Insights.jsx";
import InsightsDetails from "../Pages/InsightsDetails/InsightsDetails.jsx";
import UserInsightsList from "../Dashboard/Insights/UserInsightsList.jsx";
import AddInsightsByUser from "../Dashboard/Insights/AddInsightsByUser.jsx";
import UserInsightsDetails from "../Dashboard/Insights/UserInsightsDetails.jsx";
import AdminInsightsList from "../Dashboard/AdminInsights/AdminInsightsList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/all-place",
        element: <PlaceList />,
      },
      {
        path: "/place-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/insights/details/:id",
        element: <InsightsDetails />,
      },
    ],
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
        path: "/dashboard/users",
        element: <PrivateRoute><UserList /></PrivateRoute>
      },
      {
        path: "/dashboard/user/details/:id",
        element: <PrivateRoute><UserDetails /></PrivateRoute>
      },
      {
        path: "/dashboard/favorite",
        element: <PrivateRoute><Cart /></PrivateRoute>,
      },
      {
        path: "/dashboard/place/create",
        element: <PrivateRoute><AddPlaceByAdmin /></PrivateRoute>
      },
      {
        path: "/dashboard/place",
        element: <PrivateRoute><AdminPlaceList /></PrivateRoute>
      },
      {
        path: "/dashboard/place/update/:id",
        element: <PrivateRoute><AdminPlaceDetails /></PrivateRoute>
      },


      {
        path: "/dashboard/insights/create",
        element: <PrivateRoute><AddInsightsByUser /></PrivateRoute>
      },
      {
        path: "/dashboard/insights",
        element: <PrivateRoute><UserInsightsList /></PrivateRoute>
      },
      {
        path: "/dashboard/insights/update/:id",
        element: <PrivateRoute><UserInsightsDetails /></PrivateRoute>
      },

        //show all insights
      {
        path: "/dashboard/insights/all",
        element: <PrivateRoute><AdminInsightsList /></PrivateRoute>
      },




      {
        path: "/dashboard/order",
        element: <PrivateRoute><OrderList /></PrivateRoute>
      },
      {
        path: "/dashboard/order/details/:id",
        element: <PrivateRoute><OrderDetails /></PrivateRoute>
      },
      {
        path: "/dashboard/subscribers",
        element: <PrivateRoute><SubscriberList /></PrivateRoute>
      },
    ],
  },
]);

export default router;
