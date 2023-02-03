const loginUser = (req, res) => {
  res.status(200).json({ message: "Login User" });
};
const registerUser = (req, res) => {
  res.status(200).json({ message: "Register User" });
};
const aboutMe = (req, res) => {
  res.status(200).json({ message: "About User" });
};

module.exports = {
  loginUser,
  registerUser,
  aboutMe,
};
