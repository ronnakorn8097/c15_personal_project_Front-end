import React from "react";

function ListMenu({menu}) {




  return (
    <div>
      <div className="grid grid-cols-5 justify-between items-center mt-3 w-full ">
        <div>{menu.name}</div>
        <div>{menu.price} Baht</div>
        <div>{menu.status}</div>
        <div>{menu.detail}</div>
        <div className="flex gap-2">
          <button
            type="button"
            className="px-5 py-2.5 text-sm font-medium text-white bg-gray-400">
            Edit
          </button>
          <button
            type="button"
            className="px-5 py-2.5 text-sm font-medium text-white bg-red-700">
            Del
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListMenu;
