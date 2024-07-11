//CRUD
const Model = require("./subactivitymodel");
const activitymodel = require("../Activity/activitymodel");

const list = async () => {
  return await Model.find();
};
const getById = async (id) => {
  return await Model.findOne({ _id: id });
};
const create = async (payload) => {
  const { activity } = payload;
  const activityData = Model.findOne({ _id: activity });
  if (!activityData) throw new Error("Activity not found");
  return await Model.create(payload);
};
const updateById = () => {};
const removeById = () => {};

module.exports = { list, getById, create, updateById, removeById };
