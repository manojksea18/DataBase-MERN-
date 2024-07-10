const Model = require("./activitymodel");

//CRUD

const create = async (payload) => {
  return await Model.create(payload);
};

const list = async () => {
  return await Model.find();
};
const getById = (id) => {};
const updateById = (id, payload) => {};
const removeById = (id) => {};
module.exports = { create, list, getById, updateById, removeById };
