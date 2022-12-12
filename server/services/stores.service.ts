import Store from "../schemas/Stores.schema";
import crudUtil from "../utils/crud.util";

const createStore = async (store: object) => {
  return await crudUtil.create(Store, store);
};

const getStores = async () => {
  return await crudUtil.get(Store);
};

const getStore = async (id: string) => {
  return await crudUtil.getOne(Store, id);
};

const updateStore = async (id: string, store: object) => {
  return await crudUtil.update(Store, id, store);
};

const deleteStore = async (id: string) => {
  return await crudUtil.remove(Store, id);
};

export default {
  createStore,
  getStores,
  getStore,
  updateStore,
  deleteStore,
};
