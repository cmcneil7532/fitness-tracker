const CreateUserModel = require("../models/usersWorkout");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const e = require("express");

//Desc POST
//Route POST
const loginUser = asyncHandler(async (req, res) => {
  //Check if user is logged already logged iby finding email
  const { email, password } = req.body;
  const user = await CreateUserModel.findOne({ email });
  //Compare the hased hashed passwword in our database to the input password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200);
    res.json({
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
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

  const createUser = await CreateUserModel.create({
    name,
    email: email.toLowerCase(),
    password: hashedPassword,
  });
  //Send data to user
  if (createUser) {
    res.status(201);
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
//Private
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
