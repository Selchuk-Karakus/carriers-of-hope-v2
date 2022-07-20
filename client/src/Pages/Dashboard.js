import React from 'react'
<<<<<<< HEAD
import ProductsTable from '../components/ProductsTable'


function Dashboard (){



   return(
      <div>
         <h2>Admin name</h2>
         <button>Orders</button>
         <button>Products</button>
         <button>Customers</button>
      <ProductsTable/>
      </div>
   )
=======
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
>>>>>>> 183e9315aa375d6e8e808b055064877279090b0d
}

export default Dashboard