const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://ashutoshbksgold:ashutoshbksgold@cluster0.qejztmo.mongodb.net/bksmgold"
    );
    console.log("dateabase connected");
  } catch (error) {
    console.log("log: fail to connect db", error);
    return error;
  }
}
module.exports = { connectDb };
