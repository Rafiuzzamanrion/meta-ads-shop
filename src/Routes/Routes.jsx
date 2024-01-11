import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOuts/Home/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Home/Services/Services";
import DescriptionLayout from "../LayOuts/DescriptionLayout/DescriptionLayout";
import Description from "../Pages/Description/Description";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Cart from "../Pages/Carts/Cart";
import AdminLayout from "../LayOuts/AdminLayOut/AdminLayout";
import AdminHome from "../Pages/AdminPage/AdminHome/AdminHome";
import ManageCustomers from "../Pages/AdminPage/ManageCustomers/ManageCustomers";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home> ,
        },
        {
          path:'services',
          element:<Services></Services>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'cart',
          element:<PrivateRoutes><Cart></Cart></PrivateRoutes>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        }
      ],
    },
    {
      path:'description',
      element:<DescriptionLayout></DescriptionLayout>,
      children:[
        {
          path:':id',
          element:<Description></Description>,
          loader:({params})=> fetch(`http://localhost:5000/description/${params.id}`)
        }
      ]
    },
    {
      path:'admin',
      element:<AdminRoutes><AdminLayout></AdminLayout></AdminRoutes>,
      children:[
      {
        path:'adminHome',
        element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path:'manageCustomers',
        element:<AdminRoutes><ManageCustomers></ManageCustomers></AdminRoutes>
      }
      ]
    }
  ]);

export default router;