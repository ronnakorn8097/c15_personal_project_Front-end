import React from "react";
import CardMenu from "../component/CardMenu";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../config/axios";
import OrderItem from "../component/OrderItem";

function OrderPage() {
  const defaultOrder = {
    paymentType: "CASH",
    orderType: "WALKIN",
    discount: "0",
    status: "COMPLETE",
    orderMenus: [],
  };
  const [products, setProducts] = useState([]);

  const [order, setOrder] = useState(defaultOrder);
  const [viewOrder,setViewOrder] = useState([]);
  //
  const [totalPrice, setTotalPrice] = useState(0);

  // console.log(order)

  // plus , minus = e
  const onClickAdd = (e, menuId) => {
    const newOrderMenus = [...order.orderMenus]; // []

    // ถ้ากดปุ่ม +
    if (e.target.value === "plus") {
      const targetOrder = newOrderMenus.find((el) => +el.menuId === +menuId);
      // กดปุ่ม ADD ใต้ product
      // console.log(targetOrder) // {amounts : '1',menuId: 1,name : 'order name'}
      // console.log(newOrderMenus) // {amounts : '1',menuId: 1,name : 'order name'}
      if (targetOrder) { 
        // เคยเจอเมนูนี้อยู่ใน order แล้วก็ให้ บวก1
        const clonedTarget = {...targetOrder,amounts: +targetOrder.amounts + 1,};
        // console.log(clonedTarget)
        // {amounts : '1',menuId: 1,name : 'order name'} กดปุ่มบวก 1 รอบ
        // {amounts : '2',menuId: 1,name : 'order name'} กดปุ่มบวก 2 รอบ
        // {amounts : '3',menuId: 1,name : 'order name'} กดปุ่มบวก 3 รอบ
        const filteredOrderMenus = newOrderMenus.filter(
          (el) => el.menuId !== menuId
        ); // ไม่เท่ากับข้อมูลเก่า
        filteredOrderMenus.push(clonedTarget);
        // console.log(filteredOrderMenus)
        setOrder((prev) => ({ ...prev, orderMenus: filteredOrderMenus }));
      } else {
        // ยังไม่เคยถูกกดแอด
        // หาเมนูที่จะเอาเข้า order
        const targetProduct = products.find((el) => el.id === menuId);
        // set ค่า order ที่จะ set ให้มัน
        const newOrder = {
          amounts: "1",
          menuId: menuId,
          name: targetProduct.name,
          price: targetProduct.price,
        };
        newOrderMenus.push(newOrder);
        // prev ค่าก่อนหน้านี้เหมือนเดิมยกเว้น orderMenus ให้รับ newOrderMenus เข้าไปแทน ที่ key orderMenus
        setOrder((prev) => ({ ...prev, orderMenus: newOrderMenus }));
      }
    }
    // ถ้ากดปุ่ม -
    else {
      const targetOrder = newOrderMenus.find((el) => +el.menuId === +menuId);
      // console.log(targetOrder) //  {amounts : '1',menuId: 1,name : 'order name'} ข้อมูลของที่มีอยู่แล้วหลังกด add
      if (targetOrder.amounts > 1) {
        // ถ้ามี value
        const clonedTarget = {...targetOrder,amounts: +targetOrder.amounts - 1,
        };
        const filteredOrderMenus = newOrderMenus.filter(
          (el) => el.menuId !== menuId
        ); // ไม่เท่ากับข้อมูลเก่า
        filteredOrderMenus.push(clonedTarget);
        setOrder((prev) => ({ ...prev, orderMenus: filteredOrderMenus }));
      } else {
        // ไม่เท่ากับเมนูที่ถูกเลือก
        const removedOrderMenus = newOrderMenus.filter(
          (el) => el.menuId !== menuId
        );
        setOrder((prev) => ({ ...prev, orderMenus: removedOrderMenus }));
      }
    }
  };

  const handleSubmit = async () => {
    try {
      delete order.orderMenus.name;
      // console.log(order)
      await axios.post("/api/orders", order);
      setOrder(defaultOrder);
      //  console.log(order)
    } catch (error) {
      console.log(error);
    }
  };


  // สำรหับเช็ค total price เมื่อมีการ เเปลี่ยนแปลงของ menu ใน order
  useEffect(() => {
    // ถ้าใน order ไม่มี menu -> totalprice ก็คือ 0
    if (order.orderMenus.length === 0) setTotalPrice(0);
    else {
      let newTotal = order.orderMenus.reduce(
        (sum, item) => sum + item.price * item.amounts * 0.93,
        0
      )
      setTotalPrice(newTotal)
      // console.log(newTotal)
    }
  }, [order.orderMenus]);


 
  useEffect(() => {
    axios.get("/api/menus").then((res) => {
      setProducts(res.data.getAllMenu);
    });
    axios.get("/api/history").then((res) => {
      setViewOrder(res.data.getHistory);
    });
    
  }, []);
// console.log(viewOrder)
  // console.log(order.orderType) // เริ่มต้นเป็น walkin

  return (
    <div className=" h-screen w-[calc(100vw-350px)]">
      <div className="grid grid-cols-9">
        <div className="col-span-5">
          <div className=" p-12 text-3xl font-bold">Menu</div>

          <div className="grid grid-cols-2 gap-3 ">
            <div className="flex flex-wrap col-span-2 justify-around m-4">
              {products.map((item) => (
                <CardMenu
                  key={item.id}
                  product={item}
                  onClick={onClickAdd}
                  orderMenus={order.orderMenus}
                />
              ))}
              {/* <CardMenu order={order}/> */}
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-gray-300">
          <h1 className="text-4xl font-bold mb-8 p-4">Order No. {viewOrder.length + 1}</h1>

          {order.orderMenus.map((el) => (
            <OrderItem key={el.menuId} order={el} onClick={onClickAdd} />
          ))}
          {/* cal */}

          <div className="bg-blue-100">
            <ul className="m-10 flex flex-col font-semibold">
              <li className="flex justify-between ">
                Price &nbsp; &#40;BAHT&#41;{" "}
                <span>
                  {order.orderMenus.length > 0 &&
                    order.orderMenus.reduce(
                      (sum, item) => sum + item.price * item.amounts,
                      0
                    )}
                </span>{" "}
              </li>
              <li className="flex justify-between ">
                Vat 7%{" "}
                <span>
                  {order.orderMenus.length > 0 &&
                    order.orderMenus.reduce(
                      (sum, item) => sum + item.price * item.amounts * 0.07,
                      0
                    ).toFixed(2)}
                </span>{" "}
              </li>
              <li className="flex justify-between">
                Dsicount{" "}
                <input
                  type="text"
                  className="border-black border w-8"
                  value={order.discount}
                  onChange={(e) => {
                    setOrder({ ...order, discount: e.target.value });
                  }}
                ></input>
              </li>
              <li className="flex justify-between">
                Total Price &nbsp; &#40;BAHT&#41; {
                  order.discount === "0" && <span>{totalPrice}</span>
                }
                {
                  order.discount !== "0" && <span>{totalPrice*(100-parseInt(order.discount))/100}</span>
                }
              </li>
            </ul>
          </div>

          {/* order type */}
          <div className="m-10 flex flex-col">
            <p className="font-bold text-xl">Order Type</p>
            <div className="flex justify-center mt-3">
              <div
                className="p-2 border  border-black bg-blue-500 hover:bg-blue-900 cursor-pointer text-white font-bold"
                name="WALKIN"
                value={order.orderType}
                onClick={() => setOrder({ ...order, orderType: "WALKIN" })}
              >
                WALI IN
              </div>

              <div
                className="p-2 border border-black bg-gray-500 hover:bg-gray-900 cursor-pointer text-white font-bold"
                name="DELIVERY"
                value={order.orderType}
                onClick={() => setOrder({ ...order, orderType: "DELIVERY" })}
              >
                Delivery
              </div>
            </div>
          </div>

          <div className="m-10 flex flex-col">
            <p className="font-bold text-xl">Payment Type</p>
            <div className="flex justify-center mt-3">
              <div
                className="p-2 border  border-black bg-blue-500 hover:bg-blue-900 cursor-pointer text-white font-bold"
                name="CASH"
                value={order.paymentType}
                onClick={() => setOrder({ ...order, paymentType: "CASH" })}
              >
                CASH
              </div>
              <div
                className="p-2 border border-black bg-gray-500 hover:bg-gray-900 cursor-pointer text-white font-bold"
                name="QRCODE"
                value={order.paymentType}
                onClick={() => setOrder({ ...order, paymentType: "QRCODE" })}
              >
                QRCODE
              </div>
            </div>
          </div>

          <div className="bg-red-200 flex justify-end pr-20">
            <button
              className="border border-black rounded-3xl p-2 px-7 bg-blue-500 text-white"
              onClick={handleSubmit}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
