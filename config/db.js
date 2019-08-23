const mongoose = require("mongoose");
const config = require("config");
const db = process.env.MONGOURI || config.get("mongoURI");

const connectDB = async () => {
  console.log(db);
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
