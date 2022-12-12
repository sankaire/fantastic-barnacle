import { Request, Response } from "express";
import productService from "../services/product.service";

const createProductController = async (
  req: Request,
  res: Response
): Promise<object> => {
  const { name, description, price, image, cartegory, countInStock } = req.body;
  try {
    const product = await productService.createProduct(
      name,
      description,
      price,
      image,
      cartegory,
      countInStock
    );
    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

const getProductsController = async (
  req: Request,
  res: Response
): Promise<object> => {
  try {
    const products = await productService.getProducts();
    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

const getProductController = async (
  req: Request,
  res: Response
): Promise<object> => {
  const { id } = req.params;
  try {
    const product = await productService.getProduct(id);
    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

const updateProductController = async (
  req: Request,
  res: Response
): Promise<object> => {
  const { id } = req.params;
  const body = req.body;
  try {
    const product = await productService.updateProduct(id, body);
    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

const deleteProductController = async (
  req: Request,
  res: Response
): Promise<object> => {
  const { id } = req.params;
  try {
    const product = await productService.deleteProduct(id);
    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export default {
  createProductController,
  getProductsController,
  getProductController,
  updateProductController,
  deleteProductController,
};
