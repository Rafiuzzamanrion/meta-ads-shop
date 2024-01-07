import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import logo from "/download.png";
const NavBar = () => {
  const { user } = useContext(AuthContext);

 
  return (
    <div className="navbar bg-base-200 h-5 mb-8 mt-4 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-bold shadow bg-base-200 rounded-box w-20"
          >
            <Link className="hover:border-b-4 hover:text-error hover:border-error" to="/">Home</Link>
            <Link className="hover:border-b-4 hover:text-error hover:border-error" to="/services">Services</Link>
            <Link className="hover:border-b-4 hover:text-error hover:border-error" to="/about">About</Link>
            <Link className="hover:border-b-4 hover:text-error hover:border-error" to="/contact">Contact</Link>
            {user ? (
              <Link className="hover:border-b-4 hover:text-error hover:border-error" to="/bookings">My bookings</Link>
            ) : (
              <Link className="hover:border-b-4 hover:text-error hover:border-error" to="/login">Login</Link>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl h-16">
          <img className="h-12 rounded-md object-cover" src={logo} alt="" />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex flex-row items-center justify-center font-bold text-sm">
          <Link className="mr-8 hover:border-b-4 hover:text-error hover:border-error" to="/">HOME</Link>
          <Link  className="mr-8 hover:border-b-4 hover:text-error hover:border-error" to="/services">SERVICES</Link>
          <Link  className="mr-8 hover:border-b-4 hover:text-error hover:border-error" to="/about">ABOUT</Link>
          <Link  className="mr-8 hover:border-b-4 hover:text-error hover:border-error" to="/contact">CONTACT</Link>
          {user ? (
            <Link className="mr-8 hover:border-b-4 hover:text-error hover:border-error" to="/bookings">MY BOOKINGS</Link>
          ) : (
            <Link className="mr-8 hover:border-b-4 hover:text-error hover:border-error" to="/login">LOGIN</Link>
          )}
        </ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-10 mr-5 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
              {/* <img src={avatar} /> */}
            </div>
          </div>
          <button className="btn btn-outline border-2 btn-error">Logout</button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-outline border-2 btn-error">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
