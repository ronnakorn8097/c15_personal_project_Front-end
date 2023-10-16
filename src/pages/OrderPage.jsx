import React from 'react'
import CardMenu from '../component/CardMenu'

function OrderPage() {
  return (
    <div className=' h-screen w-[calc(100vw-400px)] '>
      <div className='grid grid-cols-9'>
        <div className='col-span-6'>
      <div className='bg-red-300 p-14 text-2xl font-bold'>Menu</div>
            
            <CardMenu/>
            <CardMenu/>
            <CardMenu/>
            <CardMenu/>
          
        </div>
        <div className='col-span-3'>2</div>
      </div>

      
    // </div>
    // <div className="bg-red-100 min-h-screen flex items-center justify-center w-80 h-56">
    //   <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    //     <h2 className="text-2xl font-bold mb-6">Americano Passion</h2>
    //     <div className="flex items-center justify-between mb-4">
    //       <div className="flex items-center">
            
    //         <img src='../../public/unsplash_6VhPY27jdps.png' className='w-32 h-32'/>
    //       </div>
    //       <div className="text-xl font-bold">70 Baht</div>
    //     </div>
    //     <div className="mb-4">
    //       <div className="text-sm mb-2">Ingredients:</div>
    //       <ul className="list-disc list-inside truncate hover:text-clip ">
    //        <p>Lorem ipsum dolor sit amet consectetur adipisicingdfdzdfjzdfikljdzilfjhdizzfdfdf elit. Inventore, beatae?</p>
    //       </ul>
    //     </div>
    //     <div to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full flex justify-center">
    //       Add to Cart
    //     </div>
    //   </div>
    // </div>

    

    
    
  )
}

export default OrderPage