import express from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/", addProduct);

productRouter.get("/", getProducts);

productRouter.put("/:key", updateProduct);
productRouter.put("/:key", deleteProduct);

export default productRouter;
