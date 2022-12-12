import Product from "../schemas/Products";

const createProduct = async (
  name: string,
  description: string,
  price: number,
  image: string,
  cartegory: string,
  countInStock: number
): Promise<object> => {
  const newProduct = new Product({
    name: name,
    description: description,
    price: price,
    image: image,
    cartegory: cartegory,
    countInStock: countInStock,
  });
  const product = await newProduct.save();
  return product;
};
const getProducts = async (): Promise<object> => {
  const products = await Product.find({});
  return products;
};
const getProduct = async (id: string): Promise<object> => {
  const product = await Product.findOne({ _id: id });
  if (!product) {
    return { message: "product not found" };
  }
  return product;
};
const updateProduct = async (id: string, body: object): Promise<object> => {
  const product = await Product.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  if (!product) {
    return { message: "product not found" };
  }
  return product;
};
const deleteProduct = async (id: string): Promise<object> => {
  const product = await Product.findOneAndRemove({ _id: id });
  if (!product) {
    return { message: "product not found" };
  }
  return product;
};

export default {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
