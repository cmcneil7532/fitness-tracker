//Model for user to plug in data
const mongoose = require("mongoose");

const createWorkout = new mongoose.Schema(
  {
    user: {
      //Create a random object id
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    workout: {
      type: String,
      required: [true, "Please add a workout Ex. Squat, Lunges, or Bench"],
    },
    set: {
      type: Number,
      min: 1,
      max: 7,
      required: true,
    },
    repititions: {
      type: Number,
      min: 1,
      required: true,
    },
    weight: {
      type: Number,
      min: 1,
      required: true
    },
    notes: {
      type: String,
      required: false,
    },
  },
  {
    //Create an createdAt and updatedAt automatically
    timestamps: true,
  }
);

module.exports = mongoose.model('workoutModel', createWorkout)