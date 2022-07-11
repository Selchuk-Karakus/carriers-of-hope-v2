let router = require("express").Router();
let products = require('../dal/productsDAL');

  router.post("/", products.createProduct); // Create a new Collection
  router.get("/", products.getAllProducts);  // Retrieve all Collections
  router.get("/:id", products.getOneProduct);  // Retrieve a single Collection with id
  router.put("/:id", products.updateProduct);  // Update a Collection with id
  router.delete("/:id", products.deleteProduct);  // Delete a Collection with id

module.exports = router; 
