import React from 'react'
import useAuth from '../../hooks/useAuth'
import { removeAccessToken } from '../../../utils/local-storage'

function Logout({children}) {

   

  const logout = ()=>{
    removeAccessToken();
    
  }

  return (
    <button onClick={logout}>Logout</button>
  )
}

export default Logout