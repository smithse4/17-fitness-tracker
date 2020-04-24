const Workout = require("../models/workout.js");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then((allWorkouts) => {
        res.json(allWorkouts);
      })
      // populate
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(req.body);
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
    Workout.find({}).limit(7)
      .then((data) => {
        res.json(data);
      })
      // throw a popopulat
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log('blahblah', body)
    // add new exercise
    // then push the id of the new exercise into the workout exercise array 
    // then you send omethng
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
