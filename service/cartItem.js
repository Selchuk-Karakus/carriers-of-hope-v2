const cartItemDal = require("../dal/cartItemDAL");


async function deleteCartItem(id){
   
   try {
     const {rows}  = await cartItemDal.deleteCartItemByProductId(id);
     console.log(rows)
     return rows 
 
   } catch (error) {
     console.log(error)
   }
 }


 module.exports = deleteCartItem;
 