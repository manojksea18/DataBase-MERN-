const { Schema, model } = require("mongoose");
const activitiesSchema = new Schema(
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
const Activity = model("Activity", activitiesSchema);
module.exports = Activity;
