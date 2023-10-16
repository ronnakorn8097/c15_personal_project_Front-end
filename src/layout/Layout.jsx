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
        <div className="mt-20 ml-96 mx-auto">
          <Outlet />
        </div>

      </div>
    </>
  );
}

export default Layout;
