const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const { 
  getOrders,
  getOrderById,
  addOrder,
  modifyOrder} = require("../service/orders");

router.get('/', auth, async (req, res) => {
    const userObj = req.user; //{id: number, email: string, isAdmin: boolean}
    getOrders(userObj)
      .then((orders) => {
        res.json(orders);
      })
      .catch((err) => {
        console.log("get orders error: " + err);
        res.status(500);
      });
})

router.get("/:id", auth, (req, res) => {
  const userObj = req.user; //{id: number, email: string, isAdmin: boolean}
  const orderId = req.params.id
  getOrderById(userObj, orderId)
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log("get order by id error: " + err);
      res.status(500);
    });
});

router.post("/", auth, (req, res) => {
  const userId = req.user.id;
  addOrder(req.body)
    .then((orderInsertStatus) => {
      res.status(orderInsertStatus.statusCode).json(orderInsertStatus.message);
    })
    .catch((err) => {
      console.log("insert order error: " + err);
      res.status(500);
    });
});

router.put("/", auth, (req, res) => {
  const userId = req.user.id;
  modifyOrder(req.body, userId)
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;