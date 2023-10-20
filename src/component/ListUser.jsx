import React from 'react'
import ButtonUser from './ButtonUser'


//  map user with database
function ListUser({user ,setAllUsers,allUsers}) {
  return (
    <div>
      <div className="grid grid-cols-6 justify-between items-center mt-3 w-full ">
        <div>{user.username}</div>
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <div>{user.role}</div>
        <div>{user.status}</div>

        <ButtonUser userId={user.id} />

      </div>
    </div>
  )
}

export default ListUser