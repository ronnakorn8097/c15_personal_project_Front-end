import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from '../config/axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loading from "./Loading";

function ListHistory({history}) {

  // console.log(history)
  const {authUser} = useAuth();
  // console.log(history.status) //void
  const [loadind,setLoading] = useState(false)

  const handleVoidOrder = async (e) => {
      try {
           setLoading(true)
    await axios.patch(`/api/orders/${history.id}`)
    .then(res => {
      
    })  
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
    // setLoading(true)
    // await axios.patch(`/api/orders/${history.id}`)
    // .then(res => {
 
    // })
    // .catch(err=>{
    //   console.log(err)
    // }).finally(setLoading(false))
  }

// console.log(history.orderMenus[0].menus)
  return (
    <div>
    <div className="grid grid-cols-7 justify-between items-center mt-3 w-full ">
      <div>{history.id}</div>
      <div>{history.totalPrice}</div>
      <div>{history.users.firstName}</div>
      <div>{history.updateDate}</div>
      <div>{history.paymentType}</div>
      <div>{history.status}</div>
      <div className='flex gap-2'>

        
{ authUser.role === "ADMIN" &&
<> 
      
       {loadind && <Loading/>}
        <button onClick={handleVoidOrder}
          type="button"
          className="px-2 py-2.5 text-sm font-medium text-white bg-red-500">
          VOID
        </button> 
        <Link to={`/order/detail/${history.id}`}>
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
    </div>
  </div>
  )
}

export default ListHistory