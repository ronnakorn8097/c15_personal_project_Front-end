import React from 'react'

function OrderItem({onClick,order}) {

//    console.log(order) // {amounts : '1',menuId: 1,name : 'order name'}  
//  ส่ง price product มาให้ได้
  return (
    <div className="flex gap-4 ml-2 justify-between px-8 text-2xl">
    <div className="flex gap-2">
      <div>
        <p>{order.name}</p>
      </div>
      <div className="text-xl font-semibold flex gap-4">
        <button
          className=" bg-[#cac4c4] hover:bg-slate-400 w-6"
         onClick={(e)=>onClick(e,order.menuId)} 
         value = "minus"
        >
          -
        </button>

    
        <span>{order.amounts}</span> 

        <button
          className="bg-[#cac4c4] hover:bg-slate-400 w-6"
          onClick={(e)=>onClick(e,order.menuId)}
          value ="plus"
        >
          +
        </button>
      </div>
    </div>
    {/* ขาด ราคา */}
    <div className="flex float-left font-bold">{order.price * order.amounts} บาท</div> 
  </div>
  )
}

export default OrderItem