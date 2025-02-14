import Product from "../models/product.js";

export async function addProduct(req, res) {
  console.log(req.user);
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
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get products",
    });
  }
}
