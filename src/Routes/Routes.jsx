import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOuts/Home/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Home/Services/Services";


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
  ]);

export default router;