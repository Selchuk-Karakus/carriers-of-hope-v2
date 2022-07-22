const productsDAL = require("../dal/productsDAL");

function getAllProductsByOrderId(orderId) {
  return productsDAL.selectProductsByOrderId(orderId).then(res => {
    return res.rows.map((row) => {
      return {
        id: row.id,
        name: row.product_name,
        category: row.category_name,
      };
    });
  });
}

//GetAll
async function getAllProducts() {
  try {
    const {rows} = await productsDAL.selectProductAllProducts();
    return rows;
  } catch (error) {
    console.log(error)
  }
}

// GetOne
async function getOneProduct(id){
  try {
    const {rows}  = await productsDAL.selectOneProductByProductId(id);
    return rows 
  } catch (error) {
    console.log(error)
  }
}

// create
async function createProduct(body){
  try {
    const {rows} = await productsDAL.insertProduct(body)
    return rows;
  } catch (error) {
    console.log(error)
  }  
};

// DELETE oneProduct
async function deleteOneProduct(id){
  try {
    const {rows}  = await productsDAL.deleteProductByProductId(id);
    console.log(rows)
    return rows 

  } catch (error) {
    console.log(error)
  }
}


// DELETE oneProduct
async function updateProductById(id,reqBody){
  try {
    const {rows}  = await productsDAL.updateProductByProductId(id,reqBody);
    console.log(rows)
    return rows;
  } catch (error) {
    console.log(error)
  }
}





module.exports = {
  getAllProductsByOrderId,
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteOneProduct,
  updateProductById
};
