import React from "react";

function CardMenu() {
  return (
   
    <div className="bg-[#f2f2f2] w-80 h-80 flex flex-col">
      <div className="grid grid-cols-2 basis-2/3">
        <div className="">
          <img
            src="../../public/ali-jouyandeh-bodgc6H44FA-unsplash.jpg"
            alt="#"
            className="w-56 h-full p-4 "
          />
        </div>
        <div className="pt-4 flex flex-col justify-between">
          <p>Coffee</p>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            eveniet
          </p>
          <p className="mb-4">Price 500</p>
        </div>
      </div>
      <div className="flex justify-center items-center basis-1/3">
        <div className="bg-orange-400 text-white px-20 rounded-full ">ADD</div>
      </div>
    </div>
    
  );
}

export default CardMenu;
