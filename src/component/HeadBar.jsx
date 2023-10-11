import React from 'react'

function HeadBar({text,buttonName}) {
  return (
    <div className="flex justify-between ">
    <div className="text-4xl font-bold">{text}</div>
    <button type="button" className="flex px-5 py-1.5 text-sm font-medium
     text-white bg-blue-700 rounded-md 
     justify-center items-center">{buttonName}</button>
    </div>
  )
}

export default HeadBar