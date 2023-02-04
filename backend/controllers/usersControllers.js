const CreateUserModel = require("../models/usersWorkout");

//Desc POST
//Route POST
const loginUser = (req, res) => {
  res.status(200).json({ message: "Login User" });
};
//Desc POST
//Route POST
const registerUser = async (req, res) => {
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
  //If success
  

};
//Desc Grab the user information
//Route GET
const aboutMe = (req, res) => {
  res.status(200).json({ message: "About User" });
};

module.exports = {
  loginUser,
  registerUser,
  aboutMe,
};
