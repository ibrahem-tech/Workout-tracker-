var express = require('express');
var router = express.Router();
var path = require("path");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

router.get("/stats", (req,res) => {
    res.sendFile(path.resolve(__dirname + "/../public/stats.html"));
});

router.get("/exercise", (req,res) => {
    res.sendFile(path.resolve(__dirname + "/../public/exercise.html"));
});

module.exports = router;