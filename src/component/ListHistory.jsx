import React from 'react';



function ListHistory({history}) {

 

  return (
    <div>
    <div className="grid grid-cols-6 justify-between items-center mt-3 w-full ">
      <div>{history.id}</div>
      <div>{history.totalPrice}</div>
      <div>{history.users.firstName}</div>
      <div>{history.updateDate}</div>
      <div>{history.paymentType}</div>
      <div className='flex gap-2'>
        <button
          type="button"
          className="px-5 py-2.5 text-sm font-medium text-white bg-red-500">
          VOID
        </button>
        <button
          type="button"
          className="px-5 py-2.5 text-sm font-medium text-white bg-green-700">
          Print
        </button>
      </div>
    </div>
  </div>
  )
}

export default ListHistory