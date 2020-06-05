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

router.put("/workouts/:id", async (req, res) => {

    try {
        // This is adding exercise based on ID of workout
        const data = req.body;
        const id = req.params.id;
        // console.log(id); 5ecae1acbe6fb6073b2821ed => THIS IS ID OF THE WORKOUT !!!

        // Added to Exercise collection
        const newExercise = await db.Exercise.create(data);
        // Add this into exercises array of workout using id so later can populate
        const updatedWorkOut = await db.Workout.findByIdAndUpdate(id, {
            $push: {
                exercises: newExercise._id
            }
        }, {
            new: true
        });

        return res.json(updatedWorkOut);
    } catch (e) {
        throw e;
    }

});

router.get("/workouts", async (req, res) => {
    try {
        const allWorkout = await db.Workout.find({}).populate("exercises").exec();
        res.json(allWorkout);
    } catch (e) {
        throw e;
    }
});

// ? 
router.get("/workouts/range", async (req, res) => {
    
    try {
        const data = await db.Workout.find({}).populate("exercises").exec();
        return res.json(data);
    } catch (e) {
        throw e;
    }
})

module.exports = router;