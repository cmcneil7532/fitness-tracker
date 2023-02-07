const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  aboutMe,
} = require("../controllers/usersControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.route("/login").post(protect,loginUser);
router.route("/me").get(protect, aboutMe);

module.exports = router;
