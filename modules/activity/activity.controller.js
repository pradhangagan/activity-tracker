//CRUD
const Model = require("./activity.model");
const create = async (payload) => {
  return await Model.create(payload);
};

/*
const getAll = async () => {
  //aggregation pipeline
  return await Model.aggregate([
    {
      $lookup: {
        from: "subactivities",
        localField: "_id",
        foreignField: "activity",
        as: "subactivities",
      },
    },
  ]);
};
*/

const list = async () => {
  return await Model.find();
};

const getById = async (id) => {
  return await Model.findone({ _id: id });
};

const updateById = async (id, payload) => {
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
  //return await Model.findOneAndUpdate({ _id: id }, payload);
};

const removeById = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, list, getAll, getById, updateById, removeById };
