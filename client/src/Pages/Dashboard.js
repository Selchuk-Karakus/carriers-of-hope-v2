import React from 'react'
import ProductsTable from '../components/ProductsTable'
import OrdersTable from '../components/OrdersTable';

function Dashboard() {
  
   return (
     <div>
       <h2>Admin name</h2>
       <button>Orders</button>
       <button>Products</button>
       <button>Customers</button>
       <ProductsTable/>
       {/* <OrdersTable /> */}
     </div>
   );
}

export default Dashboard