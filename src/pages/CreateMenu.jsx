import React from 'react'
import axios from '../config/axios'
import { useState } from 'react'
import Loading from '../component/Loading'
import { useNavigate } from 'react-router-dom';


function CreateMenu() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [addMenu,setAddMenu] = useState({
    name : "",
    price : "",
    status : "",
    detail : "",
    menuImage : ""
  })

  const handleSubmit = async (e)=>{
        try {
          setLoading(true)
          e.preventDefault();
          const formData = new FormData();
          for (let key in addMenu) {
            if (addMenu[key]) {
              formData.append(`${key}`, addMenu[key]);
            }
          }
          await axios.post("/api/menus/createMenu",formData).then(res=>
            setAddMenu(res.data.newMenu))
          navigate('/menu')
        } catch (error) {
          console.log(error)
        }finally{
          setLoading(false)
        }
  }

  return (
    <>   {loading && <Loading/>}
     <form onSubmit={handleSubmit}>
    <h1 className="text-4xl ml-3 font-bold">Create Menu</h1>
    <div className="grid grid-cols-4 p-4">

      <div className=' flex p-8 flex-col space-y-10'>
        <div className='flex flex-col w-[258px] h-[37px]'>
          <label>Menu Name</label>
          <input type="text" 
          className="rounded-md border border-black px-2 py-1" 
          placeholder="Enter Username"
          value={addMenu.name}
          onChange={(e)=>
            setAddMenu({...addMenu,name : e.target.value})
        }
          />
        </div>

        <div className='flex flex-col w-[258px] h-[37px]'>
          <label>Price</label>
          <input type="text" 
          className="rounded-md border  border-black px-2 py-1" 
          placeholder="Enter FirstName"
          value={addMenu.price}
          onChange={(e)=>
            setAddMenu({...addMenu,price : e.target.value})
        }
          />
        </div>

        <div className='flex flex-col w-[258px]'>
              <label htmlFor="menuDetail">Menu Detail</label>
              <textarea id="menuDetail" 
              name="menuDetail" 
              rows="4" cols="19" 
              className="rounded-md border-black border px-2 py-1"
              placeholder="detail"
              value={addMenu.detail}
              onChange={(e=>
                setAddMenu({...addMenu,detail:e.target.value})
                )}
              />
            </div>

        <div className='flex flex-col w-[258px] h-[37px]'>
          <label>Status</label>
          <select
            name="status"
            id="status"
            className="rounded-md border border-black px-2 py-1"
            value={addMenu.status}
            onChange={(e)=>
            setAddMenu({...addMenu,status : e.target.value})
            }
          >
            <option>select</option>
            <option value="AVAILIABLE">AVAILIABLE</option>
            <option value="UNAVAILABLE">UNAVAILABLE</option>
          </select>
        </div>
        <div className='pt-7'>
        <button className="rounded-md border 
        w-[129px]
        bg-[#554848]
        text-white 
        p-1.5
        font-bold"
        type="submit"
        >
        Complete
      </button>
      </div>
      
      </div>

      <div className=''>
  
        <div className='flex flex-col p-8 space-y-10'>
            <label>Menu Image</label>
            <input type="file"
            onChange={(e)=>
            setAddMenu({...addMenu,menuImage : e.target.files[0]})
            }
            />
        </div>
   
      </div>
    </div>
  </form>
  </>
 )
}

export default CreateMenu