const router = require("express").Router();
const { Workout } = require("../models");

router.get("/workouts", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]);
    console.log(workouts);
    res.json(workouts);
  } catch (err) {
    res.json(err);
  }
});

router.put("/workouts/:id", async (req, res) => {
  try {
    const addWorkout = await Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, {new: true, runValidators: true})
    res.json(addWorkout);
  } catch (err) {
    res.status(500).json(err)
  }

});

router.post("/workouts", async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body)
    res.json(newWorkout);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get("/workouts/range", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]).sort({_id: -1}).limit(7)
    console.log(workouts);
    res.json(workouts);
  } catch (err) {
    res.json(err);
  }
});
module.exports = router;
