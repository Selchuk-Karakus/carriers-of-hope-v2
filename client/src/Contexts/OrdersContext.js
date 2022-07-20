import React, { createContext, useState } from "react";

export const OrdersContext = createContext();

const OrdersContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {" "}
      {children}
    </OrdersContext.Provider>
  );
};
export default OrdersContextProvider;
