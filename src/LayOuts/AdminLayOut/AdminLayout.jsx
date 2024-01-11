import {Link, Outlet} from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaShirt } from "react-icons/fa6";
import { TbShirtOff } from "react-icons/tb";
import {Helmet} from "react-helmet-async";


const AdminLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Meta-Asa-Shop | Admin panel</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          
          <label
            htmlFor="my-drawer-2"
            className="btn btn-outline drawer-button border-2 border-orange-400 hover:bg-orange-400 hover:text-black hover:scale-110 hover:ease-in hover:duration-150 lg:hidden my-5"
          >
          <RiMenu2Fill size={20} />  Menu
          </label>

          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full bg-red-400 text-black font-bold">
            {/* Sidebar content here */}
            <li>
             <Link className="hover:scale-110 hover:ease-in hover:duration-150"  to={'/admin/adminHome'}><FaHome size={20}/> Admin Home</Link>
            </li>
            <li>
             <Link className="hover:scale-110 hover:ease-in hover:duration-150" ><TbShirtOff size={20}/> Manage Products</Link>
            </li>
            <li>
             <Link className="hover:scale-110 hover:ease-in hover:duration-150" ><FaShirt size={20}/> Add Product</Link>
            </li>
            <li>
             <Link className="hover:scale-110 hover:ease-in hover:duration-150" ><MdOutlineLibraryBooks size={20}/> Manage Orders</Link>
            </li>
            <li>
             <Link to={'/admin/manageCustomers'} className="hover:scale-110 hover:ease-in hover:duration-150" ><IoIosContacts size={20}/> Manage Customers</Link>
            </li>
            <div className="divider"></div>
           <h1 className="flex gap-2">Back To <MdOutlineSubdirectoryArrowRight size={22} /></h1>
           <div className="divider"></div>
           <li>
            <Link className="hover:scale-110 hover:ease-in hover:duration-150"  to={'/'}><FaHome size={20} /> Home</Link>
           </li>
           <li>
            <Link className="hover:scale-110 hover:ease-in hover:duration-150"  to={"/services"}><MdOutlineProductionQuantityLimits size={20} /> Services</Link>
           </li>
           <li>
            <Link className="hover:scale-110 hover:ease-in hover:duration-150"  to={'/CustomerReview'}><MdRateReview size={20}/> Customer Review</Link>
           </li>
           <li>
            <Link className="hover:scale-110 hover:ease-in hover:duration-150"  to={'/'}><MdContactMail size={20}/> Contact Us</Link>
           </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;