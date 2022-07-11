const pgClient = require('../config/db')

exports.getAllProducts= (req, res) =>{
  pgClient.query('SELECT * FROM products' )
  .then ((result)=>res.json(result.rows))
  .catch((error)=>{
      console.log(error)
      res.status(500).json(error);
  })
}

exports.getOneProduct= (req, res) =>{
  let paramId = req.params.id;
  pgClient.query('SELECT * FROM products WHERE id=$1', [paramId] )
  .then ((result)=>res.json(result.rows))
  .catch((error)=>{
      console.log(error)
      res.status(500).json(error);
  })
}

exports.createProduct= (req, res) =>{
  let  {product_name,category_name}=req.body;
  for (let key in req.body) {
    if (!req.body[key]) {
      return res.status(400).send("Please fill in all the details");
    }
  }
  
  pgClient
    .query(
      "INSERT INTO products (product_name, category_name) VALUES ($1,$2)",
      [ product_name,category_name]
    )
    .then(() => res.send("Successful" ))
    .catch((error) => console.log(error));
};

// DELETE REQUEST
exports.deleteProduct = (req, res) =>{
  let paramId = req.params.id;
  pgClient.query('DELETE FROM products WHERE id = $1', [paramId])  
  .then (()=>res.send(`Product ${paramId} deleted`))
  .catch((error)=>{
      console.log(error)
      res.status(500).json(error);
  })
};

//PUT REQUEST
exports.updateProduct=(req, res)=> {
  let paramId = req.params.id;
  let {product_name,category_name}=req.body;
  pgClient.query('UPDATE products SET product_name =$1, category_name= $2 WHERE id = $3',
            [product_name,category_name, paramId])  
  .then (()=>{
        res.json( `Products ${paramId} updated`)
        console.log( `Products ${paramId} updated`)
  }
        )
  .catch((error)=>{
        console.log(error)
        res.status(500).json(error);
})
};

