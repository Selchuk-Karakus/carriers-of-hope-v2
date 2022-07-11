const productService = require("./products");
const ordersDAL = require("../dal/ordersDAL");
const memberService = require("./members");

async function getOrders(userId) {

    if (!memberService.isAdmin(userId)) {

      const dbOrders = await ordersDAL.selectOrdersByMemberId(userId)
      
      return Promise.all(
        dbOrders.rows.map(async (dbOrder) => {
          const productList = await productService.getAllProductsByOrderId(dbOrder.id);

          return {
            id: dbOrder.id,
            orderdate: dbOrder.orderdate,
            orderref: dbOrder.orderref,
            products: productList,
          };
        })
      ).then((ordersList) => {
        return ordersList;
      });
    }

  }

module.exports = {
  getOrders
};
