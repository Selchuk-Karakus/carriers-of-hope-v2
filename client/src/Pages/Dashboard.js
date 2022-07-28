import React, {useState,useContext, useEffect}from "react";
import OrdersTable from "../components/OrdersTable";
import CustomersTable from "../components/CustomersTable";
import ProductsTable from "../components/ProductsTable";
import {ProductsContext} from '../Contexts/ProductsContext';
import "../styles/dashboard.scss";
import { CgProfile } from "react-icons/cg";


function Dashboard() {
  const[tableComponent, setTableComponent] = useState('Orders');
  const {productsTable} =  useContext(ProductsContext);

  useEffect(() => {
    if(productsTable)(
      setTableComponent('Products')
    )
  }, [productsTable]);

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
          <button onClick={(e)=>setTableComponent(e.target.innerText)} className={tableComponent==='Orders'?"admin-tab-button active-btn":'admin-tab-button'} id="orders-button">
            Orders
          </button>
        </div>

        <div className="button">
          <button onClick={(e)=>setTableComponent(e.target.innerText)} className={tableComponent==='Products'?"admin-tab-button active-btn":'admin-tab-button'} id="products-button">
            Products
          </button>
        </div>

        <div className="button">
          <button onClick={(e)=>setTableComponent(e.target.innerText)} className={tableComponent==='Customers'?"admin-tab-button active-btn":'admin-tab-button'} id="customers-button">
            Customers
          </button>
        </div>
      </div>

      <h2>{tableComponent}</h2>
      {tableComponent==="Orders"? <OrdersTable/>:
      tableComponent==='Products'? <ProductsTable/>:
                                   <CustomersTable/>
      }

      <div className="results">
        <span className="show-results">Show 10 results</span>
        <span className="number">{"< 1 >"}</span>
      </div>
    </div>
  );
}

export default Dashboard;
