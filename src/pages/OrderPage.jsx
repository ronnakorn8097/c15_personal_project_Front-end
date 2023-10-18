import React from "react";
import CardMenu from "../component/CardMenu";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../config/axios"

function OrderPage() {

  const [order,setOrder] = useState([]);

  useEffect(()=>{
    axios.get('/api/menus').then((res)=>{
      setOrder(res.data.getAllMenu)
    })
  })

  return (
    <div className="bg-blue-200 h-screen w-[calc(100vw-350px)]">
      <div className="grid grid-cols-9">
        <div className="col-span-6">
          <div className=" p-14 text-2xl font-bold">Menu</div>

          <div className="grid grid-cols-2 gap-3 ">
            <div className="flex flex-wrap col-span-2 justify-around m-4">
             {order.map(item=> <CardMenu key={item.id} order={item}/>) }
             {/* <CardMenu order={order}/> */}
             
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-red-200">


          <h1 className="text-4xl font-bold mb-8">Order No.</h1>

          <div className="bg-gray-200 flex gap-4 ml-2">
            <p>Menu A</p>
            <div className="text-xl font-semibold flex gap-4">
              <button className="rounded-md bg-[#A39090] w-6">-</button>
              <span>1</span>
              <button className="rounded-md bg-[#A39090] w-6">+</button>           
            </div>
            <div className="flex float-left">
              70
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
