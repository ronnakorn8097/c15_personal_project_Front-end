import React from 'react'
import { useState } from 'react';
import { PiCoffeeLight } from 'react-icons/pi';

function Login() {

  const [input,setInput] = useState({
    username : "",
    password : ""
  })

  const handleClick = async (e)=>{
    e.preventDefault();
    try {
      
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    
<form className=' grid grid-cols-2' onClick={handleClick}>

<div className=''> 
<img src='../../public/unsplash_6VhPY27jdps.png' alt='#' className='w-full h-screen '/>
</div>
<div className=''>
    <div className='flex flex-row justify-center my-24 space-x-6'>
<PiCoffeeLight className='text-7xl '/>
<h1 className='flex justify-center items-center text-7xl'>Smart POS</h1>
</div>

{/* div username / password */}
<div className=' mx-60'>
<div className='space-y-4 py-10'>
    {/* username */}
    <div className='flex flex-col space-y-2'>
    <label className='font-semibold'>Username</label>
<input type="text" placeholder="Enter username" className="input input-bordered rounded-md border w-full py-2 px-4" 
value={input.username} onChange={(e)=>setInput({...input,username:e.target.value})}
/>
</div>

{/* password */}
<div className='flex flex-col space-y-2'>
    <label className='font-semibold' value={input.password}>Password</label>
<input type="text" placeholder="Enter password" className="input input-bordered rounded-md border w-full py-2 px-4" 
value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})}
/>
</div>

{/* button */}
<div className='flex justify-end'>
<button class="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-6 rounded-full">
  Login
</button>
</div>
</div>
</div>

</div>
</form>

   
  )
}

export default Login


