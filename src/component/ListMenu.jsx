import React from "react";
import ButtonMenu from "./ButtonMenu";

function ListMenu({menu}) {

  return (
    <div>
      <div className="grid grid-cols-5 justify-between items-center mt-3 w-full ">
        <div>{menu.name}</div>
        <div>{menu.price} Baht</div>
        <div>{menu.status}</div>
        <div>{menu.detail}</div>

      <ButtonMenu menuId={menu.id}/>
      </div>
    </div>
  );
}

export default ListMenu;
