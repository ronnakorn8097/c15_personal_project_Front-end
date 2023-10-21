import React from 'react';

import VoidButton from './VoidButton';

function ListHistory({historyItem,history,setHistory}) {
  

  return (
   <div>
     <div className="grid grid-cols-7 justify-between items-center mt-3 w-full ">
      <div>{historyItem.id}</div>
      <div>{historyItem.totalPrice}</div>
      <div>{historyItem.users.firstName}</div>
      <div>{historyItem.updateDate}</div>
      <div>{historyItem.paymentType}</div>
      <div>{historyItem.status}</div>
      <div>
        <VoidButton historyItem={historyItem.id} history={history} setHistory={setHistory}/>
      </div>
      </div>
   </div>
  )
}

export default ListHistory