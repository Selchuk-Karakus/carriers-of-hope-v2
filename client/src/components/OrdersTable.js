import { React, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrdersContext } from "../Contexts/OrdersContext";
import { getOrders } from "../services/orderService";
import { CgSoftwareDownload } from "react-icons/cg";
import { CSVLink } from "react-csv";

function OrdersTable() {
  const { orders, setOrders } = useContext(OrdersContext);
  const navigate = useNavigate();
  const headers = [
    { label: "Order ID", key: "orderRef" },
    { label: "Date of Order", key: "orderDate" },
    { label: "Customer", key: "member.fullName" },
    { label: "Status", key: "orderStatus" },
  ];
  
  useEffect(() => {
    getOrders().then((orders) => {
      setOrders(orders);
    });
  }, [setOrders]);

  const handleRedirect = (orderId) => {
    navigate(`/admin/order/${orderId}`);
  };
  return (
    <div className="orders-tab">
      <div className="dropdown-menu-container">
        <div className="filter-by">
          <div className="dropdown-menu">
            <label className="status">Filter by:</label>
            <select>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="declined">Declined</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="dropdown-menu" id="sort-by">
            <select>
              <option value="last-week">Last 7 days</option>
              <option value="last-month">Last 14 days</option>
              <option value="last-two-months">Last month</option>
              <option value="last-three-months">Last year</option>
            </select>
          </div>
        </div>

        {orders && orders.length > 0 && (
          <CSVLink
            className="download"
            headers={headers}
            data={orders}
            filename="customer_orders.csv"
          >
            <CgSoftwareDownload />
          </CSVLink>
        )}
      </div>

      <table className="orders-table">
        <tbody className="orders-tbody">
          <tr>
            <th className="column-title">OrderID</th>
            <th className="column-title">Date of order</th>
            <th className="column-title">Customer</th>
            <th className="column-title">Status</th>
            <th className="column-title">Order details</th>
          </tr>
            {orders && orders.map((order, index) => {
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
                <td className="customer-name">{order.member.fullName}</td>

                <td className="order-status">{order.orderStatus}</td>

                <td className="order-details">
                  <button
                    className="view-button"
                    onClick={() => handleRedirect(order.id)}
                  >
                    View {">"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;