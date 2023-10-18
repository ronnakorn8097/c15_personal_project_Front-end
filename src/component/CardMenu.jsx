import React from "react";
import defaultPicture from '../../public/defaultProfile.jpg'

function CardMenu({order}) {
  return (
   
    <div className="bg-[#dbd7d7] w-80 h-72 flex flex-col mb-5">
      <div className="grid grid-cols-2 basis-2/3">
        <div className="">
          <img
            src={order.menuImage}
            alt="#"
            className="w-56 h-full p-4 "
          />
        </div>
        <div className="pt-4 flex flex-col justify-between">
          <p className="font-bold text-xl mb-2">{order.name}</p>
          <p className="text-sm mb-2">
            {/* ห้ามเกิน20 ตัวอักษร */}
            {order.detail}
          </p>
          <p className="mb-4 text-xm font-bold">Price {order.price} Baht</p>
        </div>
      </div>
      <div className="flex justify-center items-center basis-1/3">
        <div className="bg-orange-400 text-white px-20 rounded-full ">ADD</div>
      </div>
    </div>
    
  );
}

export default CardMenu;
