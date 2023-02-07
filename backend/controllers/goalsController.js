const asyncHandler = require("express-async-handler");
const workoutModel = require("../models/createWorkout");

//Desc Get
//Route GET fitness/goals
const getGoals = asyncHandler(async (req, res) => {
  //
  const goal = await workoutModel.find({user: req.user.id});
  console.log(goal);

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
  //Uploaded to mongoDB
  const workout = await workoutModel.create({
    workout: req.body.workout,
    sets: req.body.sets,
    reps: req.body.reps,
    weight: req.body.weight,
    notes: req.body.notes,
    user: req.user.id,
  });
  res.status(201).json(workout);
});
//Desc UPDATE
//Route PATCH fitness/goals
const updateGoals = asyncHandler(async (req, res) => {
  //Get the goal to update
  const goal = await workoutModel.findById(req.params.id);
  //check the id in the path route
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // If there is no user found
  if (!req.user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(400);
    throw new Error("User not allowed");
  }
  const updateGoals = await workoutModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateGoals);
});
//Desc DELETE
//Route DELETE fitness/goals
const deleteGoals = asyncHandler(async (req, res) => {
  //grab the goal by the id
  const goal = await workoutModel.findById(req.params.id);
  //If goal isnt present throw an err
  if (!goal) {
    res.status(400);
    throw new Error("User not found");
  }
  //if Goal exist remove the document
  await goal.remove();
  res.status(200).json({
    message: "Goal deleted",
  });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
