import { useEffect } from "react";
import { Link } from "react-router-dom";
import ListMenu from "../component/ListMenu";
import axios from "../config/axios";
import { useState } from "react";

export default function MenuPage() {
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    axios
      .get("/api/menus")
      .then((res) => setMenuItem(res.data.getAllMenu))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(menuItem)

  return (
    <div className="flex">
      {/* <NavBar /> */}
      <div className="w-full overflow-auto">
        <div className="mx-32 mt-9 mb-9">
          <div className="flex justify-between ">
            <div className="text-4xl font-bold">Menu</div>

            <Link to="/menu/createMenu">
            <button
              type="button"
              className="flex px-5 py-1.5 text-sm font-medium
     text-white bg-blue-700 rounded-md 
     justify-center items-center"
            >
              Create
            </button>
            </Link>
          </div>

          <div className="w-full ">
            <ul className="grid grid-cols-5 font-bold text-lg mt-8">
              <li>Menu</li>
              <li>Price</li>
              <li>Status</li>
              <li>Detail</li>
              <li>Action</li>
            </ul>

            {menuItem.map((item) => (
              <ListMenu key={item.id} menu={item} menuItem={menuItem} setMenuItem={setMenuItem}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
