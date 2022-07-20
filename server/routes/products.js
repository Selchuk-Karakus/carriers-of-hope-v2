let router = require("express").Router();
let {getAllProducts,getOneProduct,createProduct, deleteOneProduct, updateProductById } = require('../service/products');
let {deleteCartItemByProductId} = require('../service/cartItem');

//getAll
router.get('/', (req, res) => {
  getAllProducts().then(products => {
      res.json(products);
  })
})

//getOne
router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  getOneProduct(productId).then(product => {
      res.json(product[0]);
  })
})


router.post('/', (req, res) => {
  let reqBody= req.body
  createProduct(reqBody).then(product => {
     res.status(201).send({
      message: "Product added successfully!",
      body: {
        product:reqBody
      },
    });
  })
})

router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  deleteCartItemByProductId(productId).then(product => {
    res.status(200).send({ message: 'cart-item deleted successfully!', productId });

  })
  deleteOneProduct(productId).then(product => {
    res.status(200).send({ message: 'Product deleted successfully!', productId });

  })
});

router.put('/:id', (req, res) => {
  let reqBody= req.body;
  const productId = parseInt(req.params.id);
  updateProductById(productId,reqBody).then(product => {
     res.status(201).send({
      message: "Product added successfully!",
      body: {
        product:reqBody
      },
    });
  })
})



module.exports = router; 
