const express = require("express");
const router = express.Router();

const { getOrders, addOrder, modifyOrder } = require("../service/orders");

router.get('/', async (req, res) => {
    // const userId = getUserIdFromSession()
    const userId = 2;
    getOrders(userId).then(orders => {
        res.json(orders);
    })
})

router.get("/:id", (req, res) => {
  // const userId = getUserIdFromSession()
  //   const userId = 2;
  getOrders(req.params.id).then((orders) => {
    res.json(orders);
  });
});

router.post("/", (req, res) => {
  // const userId = getUserIdFromSession()
  const userId = 2;
  addOrder(req.body)
    .then((orderInsertStatus) => {
      res.status(orderInsertStatus.statusCode).json(orderInsertStatus.message);
    })
    .catch((err) => {
      console.log("insert order error: " + err);
      res.status(500);
    });
});

router.put("/", (req, res) => {
  // const userId = getUserIdFromSession()
  const userId = 2;
  modifyOrder(req.body, userId)
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;