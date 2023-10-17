import React from "react";

function CardMenu() {
  return (
   
    <div className="bg-[#dbd7d7] w-80 h-72 flex flex-col mb-5">
      <div className="grid grid-cols-2 basis-2/3">
        <div className="">
          <img
            src="../../public/unsplash_6VhPY27jdps.png"
            alt="#"
            className="w-56 h-full p-4 "
          />
        </div>
        <div className="pt-4 flex flex-col justify-between">
          <p className="font-bold text-xl mb-2">Coffee</p>
          <p className="text-sm mb-2">
            {/* ห้ามเกิน20 ตัวอักษร */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fugit aliquid reprehenderit alias at! Rerum similique magnam ad ea placeat.
          </p>
          <p className="mb-4 text-xm font-bold">Price 500 Baht</p>
        </div>
      </div>
      <div className="flex justify-center items-center basis-1/3">
        <div className="bg-orange-400 text-white px-20 rounded-full ">ADD</div>
      </div>
    </div>
    
  );
}

export default CardMenu;
