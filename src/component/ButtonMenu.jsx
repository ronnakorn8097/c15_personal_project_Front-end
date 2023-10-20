import React from "react";
import { Link } from "react-router-dom";
import axios from "../config/axios";
import { useState } from "react";
import Loading from "./Loading";

function ButtonMenu({ menuId,menuItem,setMenuItem }) {

    const [loading,setLoading] = useState(false);

    ///// delete menu ///////
    const handleClickDel = async (e)=>{
        try {
            setLoading(true)
            e.preventDefault();
            const res = await axios.delete(`/api/menus/${menuId}`)
            if(res.data.message)
            {
                let newMenuItem = [...menuItem] 
                // เมนูอันไหมที่อัพเดทการลบออกไปแล้ว
               newMenuItem = newMenuItem.filter(el=> el.id !== menuId)
               setMenuItem(newMenuItem)
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

  return (
    <>
    {loading && <Loading/>}
    <div className="flex gap-2">
      <Link to={`/menu/${menuId}`}>
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
    </>);
}

export default ButtonMenu;
