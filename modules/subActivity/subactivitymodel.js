const { Schema, model } = require("mongoose");
const { Schema } = require("../Activity/activitymodel");
const subActivitySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    iscomplete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const subActivity = model("subActivity", subActivitySchema);
module.exports = subActivity;
