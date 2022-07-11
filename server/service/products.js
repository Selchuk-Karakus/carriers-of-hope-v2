const productsDAL = require("../dal/productsDAL");

function getAllProductsByOrderId(orderId) {
  return productsDAL.selectProductsByOrderId(orderId).then(res => {
    return res.rows.map((row) => {
      return {
        id: row.id,
        name: row.product_name,
        category: row.category_name,
        quantity: row.quantity,
      };
    });
  });
}


module.exports = {
  getAllProductsByOrderId,
};
