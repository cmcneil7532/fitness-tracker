//Model for user to plug in data
const mongoose = require("mongoose");

const createWorkout = mongoose.Schema(
  {
    user: {
      //Create a random object id
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    workout: {
      type: String,
      required: [true, "Please add a workout Ex. Squat, Lunges, or Bench"],
    },
    sets: {
      type: Number,
      required: true,
      unique: true,
      validiate: {
        validator: Number.isInteger,
        message: "Value is not an integer value",
      },
    },
    reps: {
      type: Number,
      required: true,
      unique: true,
      validiate: {
        validator: Number.isInteger,
        message: "Value is not an integer value",
      },
    },
    weight: {
      type: Number,
      required: true,
      unique: true,
      validiate: {
        validator: Number.isInteger,
        message: "Value is not an integer value",
      },
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

module.exports = mongoose.model("workoutModel", createWorkout);
