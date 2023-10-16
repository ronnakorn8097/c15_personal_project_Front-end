import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

function Authenticated({children}) {
    const {authUser} = useAuth();


  
    if(!authUser)
    {
        return <Navigate to="/login"/>
    }
  return children;
}

export default Authenticated