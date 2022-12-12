import { Request, Response } from "express";
import storesService from "../services/stores.service";

const createStore = async (req: Request, res: Response): Promise<object> => {
  const store = req.body;
  try {
    const newStore = await storesService.createStore(store);
    return res.status(200).json(newStore);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

const getStores = async (req: Request, res: Response): Promise<object> => {
  try {
    const stores = await storesService.getStores();
    return res.status(200).json(stores);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

const getStore = async (req: Request, res: Response): Promise<object> => {
  const { id } = req.params;
  try {
    const store = await storesService.getStore(id);
    return res.status(200).json(store);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

const updateStore = async (req: Request, res: Response): Promise<object> => {
  const { id } = req.params;
  const body = req.body;
  try {
    const store = await storesService.updateStore(id, body);
    return res.status(200).json(store);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

const deleteStore = async (req: Request, res: Response): Promise<object> => {
  const { id } = req.params;
  try {
    const store = await storesService.deleteStore(id);
    return res.status(200).json(store);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export default {
  createStore,
  getStores,
  getStore,
  updateStore,
  deleteStore,
};
