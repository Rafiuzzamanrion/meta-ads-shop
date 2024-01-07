import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOuts/Home/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Home/Services/Services";
import DescriptionLayout from "../LayOuts/DescriptionLayout/DescriptionLayout";
import Description from "../Pages/Description/Description";
import axios from "axios";


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
    }
  ]);

export default router;