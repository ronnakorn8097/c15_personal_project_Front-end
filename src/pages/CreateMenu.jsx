import React from 'react'
import axios from '../config/axios'
import { useState } from 'react'
import Loading from '../component/Loading'
import { useNavigate } from 'react-router-dom';


function CreateMenu() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [addMenu,setAddMenu] = useState({
    name : "",
    price : "",
    status : "",
    detail : "",
    menuImage : ""
  })

  const handleSubmit = (e)=>{

  }

  return (
    <div>CreateMenu</div>
  )
}

export default CreateMenu