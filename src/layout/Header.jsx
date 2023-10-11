import React from 'react'
import Logout from '../features/authen/Logout'

function Header() {
  return (
    <header className='flex bg-[#554848] w-full h-20 justify-between fixed'>
      <div className='text-white text-3xl flex justify-center items-center ml-10 font-semibold'>Smart POS</div>
      <div className='flex justify-self-end text-white mr-10 text-sm font-bold'>
      <Logout/>
      </div>
     
    </header>
  )
}

export default Header