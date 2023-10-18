import axios from "../config/axios";
import React from "react";
import { Link } from "react-router-dom";



function ButtonUser({ userId }) {

  const handleClickDel = async (e)=>{
    try {
      e.preventDefault();
    const res = await axios.delete(`/api/users/${userId}`)
   
    // ถ้าสำเร็จ
    if(res.data.message)
    {
      console.log(res.data.message)
    }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="flex gap-2">
        
      <Link to={`/user/${userId}`}>
        <button
          type="button"
          className="px-5 py-2.5 text-sm font-medium text-white bg-gray-400"
        >
          Edit
        </button>
      </Link>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white bg-red-700"
        onClick={handleClickDel}
      >
        Del
      </button>
    </div>
  );
}

export default ButtonUser;
