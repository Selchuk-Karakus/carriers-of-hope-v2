const pgClient = require("../config/postgres");

//getAllProduct
function selectProductAllProducts(){
  return  pgClient.pool.query("SELECT * FROM products")
  
}

//GEtOneProduct
async function  selectOneProductByProductId(productId){
  return await pgClient.pool
  .query('SELECT * FROM products WHERE id=$1', [productId] )

}

//CreateProduct
async function insertProduct(body){
  let  {product_name,category_name, product_status}=body;
  return await pgClient.pool
  .query("INSERT INTO products (product_name, category_name, product_status) VALUES ($1, $2, $3)",
    [product_name, category_name, product_status]
  );
}

// DELETE oneProduct
async function  deleteProductByProductId(productId){
  return await pgClient.pool
  .query('DELETE FROM products WHERE id = $1', [productId] )

}


//PUT REQUEST
async function  updateProductByProductId(id,reqBody){
  let  {product_name,category_name, product_status}=reqBody;
  return await pgClient.pool
  .query(
    "UPDATE products SET product_name = $1, category_name = $2, product_status=$3 WHERE id = $4",
    [product_name, category_name, product_status, id]
  );
}

//Order!
function selectProductsByOrderId(orderId) {
  return pgClient.pool
  .query(
    `SELECT id, ` +
      `product_name, ` +
      `category_name ` +
      `FROM products ` +
      `WHERE id in (SELECT id FROM order_item WHERE order_id = ${orderId})`
  );
};

module.exports = {
  selectProductsByOrderId,
  selectProductAllProducts,
  selectOneProductByProductId,
  insertProduct,
  deleteProductByProductId,
  updateProductByProductId
};
