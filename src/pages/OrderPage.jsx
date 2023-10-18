import React from "react";
import CardMenu from "../component/CardMenu";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../config/axios"

function OrderPage() {

  const [order,setOrder] = useState([]);
  const [clickQty,setClickQty] = useState(0);

  useEffect(()=>{
    axios.get('/api/menus').then((res)=>{
      setOrder(res.data.getAllMenu)
    })
  },[])

  return (
    <div className="bg-red-100 h-screen w-[calc(100vw-350px)]">
      <div className="grid grid-cols-9">
        <div className="col-span-5">
          <div className=" p-12 text-3xl font-bold">Menu</div>

          <div className="grid grid-cols-2 gap-3 ">
            <div className="flex flex-wrap col-span-2 justify-around m-4">
             {order.map(item=> <CardMenu key={item.id} order={item}/>) }
             {/* <CardMenu order={order}/> */}
             
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-gray-300">


          <h1 className="text-4xl font-bold mb-8 p-4">Order No.</h1>

          <div className="flex gap-4 ml-2 justify-between px-8 text-2xl">
            <div className="flex gap-2">
            <div>
            <p>Menu Item A</p>
            </div>
            <div className="text-xl font-semibold flex gap-4">
              <button 
              className=" bg-[#cac4c4] hover:bg-slate-400 w-6"
              onClick={()=>setClickQty(clickQty-1)}
              >-</button>

              <span>{clickQty}</span>

              <button 
              className="bg-[#cac4c4] hover:bg-slate-400 w-6"
              onClick={()=>setClickQty(clickQty+1)}
              >+</button>           
            </div>
            </div>
            <div className="flex float-left font-bold">
              70
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
