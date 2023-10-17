import React from 'react'
import defaultProfile from '../../public/defaultProfile.jpg'

function Avatar({src}) {

 
  return (
    <div className="flex justify-center items-center mb-4">
    <img
      className="rounded-full w-56 h-60 mt-4"
      src={src || defaultProfile}
      alt="Profile"/>
     
  </div>

  )
}

export default Avatar