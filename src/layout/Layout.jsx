import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from '../component/SideBar'

function Layout() {
  return (
    <>
      <Header />
      <div className="flex">
       <SideBar/>
        <div className="mt-24 ml-[330px] mx-auto w-full">
          <Outlet />
        </div>

      </div>
    </>
  );
}

export default Layout;
