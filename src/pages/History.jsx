import React from "react";
import { useEffect } from "react";
import axios from "../config/axios";
import { useState } from "react";
import ListHistory from "../component/ListHistory";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("/api/history").then((res) => {
      setHistory(res.data.getHistory);
    });
  }, []);

  // console.log(history)
  return (
    <div className="flex">
      {/* <NavBar /> */}
      <div className="w-full overflow-auto">
        <div className="mx-32 mt-9 mb-9">
          <div className="flex justify-between ">
            <div className="text-4xl font-bold">History</div>
          </div>

          <div className="w-full ">
            <ul className="grid grid-cols-7 font-bold text-lg mt-8">
              <li>Order No.</li>
              <li>Total Price</li>
              <li>Staff</li>
              <li>Date</li>
              <li>Payment</li>
              <li>Type</li>
              <li>Action</li>
            </ul>

            {history.map((item, i) => (
              <ListHistory key={item.id} history={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
