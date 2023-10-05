export const ObjectId = mongoose.Schema.Types.ObjectId;
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  instructor: { type: ObjectId, ref: "user" },
  fee: { type: Number, required: true },
  discount: { type: Number, required: true },
});

const Batch = mongoose.model("batch", schema);

module.exports = Batch;
