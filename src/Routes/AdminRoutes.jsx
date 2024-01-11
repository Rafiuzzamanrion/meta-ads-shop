import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import {AuthContext} from "../Providers/AuthProviders";


const AdminRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [admin,isAdminLoading] = UseAdmin();
    if (loading || isAdminLoading) {
      return (
        <div className="min-h-screen min-w-full">
          <span className="loading loading-spinner loading-lg"></span>
          <span className="loading loading-spinner loading-lg"></span>
          <span className="loading loading-spinner loading-lg"></span>
          <span className="loading loading-spinner loading-lg"></span>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );
    }
    if (user && admin === true) {
      return children;
    } else
      return (
        <Navigate to={"/"}></Navigate>
      );
  };

export default AdminRoutes;