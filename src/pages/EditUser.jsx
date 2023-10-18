import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../component/Loading"

function EditUser() {
  const { editUserId } = useParams();

  const navigate = useNavigate();

  const { getMe } = useAuth();
  const [loading,setLoading] = useState(false)

  const [editUser, setEditUser] = useState({
    id: editUserId,
    username: "",
    firstName: "",
    lastName: "",
    status: "",
    userImage: "",
    role: "",
    password : ""
  });


  useEffect(() => {
    try {
    axios.get(`/api/users/${editUserId}`).then((res) => {
      setEditUser(res.data.getUserById)
    });
  } catch (error) {
    console.log(error)
  }
  }, []);

  const handleSubmit = async (e) => {
    try {
      setLoading(true)
      e.preventDefault();
      const formData = new FormData();
      formData.append("id", editUser.id);
      formData.append("username", editUser.username);
      formData.append("firstName", editUser.firstName);
      formData.append("lastName", editUser.lastName);
      formData.append("status", editUser.status);
      formData.append("userImage", editUser.userImage);
      formData.append("role", editUser.role);
  
      await axios.patch("/api/users/updateUser", formData);
     
      await getMe();
      navigate("/user");
      
    } catch (error) {
      console.log(error)
    }finally{
     setLoading(false)
    }
  
 
  };

  return (
    <> {loading && <Loading/>}
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 bg-amber-600">
        <div className="col-span-1">
          <div>
            <label>username</label>
            <input
              type="text"
              className="rounded-md border-neutral-800 border p-1"
              placeholder="Enter username"
              value={editUser.username}
              onChange={(e) =>
                setEditUser({ ...editUser, username: e.target.value })
              }
            />
          </div>
          <div>
            <label>FirstName</label>
            <input
              type="text"
              className="rounded-md border-neutral-800 border p-1"
              placeholder="FirstName"
              value={editUser.firstName}
              onChange={(e) =>
                setEditUser({ ...editUser, firstName: e.target.value })
              }
            />
          </div>

          <div>
            <label>LastName</label>
            <input
              type="text"
              className="rounded-md border-neutral-800 border p-1"
              placeholder="LastName"
              value={editUser.lastName}
              onChange={(e) =>
                setEditUser({ ...editUser, lastName: e.target.value })
              }
            />
          </div>

          <div>
            <label>password</label>
            <input
              type="password"
              className="rounded-md border-neutral-800 border p-1"
              placeholder="Password"
              value={editUser.password}
              onChange={(e) =>
                setEditUser({ ...editUser, password: e.target.value })
              }
            />
          </div>

          <div>
            <label>Status</label>
            <select
              name="status"
              id="status"
              className="rounded-md border border-black"
              value={editUser.status}
              onChange={(e) =>
                setEditUser({ ...editUser, status: e.target.value })
              }
            >
              <option value="AVAILIABLE">AVAILIABLE</option>
              <option value="UNAVAILABLE">UNAVAILABLE</option>
            </select>
          </div>
        </div>

        <div className="col-span-1">
          <div>
            <label>Role</label>
            <select
              name="role"
              id="role"
              className="rounded-md border border-black"
              value={editUser.role}
              onChange={(e) =>
                setEditUser({ ...editUser, role: e.target.value })
              }
            >
              <option value="STAFF">Staff</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <div>
            <label>User Image</label>
            <input
              type="file"
              placeholder="Image"
              onChange={(e) =>
                setEditUser({ ...editUser, userImage: e.target.files[0] })
              }
            />
          </div>

          <button type="submit" className="rounded-md border border-blue-700 bg-blue-600 text-white p-1">
            Complete
          </button>
        </div>
      </div>
    </form>
    </>);
}

export default EditUser;
