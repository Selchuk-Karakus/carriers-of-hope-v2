import React from 'react'
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
}

export default Dashboard