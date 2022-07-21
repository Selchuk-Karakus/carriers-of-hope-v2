import React from "react";
import OrdersTable from "../components/OrdersTable";
import MembersTable from "../components/MembersTable";
import "../styles/dashboard.scss";
import { CgProfile } from "react-icons/cg";

function Dashboard() {
  return (
    <div className="admin-dashboard">
      <div className="admin-navbar">
        <div className="admin-profile">
          <h1>Admin name</h1>
          <span className="profile-icon">
            <CgProfile />
          </span>
        </div>
        <div className="logout">Logout</div>
      </div>

      <div className="button-container">
        <div className="button">
          <button className="admin-tab-button" id="orders-button">
            Orders
          </button>
        </div>

        <div className="button">
          <button className="admin-tab-button" id="products-button">
            Products
          </button>
        </div>

        <div className="button">
          <button className="admin-tab-button" id="customers-button">
            Customers
          </button>
        </div>
      </div>

      <h2>Orders</h2>

      <OrdersTable />
      <MembersTable />

      <div className="results">
        <span className="show-results">Show 10 results</span>
        <span className="number">{"< 1 >"}</span>
      </div>
    </div>
  );
}

export default Dashboard;
