import React from "react";


function CardMenu({product,onClick, orderMenus}) {

 const isDisable = orderMenus.find(el => +el.menuId === product.id) ? true : false

// console.log(product)


  return (
   
    <div className="bg-[#dbd7d7] w-80 h-72 flex flex-col mb-5">
      <div className="grid grid-cols-2 basis-2/3">
        <div className="">
          <img
            src={product.menuImage}
            alt="#"
            className="w-56 h-full p-4 "
          />
        </div>
        <div className="pt-4 flex flex-col justify-between">
          <p className="font-bold text-xl mb-2">{product.name}</p>
          <p className="text-sm mb-2">
          
            {product.detail}
          </p>
          <p className="mb-4 text-xm font-bold">Price {product.price} Baht</p>
        </div>
      </div>
      <div className="flex justify-center items-center basis-1/3">
        <button className={`${isDisable ? "bg-gray-400": "bg-orange-400"} text-white px-20 rounded-full `} disabled = {isDisable}
        onClick={(e)=>onClick(e,product.id)}
        value = "plus"
        >ADD</button>
      </div>
    </div>
    
  );
}

export default CardMenu;
