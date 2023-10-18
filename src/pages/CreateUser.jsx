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
  const formData = new FormData();
  formData.append("username",addUser.username)
  formData.append("firstName",addUser.firstName)
  formData.append("lastName",addUser.lastName)
  formData.append("status",addUser.status)
  formData.append("userImage",addUser.userImage)
  formData.append("role",addUser.role)
  formData.append("password",addUser.password)
  formData.append("confirmpassword",addUser.confirmpassword)
  // for (let key in addUser) {
  //   if (addUser[key]) {
  //     formData.append(`${key}`, addUser[key]);
  //   }
  // }

  await axios.post("/api/auths/register",formData).then(res=>
    setAddUser(res.data.user))
    navigate("/user")

} catch (error) {
  console.log(error)
}finally{
  setLoading(false)
}
}



  return (
    <>   {loading && <Loading/>}
     <form onSubmit={handleSubmit}>
    <h1 className="text-4xl ml-3 font-bold">Create user</h1>
    <div className="grid grid-cols-4  p-4">

      <div className=' flex p-8 flex-col space-y-10'>
        <div className='flex flex-col w-[258px] h-[37px]'>
          <label>username</label>
          <input type="text" 
          className="rounded-lg border border-black px-2 py-1" 
          placeholder="Enter Username"
          value={addUser.username}
          onChange={(e)=>
            setAddUser({...addUser,username : e.target.value})
        }
          />
        </div>

        <div className='flex flex-col w-[258px] h-[37px]'> 
          <label>First Name</label>
          <input type="text" 
          className="rounded-md border border-black  px-2 py-1" 
          placeholder="Enter FirstName"
          value={addUser.firstName}
          onChange={(e)=>
            setAddUser({...addUser,firstName : e.target.value})
        }
          />
        </div>

        <div className='flex flex-col w-[258px] h-[37px]'>
          <label>Last Name</label>
          <input type="text" 
          className="rounded-md border border-black  px-2 py-1" 
          placeholder="Enter LastName"
          value={addUser.lastName}
          onChange={(e)=>
            setAddUser({...addUser,lastName : e.target.value})
        }
          />
        </div>

        <div className='flex flex-col w-[258px] h-[37px]'>
          <label>Password</label>
          <input type="text" 
          className="rounded-md border border-black  px-2 py-1" 
          placeholder="Enter password"
          value={addUser.password}
          onChange={(e)=>
            setAddUser({...addUser,password : e.target.value})
        }
          />
        </div>

        <div className='flex flex-col w-[258px] h-[37px]'>
          <label>Confirm Password</label>
          <input type="password" 
          className="rounded-md border border-black px-2 py-1" 
          placeholder="Enter confirm password"
          value={addUser.confirmpassword}
          onChange={(e)=>
            setAddUser({...addUser,confirmpassword : e.target.value})
        }
          />
        </div>

        <div className='flex flex-col w-[258px] h-[37px]'>
          <label>Status</label>
          <select
            name="status"
            id="status"
            className="rounded-md border border-black px-2 py-1"
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
        <div className='pt-7'>
        <button className="rounded-md border w-[129px]
        
        bg-[#554848]
        text-white 
        p-1.5
        font-bold "
        type="submit"
        >
        Complete
      </button>
      </div>
      </div>

      <div className='p-8 flex flex-col space-y-10'>
      <div className='flex flex-col w-[258px] h-[37px]'>
          <label>Role</label>
          <select
            name="role"
            id="role"
            className="rounded-md border border-black px-2 py-1"
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
            <label>User Image</label>
            <input type="file"
            onChange={(e)=>
            setAddUser({...addUser,userImage : e.target.files[0]})
            }
            />
        </div>
        
      </div>
    </div>
  </form>
  </>
 )
}

export default CreateUser