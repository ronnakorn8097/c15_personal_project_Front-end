import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MenuPage from '../pages/MenuPage';
import EditMenuPage from '../pages/EditMenuPage';
import CreateUser from '../pages/CreateUser';
import EditUser from '../pages/EditUser';
import UserPage from '../pages/UserPage'
import CreateMenu from '../pages/CreateMenu';
import History from '../pages/History';
import OrderPage from '../pages/OrderPage';
import Layout from '../layout/Layout';

const router = createBrowserRouter (
    [
        //login page
    {path : '/login',element : <LoginPage/>},

    // outlet
    {path : '/',element :<Layout/>,
        children : [
            // menu
            {path : 'menu',element: <MenuPage/>},
            {path : 'menu/addMenu',element:<CreateMenu/>},
            {path : 'menu/:editmenuId',element : <EditMenuPage/>},
            // user
            {path : 'user',element : <UserPage/>},
            {path : 'user/addUser',element : <CreateUser/>},
            {path : 'user/:edituserId',element:<EditUser/>},
            // history
            {path : 'history',element:<History/>},
            // order
            {path : 'order',element:<OrderPage/> }
            
        ]
}
    ]);

    export default function Route(){
        return <RouterProvider router={router} />
    }