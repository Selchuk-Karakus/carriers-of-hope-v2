import React from 'react'
import OrdersTable from '../components/OrdersTable';

function Dashboard() {
  
   return (
     <div>
       <h2>Admin name</h2>
       <button>Orders</button>
       <button>Products</button>
       <button>Customers</button>
       <OrdersTable />
     </div>
   );
}

export default Dashboard