import React from "react";
import { Link,useLocation} from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation()
  return (
    <div className="w-62.5 h-screen fixed left-0 top-0 bg-white">
      <div className="h-37.5 flex justify-center items-center space-y-2">
        <Link
          to="/"
          className="flex flex-col items-center justify-center text-center select-none group mt-2"
        >
          <img
            src="/poetry.png"
            alt="Logo"
            className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="mt-1 text-lg font-semibold tracking-normal text-gray-900">
            MUSES
          </span>
        </Link>
      </div>
      <ul className="px-3 flex flex-col gap-y-1 font-medium">
        <li>
          <Link
            className={`px-3 ${pathname === "/dashboard/admin" ? "bg-indigo-500 text-white" : "bg-white text-[#404040f6]"} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start item-center hover:bg-indigo-500 hover:text-white`}
          >
            <span className="text-xl">
              <AiFillDashboard />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
