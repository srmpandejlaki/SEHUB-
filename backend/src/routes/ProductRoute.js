const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

// GET all users
router.get("/", ProductController.getProducts);

// POST create user
router.post("/", ProductController.createProduct);

module.exports = router;
