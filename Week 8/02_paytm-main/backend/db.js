  const mongoose = require("mongoose");
const uri = process.env.MONGO_URL;
// Connect to MongoDB
mongoose.connect(uri);

  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
  });

  const accountSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    balance: {
      type: Number,
      required: true
    },
  });
  const User = mongoose.model("User", userSchema);
  const Account = mongoose.model("Account", accountSchema);

  module.exports = {
    User,
    Account,
  };
