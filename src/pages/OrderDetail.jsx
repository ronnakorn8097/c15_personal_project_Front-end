import axios from "axios";
import React,{useRef} from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useReactToPrint} from 'react-to-print'

function OrderDetail() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  const componentRef = useRef();
  const printData = useReactToPrint({
      content : ()=> componentRef.current,
      documentTitle : `Detail Item`,
      onafterprint : ()=> alert('print success')
  })

  useEffect(() => {
    axios
      .get(`/api/orders/${orderId}`)
      .then((res) => {
        // console.log(res.data.orderDetail);
        setOrder(res.data.orderDetail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!order) return <div>Loading...</div>;
  else
    return (
      <div className="flex" ref={componentRef}>
        {/* <NavBar /> */}
        <div className="w-full overflow-auto">
          <div className="mx-32 mt-9 mb-9">
            <div className="flex justify-between ">
              <div className="text-4xl font-bold">Order: {order.id}</div>
            </div>

            <div className="w-full ">
              <ul className="grid grid-cols-6 font-bold text-lg mt-8">
                <li>Order No.</li>
                <li>Total Price</li>
                <li>Staff</li>
                <li>Date</li>
               
                <li>Payment</li>
                <li>Status</li>
                
              </ul>
              <ul className="grid grid-cols-6 font-bold text-lg mt-8">
                <li>{order.id}</li>
                <li>{order.totalPrice}</li>
                <li>{order.users.firstName}</li>
                <li>{order.updateDate}</li>
                <li>{order.paymentType}</li>
                <li>{order.status}</li>
              </ul>
            </div>
            <hr />
            <h1 className="text-xl font-bold">Menu Detail</h1>
            <div className="w-full ">
        

              {order.orderMenus.map((orderMenu) => {
                return (
                  <React.Fragment key={orderMenu.id}>
                    <ul className="w-full flex justify-around font-bold text-lg mt-8">
                      <li>
                        <img
                          alt={`img-${orderMenu.id}`}
                          src={orderMenu.menus.menuImage}
                          className="w-24"
                        />
                      </li>
                      <li className="flex items-center justify-center">{orderMenu.menus.name}</li>
                      <li className="flex items-center justify-center">{orderMenu.amounts}</li>
                      <li className="flex items-center justify-center">{orderMenu.menus.price}</li>
                      <li className="flex items-center justify-center">{orderMenu.menus.price * orderMenu.amounts}</li>
                    </ul>
                  </React.Fragment>
                );
              })}
              <ul className="flex gap-6 font-bold text-lg mt-8">
                <li>Price </li>
                <li>
                  {order.orderMenus.reduce(
                    (sum, item) => sum + item.menus.price * item.amounts,
                    0
                  )}
                </li>
              </ul>
              <ul className="flex gap-6 font-bold text-lg mt-8">
                <li> Discount </li>
                <li>
                {order.discount}%
                </li>
              </ul>
              <ul className=" flex gap-6 font-bold text-lg mt-8">
                <li> Total Price </li>        
                <li>
                  {order.orderMenus.reduce(
                    (sum, item) => sum + item.menus.price * item.amounts,
                    0
                  )} - {order.discount}% = {order.totalPrice}
                </li>
              </ul>
            </div>
        <button onClick={printData} className="mt-12 w-24 rounded-md text-white bg-gray-700 font-bold print:hidden">Print</button>
          </div>
        </div>
       
      </div>
    );
}

export default OrderDetail;
