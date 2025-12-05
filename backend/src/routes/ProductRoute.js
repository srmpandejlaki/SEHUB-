import express from "express";
import ProductController from "../controllers/ProductController.js";

const routerProducts = express.Router();

routerProducts.get("/", ProductController.getProducts);
routerProducts.post("/", ProductController.createProduct);
routerProducts.put("/:id_product", ProductController.updateProduct);
routerProducts.delete("/:id_product", ProductController.deleteProduct);
routerProducts.delete("/", ProductController.deleteAllProduct);

export default routerProducts;
