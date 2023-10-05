export const ObjectId = mongoose.Schema.Types.ObjectId;
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  batch: { type: ObjectId, ref: "batch" },
  email: { type: String, trim: true, lowercase: true, required: true },
  address: { type: String },
  feePaid: { type: Number },
  feeRemain: { type: Number },
});

const User = mongoose.model("user", schema);
module.exports = User;
