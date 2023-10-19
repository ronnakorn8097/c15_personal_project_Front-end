import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from '../config/axios';


function ListHistory({history}) {

  const {authUser} = useAuth();
  
console.log(history.orderMenus)
  return (
    <div>
    <div className="grid grid-cols-7 justify-between items-center mt-3 w-full ">
      <div>{history.id}</div>
      <div>{history.totalPrice}</div>
      <div>{history.users.firstName}</div>
      {/* <div>{history.updateDate}</div> */}
      {/* <div>{history.orderMenus.menus.name}</div> */}
      <div>{history.paymentType}</div>
      <div>{history.status}</div>
      <div className='flex gap-2'>
{ authUser.role === "ADMIN" &&
<> 
      
       
        <button
          type="button"
          className="px-2 py-2.5 text-sm font-medium text-white bg-red-500">
          VOID
        </button> 
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