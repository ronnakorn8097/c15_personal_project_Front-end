import { useEffect } from "react";
import HeadBar from "../component/HeadBar";
import axios from "axios";
import { useState } from "react";
import ListHistory from '../component/ListHistory'
import ListUser from "../component/ListUser";

export default function UserPage() {

  const [allUsers , setAllUsers] = useState([]);

  useEffect(()=>{
    axios.get('/api/users')
    .then(res=>{
        setAllUsers(res.data.userWithoutPassword)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  return (


    <div className="flex">
      <div className="w-full overflow-auto">
        <div className="mx-32 mt-9 mb-9">
          <HeadBar text="User" buttonName="Create" />

          <div className="w-full ">
            <ul className="grid grid-cols-6 font-bold text-lg mt-8">
              <li>Username</li>
              <li>FirstName</li>
              <li>LastName</li>
              <li>Role</li>
              <li>Status</li>
              <li>Action</li>
            </ul>

            {allUsers.map((user)=><ListUser key={user.id} user={user}/>)}
          </div>
        </div>
      </div>
    </div>


  );
}
