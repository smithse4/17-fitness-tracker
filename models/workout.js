const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter name of exercise",
        },
        duration: {
          type: Number,
          required: "Enter the duration of the exercise",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  opts
);

workoutSchema.virtual("totalTime").get(function () {
  return this.timeToCook + this.timeToPrepare;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
