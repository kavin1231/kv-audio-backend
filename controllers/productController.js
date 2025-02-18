import Product from "../models/product.js";
import { isItAdmin } from "./userController.js";

export async function addProduct(req, res) {
  if (req.user == null) {
    req.status(401).json({
      message: "Please login and try again",
    });
    return;
  }
  if (req.user.role != "admin") {
    res.status(403).json({
      message: "you are not authorized to perform this action",
    });
    return;
  }
  const data = req.body;
  const newProduct = new Product(data);
  newProduct;
  try {
    await newProduct.save();
    res.json({
      message: "Product addedd successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Product addition failed",
    });
  }
}
export async function getProducts(req, res) {
  try {
    if (isItAdmin(req)) {
      const products = await Product.find();
      res.json(products);
      return;
    } else {
      const products = await Product.find({ availability: true });
      res.json(products);
      return;
    }
  } catch (e) {
    res.status(500).json({
      message: "Failed to get products",
    });
  }
}
export async function updateProduct(req, res) {
  try {
    if (isItAdmin(req)) {

      const key=req.params.key;

      const data=req.body;

      await Product.updateOne({key:key},data)

      res.json({
        message:"Product updated successfully"
      })
      return;

    } else {
      res.status(403).json({
        messege: "You are not authorized person to perform this action",
      });
    }
  } catch (e) {
    res.status(500).json({
      message: "Failed to update product",
    });
  }
}
