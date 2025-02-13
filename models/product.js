import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  key:{
    type: String,
    required: true,
    unique:true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Number,
    required: true,
    default:"uncategorized"
  },
  dimensions: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  availability: {
    type: Number,
    required: true,
    default:true,
  },
});
const Product = mongoose.model("Product", productSchema);

export default Product;
