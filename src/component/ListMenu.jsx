import React from "react";

function ListMenu() {
  return (
    <div>
      <div className="grid grid-cols-5 justify-between items-center mt-3 w-full ">
        <div>Menu A</div>
        <div>100 Baht</div>
        <div>UNAVAIABLE</div>
        <div>Lorem ipsum dolor sit amet consectetur a</div>
        <div>
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
