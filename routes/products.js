const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router()

router.post("/products",ProductController.create)
router.put("/id/:id",ProductController.update)
router.delete("/id/:id",ProductController.delete)
router.get("/name/:name",ProductController.getOneByName)

module.exports = router