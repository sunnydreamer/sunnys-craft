const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  img: {
    type: String,
    default:
      "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3-1536x1536.png",
  },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
