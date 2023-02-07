const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalsController");
const { protect } = require("../middleware/authMiddleware");
//Setting routes and methods
router.route("/").get(protect, getGoals);
router.route("/").post(protect, setGoals);
router.route("/:id").patch(protect, updateGoals);
router.route("/:id").delete(protect, deleteGoals);

module.exports = router;
