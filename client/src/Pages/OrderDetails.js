import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OrdersContext } from "../Contexts/OrdersContext";
import { getOrders } from "../services/orderService";

function OrderDetails() {
  const { orders, setOrders } = useContext(OrdersContext);
  const [ orderDetailsObj, setOrderDetailsObj ] = useState({});
  
  const { id } = useParams();
  useEffect(() => {
    if(orders.length === 0 ) {
        getOrders().then((orders) => {
            setOrders(orders);
        });
    }
    const res = orders.find((orderVal) => orderVal.id === Number(id));

    setOrderDetailsObj(res);
  }, [orders, id, setOrderDetailsObj, setOrders]);
  return (
    <>
      <div>Order details</div>
      <div>
        <div>
          <img src="https://www.facebook.com/randomimagesbr" alt="random"/>
        </div>
        <div>
          <span>Product Name: {orderDetailsObj?.products?.name}</span>
          <span>Product ID: {orderDetailsObj?.products?.id}</span>
        </div>
      </div>
      <div>
        <div>Customer Name: {orderDetailsObj?.member?.fullName}</div>
        <div>Email: {orderDetailsObj?.member?.email}</div>
        <div>
          Address: {orderDetailsObj?.member?.address},
          {orderDetailsObj?.member?.city},{orderDetailsObj?.member?.postcode},
          {orderDetailsObj?.member?.country}
        </div>
        <div>Phone Number: {orderDetailsObj?.member?.phoneNumber}</div>
      </div>
      <div>order status update buttons</div>
      <div>
        <span>Date:</span>
        <span>Date:</span>
      </div>
    </>
  );
}

export default OrderDetails;
