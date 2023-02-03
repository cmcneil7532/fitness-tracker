const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  aboutMe,
} = require("../controllers/usersControllers");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(aboutMe);

module.exports = router;
