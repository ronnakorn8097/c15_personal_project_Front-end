import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";

function Layout() {
  return (
    <>
      <Header />
      
      <div className="flex">
        <NavBar />

        <div className="mt-28 ml-96 mx-auto">
          <Outlet />
        </div>

      </div>
    </>
  );
}

export default Layout;
