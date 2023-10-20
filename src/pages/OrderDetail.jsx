import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function OrderDetail() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

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
      <div className="flex">
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
            <h1>Menu Detail</h1>
            <div className="w-full ">
              {order.orderMenus.map((orderMenu) => {
                return (
                  <React.Fragment key={orderMenu.id}>
                    <ul className="grid grid-cols-6 font-bold text-lg mt-8">
                      <li>
                        <img
                          alt={`img-${orderMenu.id}`}
                          src={orderMenu.menus.menuImage}
                        />
                      </li>
                      <li>{orderMenu.menus.name}</li>
                      <li>{orderMenu.amounts}</li>
                      <li>{orderMenu.menus.price}</li>
                      <li>{orderMenu.menus.price * orderMenu.amounts}</li>
                    </ul>
                  </React.Fragment>
                );
              })}
              <ul className="grid grid-cols-6 font-bold text-lg mt-8">
                <li> Total Price </li>
                <li> - </li>
                <li> - </li>
                <li>
                  {order.orderMenus.reduce(
                    (sum, item) => sum + item.menus.price * item.amounts,
                    0
                  )}
                </li>
              </ul>
              <ul className="grid grid-cols-6 font-bold text-lg mt-8">
                <li> Discount </li>
                <li> - </li>
                <li> - </li>
                <li>
                  {order.orderMenus.reduce(
                    (sum, item) => sum + item.menus.price * item.amounts,
                    0
                  )} - {order.discount}% = {order.totalPrice}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OrderDetail;
