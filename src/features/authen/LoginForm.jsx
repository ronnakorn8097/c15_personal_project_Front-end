import React, { useState } from 'react'

function LoginForm() {

  const [loginInput,setLoginInput] = useState({
    username: "",
    password: "",
  });

  const handleSubmitForm = (e)=>{
    e.preventDefault();
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <form onSubmit={handleSubmitForm}>

 {/* username */}
    <div className='flex flex-col space-y-2'>
    <label className='font-semibold'>Username</label>
<input type="text" placeholder="Enter username" 
className="input input-bordered rounded-md border w-full py-2 px-4" 
value={loginInput.username}
onChange={(e)=>setLoginInput({...loginInput,username : e.target.value})}/>
</div>

{/* password */}
<div className='flex flex-col space-y-2'>
<label className='font-semibold'>Password</label>
<input type="text" placeholder="Enter password" 
className="input input-bordered rounded-md border w-full py-2 px-4" 
value = {loginInput.password}
onChange={(e)=>setLoginInput({...loginInput,password : e.target.value})}
/>
</div>

</form>
  )
}

export default LoginForm