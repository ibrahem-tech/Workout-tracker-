var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

router.post("/workouts", async (req, res) => {
   
    try {
        const data = req.body;
        const newWorkout = await db.Workout.create(data);
        return res.json(newWorkout);
    } catch (e) {
        throw e;
    }
});