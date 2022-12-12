import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  cartegory: {
    type: String,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
