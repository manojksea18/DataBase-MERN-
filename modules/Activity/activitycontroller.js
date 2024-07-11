const Model = require("./activitymodel");

//CRUD

const list = async () => {
  return await Model.find();
};
const getAll = async (payload) => {
  const { status } = payload;
  const query = [];
  if (status) {
    query.push({
      $match: {
        iscompleted: status === "pending" ? false : true,
      },
    });
  }
  query.push({
    $lookup: {
      from: "subactivities",
      localField: "_id",
      foreignField: "activity",
      as: "subactivities",
    },
  });

  return await Model.aggregate(query);
};

const getById = async (id) => {
  return await Model.findOne({ _id: id });
};
const create = async (payload) => {
  return await Model.create(payload);
};

const updateById = async (id, payload) => {
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};
const removeById = async (id) => {
  return await Model.deleteOne({ _id: id });
};
module.exports = { create, getAll, list, getById, updateById, removeById };
