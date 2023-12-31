import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
import EditMenuPage from "../pages/EditMenuPage";
import CreateUser from "../pages/CreateUser";
import EditUser from "../pages/EditUser";
import UserPage from "../pages/UserPage";
import CreateMenu from "../pages/CreateMenu";
import History from "../pages/History";
import OrderPage from "../pages/OrderPage";
import Layout from "../layout/Layout";
import RedirectIFAuthen from "../features/authen/RedirectIFAuthen";
import Authenticated from "../features/authen/Authenticated";
import useAuth from "../hooks/useAuth";
import OrderDetail from "../pages/OrderDetail";


const  adminRouter = createBrowserRouter([
  //login page
  {
    path: "/login",
    element: (
      <RedirectIFAuthen>
        <LoginPage />
      </RedirectIFAuthen>
    ),
  },

  // outlet
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children:  [
      // menu
      { path: "menu", element: <MenuPage /> },
      { path: "menu/createMenu", element: <CreateMenu /> },
      { path: "menu/:editmenuId", element: <EditMenuPage /> },
      // user
      { path: "user", element: <UserPage /> },
      { path: "user/addUser", element: <CreateUser /> },
      { path: "user/:userId", element: <EditUser /> },
      // history
      { path: "history", element: <History /> },
      //detail
      { path: "order/detail/:orderId", element: <OrderDetail /> },
      // any
      {path:"*",element:<MenuPage />}
    ],
  },
]);

const staffRouter = createBrowserRouter([
    //login page
    {
      path: "/login",
      element: (
        <RedirectIFAuthen>
          <LoginPage />
        </RedirectIFAuthen>
      ),
    },
  
    // outlet
    {
      path: "/",
      element: (
        <Authenticated>
          <Layout />
        </Authenticated>
      ),
      children:  [
        
        { path: "history", element: <History /> },
        // order
        { path: "order", element: <OrderPage /> },
        {path:"*",element: <OrderPage />},
         //detail
      { path: "order/detail/:orderId", element: <OrderDetail /> },
      ],
    },
  ]);

export default function Route() {
    const {authUser} = useAuth()

  let router = staffRouter
switch (authUser?.role) {
    case "ADMIN":
        router = adminRouter;
        break;

    case "STAFF":
        router = staffRouter;

    default: 
       router = staffRouter;
        break;
}


  return <RouterProvider router={router} />;
}
