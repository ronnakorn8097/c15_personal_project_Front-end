import { useEffect } from "react";
import HeadBar from "../component/HeadBar";
import axios from "axios";
import { useState } from "react";
import ListHistory from "../component/ListHistory";
import ListUser from "../component/ListUser";
import { Link } from "react-router-dom";

export default function UserPage() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => {
        setAllUsers(res.data.userWithoutPassword);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div className="flex">
      <div className="w-full overflow-auto">
        <div className="mx-32 mt-9 mb-9">
          <div className="flex justify-between ">
            <div className="text-4xl font-bold">User</div>

            <Link to="/user/addUser">
              <button
                type="button"
                className="flex px-5 py-1.5 text-sm font-medium
               text-white bg-blue-700 rounded-md 
                justify-center items-center"
              >
                Create
              </button>
            </Link>
          </div>

          <div className="w-full ">
            <ul className="grid grid-cols-6 font-bold text-lg mt-8">
              <li>Username</li>
              <li>FirstName</li>
              <li>LastName</li>
              <li>Role</li>
              <li>Status</li>
              <li>Action</li>
            </ul>

            {allUsers.map((user) => (
              <ListUser key={user.id} user={user} setAllUsers={setAllUsers} allUsers={allUsers} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
