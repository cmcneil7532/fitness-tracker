const asyncHandler = require("express-async-handler");

//Desc Get
//Route GET fitness/goals
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
});
//Desc'Set
//Route'POST fitness/goals
const setGoals = asyncHandler(async (req, res) => {
  if (
    !req.body.reps ||
    !req.body.workout ||
    !req.body.sets ||
    !req.body.weight
  ) {
    res.status(400);
    throw new Error("Please add all specified fields");
  }
  res.status(200).json({ message: "Set goal" });
});
//Desc UPDATE
//Route PATCH fitness/goals

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "UPDATE goals",
  });
});
//Desc DELETE
//Route DELETE fitness/goals
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "DELETE goals",
  });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
