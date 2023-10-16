import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom';

function RedirectIFAuthen({children}) {

    const {authUser} = useAuth();
    if(authUser)
    {
        if(authUser.role === 'STAFF')
        {
            return <Navigate to='/order'/>
        }
        return <Navigate to='/menu'/>
    }
  return children;
}

export default RedirectIFAuthen