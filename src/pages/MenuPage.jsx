import HeadBar from "../component/HeadBar";
import ListMenu from "../component/ListMenu";


export default function MenuPage(){
    return (
        <div className="flex">
        {/* <NavBar /> */}
        <div className="w-full overflow-auto">
          <div className="mx-32 mt-9 mb-9">
  
          {/* <div className="flex justify-between ">
            <div className="text-4xl font-bold">Menu</div>
            <button type="button" className="flex px-5 py-1.5 text-sm font-medium
             text-white bg-blue-700 rounded-md 
             justify-center items-center">Create</button>
            </div> */}

            <HeadBar text="Menu" buttonName="Create"/>
  
            <div className="w-full ">
              <ul className="grid grid-cols-5 font-bold text-lg mt-8">
                <li>Menu</li>
                <li>Price</li>
                <li>Status</li>
                <li>Detail</li>
                <li>Action</li>
            
              </ul>
  
              <ListMenu/>
              <ListMenu/>
              <ListMenu/>
              <ListMenu/>
              <ListMenu/>
              <ListMenu/>
              <ListMenu/>
              <ListMenu/>
          
         
             
            </div>
          </div>
        </div>
      </div>
    )
}