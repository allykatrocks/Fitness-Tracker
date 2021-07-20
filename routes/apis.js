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

router.put("/workouts", async (req, res) => {
  res.send("success");
});

router.post("/workouts", async (req, res) => {
  res.send("success");
});

router.get("/workouts/range", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]).sort({id: -1}).limit(7)
    console.log(workouts);
    res.json(workouts);
  } catch (err) {
    res.json(err);
  }
});
module.exports = router;
