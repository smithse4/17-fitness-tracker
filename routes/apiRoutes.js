const Workout = require("../models/workout.js");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then((allWorkouts) => {
        res.json(allWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
      .then((createdWorkout) => {
        res.json(createdWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate(params.id,
        { $push: { exercises: body }},
        { new: true, runValidators: true })
      .then((updatedWorkout) => {
        res.json(updatedWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json(err);
      });
  });

};
