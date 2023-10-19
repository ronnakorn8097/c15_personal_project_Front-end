import axios from "../config/axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";

function EditMenuPage() {

    const navigate = useNavigate();
    const {editmenuId} = useParams();
    const [loading,setLoading] = useState(false)

    const [editMenu,setEditMenu] = useState({
        id : editmenuId ,
        name : "",
        price : "",
        status : "",
        detail : "",
        menuImage : "",
    })
    useEffect (()=>{
        try {
            axios.get(`/api/menus/${editmenuId}`).then(res=>
                
                setEditMenu(res.data.getMenuId)
            )
        } catch (error) {
            console.log(error)
        }
    },[])

    const handleSubmit = async (e)=> {
        try {
            setLoading(true)
            e.preventDefault();
            const formData = new FormData();
            formData.append("id",editMenu.id)
            formData.append("name",editMenu.name)
            formData.append("price",editMenu.price)
            formData.append("status",editMenu.status)
            formData.append("detail",editMenu.detail)
            formData.append("menuImage",editMenu.menuImage)
            
            await axios.patch("/api/menus/updateMenu",formData)
            navigate("/menu")
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

  return (
    <>
    {loading && <Loading/>}
      <form onSubmit={handleSubmit}>
      
        <h1 className="text-3xl ml-3">Edit Menu</h1>
        <div className="flex p-4 bg-red-200 ml-4">

          <div className="bg-blue-200 p-3">
            <div className="flex flex-col">
              <label>Menu Name</label>
              <input type="text" 
              className="rounded-md border border-black" 
              placeholder="Menu"
              value={editMenu.name}
              onChange={(e)=>
                setEditMenu({...editMenu,name : e.target.value})
            }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="menuDetail">Menu Detail</label>
              <textarea id="menuDetail" 
              name="menuDetail" 
              rows="4" cols="19" 
              className="rounded-md border-black border"
              placeholder="detail"
              value={editMenu.detail}
              onChange={(e=>
                setEditMenu({...editMenu,detail:e.target.value})
                )}
              />
            </div>
            <div>
              <label>Menu Status</label>
              <select
                name="status"
                id="status"
                className="rounded-md border border-black"
                value={editMenu.status}
                onChange={(e)=>
                setEditMenu({...editMenu,status : e.target.value})
                }
              >
                 
                <option value="AVAILIABLE">AVAILIABLE</option>
                <option value="UNAVAILABLE">UNAVAILABLE</option>
              </select>
            </div>
          </div>

          <div className="bg-yellow-200">
            <div>
            <label>Menu Price</label>
            <input type="text"
            className="rounded-md border border-black"
            value={editMenu.price}
            onChange={(e)=>
            setEditMenu({...editMenu,price : e.target.value})
            }
            />
            </div>
            <div>
                <label>Menu Image</label>
                <input type="file"
                onChange={(e)=>
                setEditMenu({...editMenu,menuImage : e.target.files[0]})
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
  );
}

export default EditMenuPage;
