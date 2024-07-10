//CRUD
const Model = require("./subactivitymodel");

const list = async () => {
  return await Model.find();
};
const getById = async (id) => {
  return await Model.findOne({ _id: id });
};
const create = () => {};
const updateById = () => {};
const removeById = () => {};

module.exports = { list, getById, create, updateById, removeById };
