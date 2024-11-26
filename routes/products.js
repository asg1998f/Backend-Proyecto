const express = require("express");
const ProductController = require("../controllers/ProductController");
const { authentication } = require("../middleware/authentication");
const router = express.Router()

router.post("/products",authentication, ProductController.create)
router.put("/id/:id",authentication,ProductController.update)
router.delete("/id/:id",authentication,ProductController.delete)
router.get("/name/:name",ProductController.getOneByName)
router.get("/getAll",ProductController.getAll)

module.exports = router