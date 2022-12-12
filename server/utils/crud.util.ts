const create = async (model: any, data: object) => {
  const newModel = new model(data);
  const savedModel = await newModel.save();
  return savedModel;
};

const get = async (model: any) => {
  const models = await model.find({});
  return models;
};

const getOne = async (model: any, id: string) => {
  const data = await model.findOne({ _id: id });
  if (!data) {
    return { message: "model not found" };
  }
  return data;
};

const update = async (model: any, id: string, body: object) => {
  const data = await model.findOneAndUpdate(
    {
      _id: id,
    },
    body,
    {
      new: true,
    }
  );
  if (!data) {
    return { message: "model not found" };
  }
  return data;
};

const remove = async (model: any, id: string) => {
  const data = await model.findOneAndRemove({ _id: id });
  if (!data) {
    return { message: "model not found" };
  }
  return data;
};

export default {
  create,
  get,
  getOne,
  update,
  remove,
};
