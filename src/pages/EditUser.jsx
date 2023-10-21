import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../component/Loading";

function EditUser() {
  const { userId } = useParams();
  // console.log(userId);

  const navigate = useNavigate();

  const { getMe } = useAuth();
  const [loading, setLoading] = useState(false);

  const [editUser, setEditUser] = useState({
    id: userId,
    username: "",
    firstName: "",
    lastName: "",
    status: "",
    userImage: "",
    role: "",
    password: "",
  });

  useEffect(() => {
      try {
        axios.get(`/api/users/${userId}`).then((res) => {
          // ตอนเอาค่ามา ไม่ได้ส่ง password มา มันเลย error ที console log
          // กำหนดค่า password = "" ให้มันหายแดง
          res.data.getUserById.password = "";
          setEditUser(res.data.getUserById);
        });
      } catch (error) {
        console.log(error);
      }
  }, []);

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const formData = new FormData();
      formData.append("id", editUser.id);
      formData.append("username", editUser.username);
      formData.append("firstName", editUser.firstName);
      formData.append("lastName", editUser.lastName);
      formData.append("status", editUser.status);
      formData.append("password",editUser.password)
      formData.append("userImage", editUser.userImage);
      formData.append("role", editUser.role);

      await axios.patch("/api/users/updateUser", formData);

      await getMe();
      navigate("/user");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {" "}
      {loading && <Loading />}
      <h1 className="text-4xl font-bold ml-3">Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-[500px] p-8">
          <div className="flex flex-col p-8">
            <div className="flex flex-col mb-2">
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
            <div className="flex flex-col mb-2">
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

            <div className="flex flex-col mb-2">
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

            <div className="flex flex-col mb-2">
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

            <div className="flex flex-col mb-2">
              <label>Status</label>
              <select
                name="status"
                id="status"
                className="rounded-md border border-black p-1"
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

          <div className="flex flex-col p-8 mb-2">
            <div className="mb-2">
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

            <div className="mb-2">
              <label>User Image</label>
              <input
                type="file"
                placeholder="Image"
                onChange={(e) =>
                  setEditUser({ ...editUser, userImage: e.target.files[0] })
                }
              />
            </div>

            <button
              type="submit"
              className="rounded-md border border-blue-700 bg-blue-600 text-white p-1 mt-8 w-[256px]"
            >
              Complete
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditUser;
