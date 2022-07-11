const express = require("express");
const router = express.Router();

const { getOrders } = require("../service/orders");

router.get('/', async (req, res) => {
    // const userId = getUserIdFromSession()
    const userId = 2;
    getOrders(userId).then(orders => {
        res.json(orders);
    })
})

router.get('/:id', (req, res) => {
    getOrders(req.params.id).then(orders => {
        res.json(orders);
    })
})

router.post("/", (req, res) => {

});

router.put("/:id", (req, res) => {

});


module.exports = router;