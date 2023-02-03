const { ThemeProvider } = require("@aws-amplify/ui-react");
const asyncHandler = require("express-async-handler");
const workoutModel = require("../models/createWorkout");

//Desc Get
//Route GET fitness/goals
const getGoals = asyncHandler(async (req, res) => {
  //find method will grab everything in the query
  const goal = await workoutModel.find();

  res.status(200).json(goal);
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
  const workout = await workoutModel.create({
    workout: req.body.workout,
    sets: req.body.sets,
    reps: req.body.reps,
    weight: req.body.weight,
  });
  res.status(201).json(workout);
});
//Desc UPDATE
//Route PATCH fitness/goals

const updateGoals = asyncHandler(async (req, res) => {
  //Get the goal to update
  const goal = await workoutModel.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await workoutModel.findByIdAndUpdate(
    //Grab the id of the user
    req.params.id,
    //Allow updates to the body
    req.body,
    //Set true
    { new: true }
  );

  res.status(200).json(updatedGoal);
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
