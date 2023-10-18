import axios from '../config/axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../component/Loading';

function CreateUser() {

  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [addUser,setAddUser]= useState({
    username : "",
    firstName : "",
    lastName : "",
    status : "",
    userImage : "",
    role : "",
    password: "",
    confirmpassword : ""
  });

const handleSubmit = async (e)=> {
try {
  setLoading(true)
  e.preventDefault();
  console.log('first')
  const formData = new FormData();
  // formData.append("username",addUser.username)
  // formData.append("firstName",addUser.firstName)
  // formData.append("lastName",addUser.lastName)
  // formData.append("status",addUser.status)
  // formData.append("userImage",addUser.userImage)
  // formData.append("role",addUser.role)
  // formData.append("password",addUser.password)
  // formData.append("confirmpassword",addUser.confirmpassword)
  for (let key in addUser) {
    if (addUser[key]) {
      formData.append(`${key}`, addUser[key]);
    }
  }

  await axios.post("/api/auths/register",formData).then(res=>
    setAddUser(res.data.user))
    navigate("/user")

} catch (error) {
  console.log(error)
}finally{
  setLoading(false)
}
}
console.log(addUser)


  return (
    <>   {loading && <Loading/>}
     <form onSubmit={handleSubmit}>
    <h1 className="text-3xl ml-3">Create user</h1>
    <div className="grid grid-cols-2">

      <div>
        <div>
          <label>username</label>
          <input type="text" 
          className="rounded-md border border-black" 
          placeholder="Enter Username"
          value={addUser.username}
          onChange={(e)=>
            setAddUser({...addUser,username : e.target.value})
        }
          />
        </div>

        <div>
          <label>First Name</label>
          <input type="text" 
          className="rounded-md border border-black" 
          placeholder="Enter FirstName"
          value={addUser.firstName}
          onChange={(e)=>
            setAddUser({...addUser,firstName : e.target.value})
        }
          />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" 
          className="rounded-md border border-black" 
          placeholder="Enter LastName"
          value={addUser.lastName}
          onChange={(e)=>
            setAddUser({...addUser,lastName : e.target.value})
        }
          />
        </div>

        <div>
          <label>Password</label>
          <input type="text" 
          className="rounded-md border border-black" 
          placeholder="Enter password"
          value={addUser.password}
          onChange={(e)=>
            setAddUser({...addUser,password : e.target.value})
        }
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="text" 
          className="rounded-md border border-black" 
          placeholder="Enter confirm password"
          value={addUser.confirmpassword}
          onChange={(e)=>
            setAddUser({...addUser,confirmpassword : e.target.value})
        }
          />
        </div>

        <div>
          <label>Status</label>
          <select
            name="status"
            id="status"
            className="rounded-md border border-black"
            value={addUser.status}
            onChange={(e)=>
            setAddUser({...addUser,status : e.target.value})
            }
          >
            <option>select</option>
            <option value="AVAILIABLE">AVAILIABLE</option>
            <option value="UNAVAILABLE">UNAVAILABLE</option>
          </select>
        </div>
      </div>

      <div>
      <div>
          <label>Role</label>
          <select
            name="role"
            id="role"
            className="rounded-md border border-black"
            value={addUser.role}
            onChange={(e)=>
            setAddUser({...addUser,role : e.target.value})
            }
          >
             <option>select</option>
            <option value="STAFF">STAFF</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <div>
            <label>Menu Image</label>
            <input type="file"
            onChange={(e)=>
            setAddUser({...addUser,userImage : e.target.files[0]})
            }
            />
        </div>
        <button className="rounded-md border 
        border-blue-700 
        bg-blue-600 
        text-white 
        p-1.5
        font-bold"
        type="submit"
        >
        Complete
      </button>
      </div>
    </div>
  </form>
  </>
 )
}

export default CreateUser