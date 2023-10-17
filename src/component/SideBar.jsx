import React from "react";
import Avatar from "./Avatar";
import { CgMenuRound } from "react-icons/cg";
import { FaUser, FaHistory } from "react-icons/fa";
import {AiOutlineUnorderedList} from 'react-icons/ai'
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function SideBar() {
  const { authUser } = useAuth();
  // console.log(authUser)

  return (
    <div className="flex flex-col w-80 border-r-2 h-[calc(100vh-80px)] mt-24 fixed">
      <Avatar src={authUser.userImage} />
      <div className="flex flex-col justify-between h-[calc(100%-320px)]">


        <div className="flex flex-col items-center mt-8">


          {authUser.role === "ADMIN" && (
            <>
              <div className="flex items-center justify-center border-b-2  w-full mb-4">
                <Link
                  to="/menu"
                  className="flex item-center justify-center cursor-pointer gap-2"
                >
                  <div className="flex justify-center items-center">
                    <CgMenuRound />
                  </div>
                  <p>Menu</p>
                </Link>
              </div>

              <div className="flex item-center justify-center border-b-2 w-full mb-4">
                <Link
                  to="/user"
                  className="flex items-center justify-center cursor-pointer gap-2"
                >
                  <div className="flex justify-center items-center">
                    <FaUser />
                  </div>
                  <p>User</p>
                </Link>
              </div>
            </>
          )}



          <div className="flex item-center justify-center border-b-2 w-full mb-4">
            <Link
              to="/history"
              className="flex items-center justify-center cursor-pointer gap-2"
            >
              <div className="flex justify-center items-center">
                <FaHistory />
              </div>
              <p>History</p>
            </Link>
          </div>

            {authUser.role ==="STAFF" &&
          <div className="flex item-center justify-center border-b-2 w-full mb-4">
            <Link
              to="/order"
              className="flex items-center justify-center cursor-pointer gap-2"
            >
              <div className="flex justify-center items-center">
                <AiOutlineUnorderedList />
              </div>
              <p>Order</p>
            </Link>
          </div>
}
        </div>

        <div className="flex flex-col ml-5">
          <h1>Welcome : {authUser.firstName}</h1>
          <span>Role : {authUser.role} </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
