import {React, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { OrdersContext } from "../Contexts/OrdersContext";
import { getOrders } from "../services/orderService";

function OrdersTable() {

  const { orders, setOrders } = useContext(OrdersContext);
   const navigate = useNavigate();

   useEffect(() => {
      getOrders()
      .then((orders) => {
        setOrders(orders)
      });
   }, [setOrders]);

 const handleRedirect = (orderId) => {
    navigate(`/admin/order/${orderId}`)
 }  
    return (
      <div>
        <h3>Recent orders</h3>
        <div>Choose status</div>
        <div>Last 7 days</div>

        <table className="orders-table">
            <tbody className="orders-tbody">
                {orders.map((order, index) => {
                    return (
                      <tr key={index} className="order-table-row">
                        <td className="order-id">{order.orderRef}</td>
                        <td className="order-date">
                          {new Date(order.orderDate).toLocaleDateString({
                            day: "2-digit",
                            month: "2-digit",
                            year: "4-digit",
                          })}
                        </td>

                        <td className="customer-name">
                          {order.member.fullName}
                        </td>

                        <td className="order-status">{order.orderStatus}</td>

                        <td className="order-status"><button onClick={() => handleRedirect(order.id)}>View</button></td>
                      </tr>
                    );
                })}
            </tbody>
        </table>
      </div>
    );
}

export default OrdersTable;