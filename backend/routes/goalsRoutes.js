const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updataGoals,
  deleteGoals,
} = require("../controllers/goalsController");

module.exports = router;
