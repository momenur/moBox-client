import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login ";
import Order from "../pages/Order/Order/Order";
import PriveteRoutes from "./PriveteRoutes";
import Details from "../components/Details/Details";
import Dashboard from "../Layout/Dashboard";
import CustomerOrders from "../pages/Dashboard/CustomerOrders/CustomerOrders";
import CustomerList from "../pages/Dashboard/CustomerList/CustomerList";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/products/:id',
          element: <Details></Details>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "login",
            element: <Login/>
        },
        {
          path: "order",
          element: <PriveteRoutes><Order></Order></PriveteRoutes>
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: "customerOrder",
          element: <CustomerOrders></CustomerOrders>
        },
        {
          path: "customerList",
          element: <CustomerList></CustomerList>
        }
      ]
    }
  ]);