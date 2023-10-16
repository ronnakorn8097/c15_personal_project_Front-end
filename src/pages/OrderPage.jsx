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
  
  )
}

export default OrderPage