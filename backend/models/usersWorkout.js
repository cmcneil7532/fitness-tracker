//Create a user for authentication
const mongoose = require("mongoose");

const createUser = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
  
    },
    confirmPassword: {
      type: String,
      require: [true, "Password must match"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CreateUserModel', createUser);