const express = require("express")
const OrderController = require("../controllers/OrderController")
const router = express.Router()

router.post("/orders",OrderController.create)

module.exports = router