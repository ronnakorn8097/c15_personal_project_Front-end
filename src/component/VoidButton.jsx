import React from 'react'
import useAuth from '../hooks/useAuth';
import axios from '../config/axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loading from "./Loading";

function VoidButton({historyItem,history,setHistory}) {


    const {authUser} = useAuth();
    const [loadind,setLoading] = useState(false)
  
    const handleVoidOrder = async (e) => {
        try {
          e.preventDefault();
             setLoading(true)
     const res = await axios.patch(`/api/orders/${historyItem}`)
    //  const newres = res.data.historyWithOutVoid
          if(res.status === 200)
          {
            let newHistory = [...history]
            newHistory = newHistory.filter(e => e.id !== historyItem)
            setHistory(newHistory)        
          }
       
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
   
    }
  
  // console.log(history.orderMenus[0].menus)
  return (
    <div className='flex gap-2'>
{ authUser.role === "ADMIN" &&
<> 
      
       {loadind && <Loading/>}
        <button onClick={handleVoidOrder}
          type="button"
          className="px-2 py-2.5 text-sm font-medium text-white bg-red-500">
          VOID
        </button> 

        <Link to={`/order/detail/${historyItem}`}>
        <button
          type="button"
          className="px-2 py-2.5 text-sm font-medium text-white bg-blue-700">
          Detail
        </button>
        </Link>

        </>}
        <button
          type="button"
          className="px-2 py-2.5 text-sm font-medium text-white bg-green-700">
          Print
        </button>
      

  </div>
  )
}

export default VoidButton