import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import logo from "/download.png";
import UseAdmin from "../../../Hooks/UseAdmin";
import { FaUser } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import ic from "/ic.png";
import UseCart from "../../../Hooks/UseCart";
import { IoIosLogOut } from "react-icons/io";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user,logOutUser } = useContext(AuthContext);
  const [admin] = UseAdmin();
  const [carts] = UseCart();

  const handleLogOut = () => {
    logOutUser()
    .then(()=>{
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Logged out successful",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="navbar bg-base-200 h-5 mb-8 mt-4 rounded-lg shadow-xl">
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
            <Link
              className="hover:border-b-4 hover:text-error hover:border-error"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:border-b-4 hover:text-error hover:border-error"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="hover:border-b-4 hover:text-error hover:border-error"
              to="/customerReview"
            >
              Customer Review
            </Link>
            <Link
              className="hover:border-b-4 hover:text-error hover:border-error"
              to="/contact"
            >
              Contact
            </Link>
            {user ? (
              <Link
                className="hover:border-b-4 hover:text-error hover:border-error"
                to="/bookings"
              >
                My Cart
              </Link>
            ) : (
              <Link
                className="hover:border-b-4 hover:text-error hover:border-error"
                to="/login"
              >
                Login
              </Link>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl h-16">
          <img className="h-12 rounded-md object-cover" src={logo} alt="" />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex flex-row items-center justify-center font-bold text-sm">
          <Link
            className="mr-8 hover:border-b-4 hover:text-error hover:border-error"
            to="/"
          >
            HOME
          </Link>
          <Link
            className="mr-8 hover:border-b-4 hover:text-error hover:border-error"
            to="/services"
          >
            SERVICES
          </Link>
          <Link
            className="mr-8 hover:border-b-4 hover:text-error hover:border-error"
            to="/customerReview"
          >
            CUSTOMER REVIEW
          </Link>
          <Link
            className="mr-8 hover:border-b-4 hover:text-error hover:border-error"
            to="/contact"
          >
            CONTACT US
          </Link>
          {user ? (
            <Link
              className="mr-8 hover:border-b-4 hover:text-error hover:border-error"
              to="/cart"
            >
              MY CART
            </Link>
          ) : (
            <Link
              className="mr-8 hover:border-b-4 hover:text-error hover:border-error"
              to="/login"
            >
              LOGIN
            </Link>
          )}
        </ul>
      </div>
      <nav className="flex justify-center items-center">
        {user && (
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="m-1 text-error mr-6 hover:text-red-500 hover:scale-110 hover:ease-in hover:duration-150 font-semibold bg-transparent"
            >
              <FaUser size={27} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-40 text-center border-error border-2 "
            >
              <h1 className="border-b-2 border-error">Dashboard</h1>

              {admin === true ? (
                <div>
                  <Link
                    to={"/admin/adminHome"}
                    className="hover:text-error hover:scale-110 hover:ease-in hover:duration-150 flex items-center justify-center gap-1 mt-2"
                  >
                    <MdAdminPanelSettings size={17} />
                    Admin Panel
                  </Link>
                  <Link className="hover:text-error hover:scale-110 hover:ease-in hover:duration-150 flex items-center justify-center gap-1 mt-1">
                    <IoIosLogOut size={15} /><button onClick={handleLogOut} className="bg-transparent"> Logout</button>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    to={"/cart"}
                    className="hover:text-error hover:scale-110 hover:ease-in hover:duration-150 flex items-center justify-center gap-1 mt-1"
                  >
                    <GiShoppingCart size={18} /> My cart
                  </Link>

                  <Link className="hover:text-error hover:scale-110 hover:ease-in hover:duration-150 flex items-center justify-center gap-1 mt-1">
                    <FaHistory size={15} /> History
                  </Link>
                  <Link className="hover:text-error hover:scale-110 hover:ease-in hover:duration-150 flex items-center justify-center gap-1 mt-1">
                    <IoIosLogOut size={15} /><button onClick={handleLogOut} className="bg-transparent"> Logout</button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        )}

        <Link
          to={"/cart"}
          className="hover:scale-110 hover:ease-in hover:duration-150 uppercase font-semibold flex flex-col mr-1"
        >
          <span className="text-error translate-y-3 translate-x-4">
            {carts?.length < 10 && 0}{carts?.length}
          </span>
          <img src={ic} className="w-12 h-8 -translate-y-2" alt="" />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
