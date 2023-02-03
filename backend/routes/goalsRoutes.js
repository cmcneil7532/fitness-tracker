const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalsController");
//Setting routes and methods
router.route('/').get(getGoals)
router.route('/').post(setGoals)
router.route('/:id').patch(updateGoals)
router.route('/:id').delete(deleteGoals)



module.exports = router;
