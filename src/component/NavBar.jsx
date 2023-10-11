import React from "react";
import Avatar from "./Avatar";
import { CgMenuRound } from "react-icons/cg";
import { FaUser, FaHistory } from "react-icons/fa";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
  
      <div className="flex flex-col w-96 border-r-2 h-[calc(100vh-80px)] mt-24 fixed">
        <Avatar />
        <div className="flex flex-col justify-between h-[calc(100%-320px)]">


          {/* Menu */}
          <idv className="flex flex-col items-center">

            <div className="flex items-center justify-center border-b-2  w-full">
              <Link to="/menu" className="flex item-center justify-center cursor-pointer">
                <div className="flex justify-center items-center">
                  <CgMenuRound />
                </div>
                <p>Menu</p>
              </Link>
            </div>
           

            {/* user */}
            
              <div className="flex item-center justify-center border-b-2 w-full">
                <Link to="/user" className="flex items-center justify-center cursor-pointer">
                    <div className="flex justify-center items-center">
                    <FaUser />
                    </div>
                    <p>User</p>
                </Link>
              </div>
            
            
            {/* History */}
            <div className="flex item-center justify-center border-b-2 w-full">
                <Link to="/history" className="flex items-center justify-center cursor-pointer">
                    <div className="flex justify-center items-center">
                    <FaHistory />
                    </div>
                    <p>History</p>
                </Link>
              </div>
          </idv>
          


          {/* text name */}
          <div className="flex flex-col ml-5">
            <h1>Welcome : John Dow</h1>
            <span>Role : ADMIN</span>
          </div>
        </div>
      </div>
   
  );
}

export default NavBar;
