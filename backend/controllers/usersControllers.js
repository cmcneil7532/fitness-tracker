const CreateUserModel = require("../models/usersWorkout");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

//Desc POST
//Route POST
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login User" });
});
//Desc POST
//Route POST
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //Check if all fields exist
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  //Check if the user already exist
  const userExists = await CreateUserModel.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email already exist");
  }
  //Hash Password to prevent text passwords stored in our database
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);

  const createUser = await CreateUserModel.create({
    name,
    email: email.toLowerCase(),
    password: hashedPassword,
  });
  console.log(createUser);
  //Send data to user
  if (createUser) {
    res.status(200);
    res.json({
      name: createUser.name,
      email: createUser.email,
      token: generateToken(createUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  //
});
//Desc Grab the user information
//Route GET
const aboutMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "About User" });
});

//Generate a token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  loginUser,
  registerUser,
  aboutMe,
};
