import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {AuthContext} from "../Providers/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
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
  if (user) {
    return children;
  } else
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoutes;