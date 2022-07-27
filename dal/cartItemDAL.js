const pgClient = require("../config/postgres");

//Delete cart-item by product id
async function  deleteCartItemByProductId(productId){
   const cartId =  pool.query('SELECT id FROM cart_item WHERE product_id = $1',[productId] );
   if(cartId){
      return await pool.query('DELETE FROM cart_item WHERE id = $1', [cartId])  
      .then (()=>res.send( `Customer ${customerId} deleted`))
      .catch((error)=>{
          console.log(error)
          res.status(500).json(error);
      })
 
   }
}

 module.exports = deleteCartItemByProductId;

 

  
