const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    exercises: [{
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }]
})

const Workout = mongoose.model('workout', WorkoutSchema)

module.exports = Workout