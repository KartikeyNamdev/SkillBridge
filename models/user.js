const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://kartikeynamdev:vinayak2003@mycluster.hjnalxi.mongodb.net/"
// );

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "educator", "admin"],
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
