import { useEffect } from "react";
import HeadBar from "../component/HeadBar";
import ListMenu from "../component/ListMenu";
import axios from "../config/axios";
import { useState } from "react";


export default function MenuPage(){

const [menuItem,setMenuItem] = useState([]);


useEffect(()=>{
    axios.get('/api/menus')
    .then((res)=>setMenuItem(res.data.getAllMenu))
    .catch((err)=>{
      console.log(err)
    })
},[])

// console.log(menuItem)

    return (
        <div className="flex">
        {/* <NavBar /> */}
        <div className="w-full overflow-auto">
          <div className="mx-32 mt-9 mb-9">
  

            <HeadBar text="Menu" buttonName="Create"/>
  
            <div className="w-full ">
              <ul className="grid grid-cols-5 font-bold text-lg mt-8">
                <li>Menu</li>
                <li>Price</li>
                <li>Status</li>
                <li>Detail</li>
                <li>Action</li>
            
              </ul>
  
             {menuItem.map(item=><ListMenu key={item.id} menu={item}/>)} 
            
          
         
             
            </div>
          </div>
        </div>
      </div>
    )
}