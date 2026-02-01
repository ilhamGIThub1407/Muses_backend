import React from "react";
import Sidebar from "./SideBar";
import Header from './Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-100">
      <Sidebar />
      <div className="ml-62.5 w-[calc(100vw-268px)] min-h-screen p-6">
        <Header />
        <div className="p-4">
          <div className="pt-21.25">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
