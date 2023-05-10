import {GrWorkshop} from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

const AdminSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] bg-[#75b5c9] shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "#393d3f" : "#000"}`}
            className={`${active === 1 ? "" : "opacity-80"}`}
          />
             <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-[#393d3f] text-xl  font-bold" : "text-[#000] opacity-70"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "#393d3f" : "#000"}`}
            className={`${active === 2 ? "" : "opacity-80"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-[#393d3f] text-xl  font-bold" : "text-[#000] opacity-70"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-sellers" className="w-full flex items-center">
          <GrWorkshop
            size={30}
            color={`${active === 3 ? "#393d3f" : "#000"}`}
            className={`${active === 3 ? "" : "opacity-80"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-[#393d3f] text-xl  font-bold" : "text-[#000] opacity-70"
            }`}
          >
            All Sellers
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-users" className="w-full flex items-center">
          <HiOutlineUserGroup
            size={30}
            color={`${active === 4 ? "#393d3f" : "#000"}`}
            className={`${active === 4 ? "" : "opacity-80"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[#393d3f] text-xl  font-bold" : "text-[#000] opacity-70"
            }`}
          >
            All Users
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-products" className="w-full flex items-center">
          <BsHandbag
            size={30}
            color={`${active === 5 ? "#393d3f" : "#000"}`}
            className={`${active === 5 ? "" : "opacity-80"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[#393d3f] text-xl  font-bold" : "text-[#000] opacity-70"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 6 ? "#393d3f" : "#000"}`}
            className={`${active === 6 ? "" : "opacity-80"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[#393d3f] text-xl  font-bold" : "text-[#000] opacity-70"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>



      <div className="w-full flex items-center p-4">
        <Link
          to="/admin-withdraw-request"
          className="w-full flex items-center"
        >
          <CiMoneyBill
            size={30}
            color={`${active === 7 ? "#393d3f" : "#000"}`}
            className={`${active === 7 ? "" : "opacity-80"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-[#393d3f] text-xl  font-bold" : "text-[#000] opacity-70"
            }`}
          >
            Withdraw Request
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/profile"
          className="w-full flex items-center"
        >
          <AiOutlineSetting
            size={30}
            color={`${active === 8 ? "#393d3f" : "#000"}`}
            className={`${active === 8 ? "" : "opacity-80"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-[#393d3f] text-xl  font-bold" : "text-[#000] opacity-70"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>

    </div>
  );
};

export default AdminSideBar;