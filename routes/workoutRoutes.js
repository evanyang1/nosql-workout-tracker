const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => 
    Workout.find()
        .then(workout => res.json(workout))
        .catch(e => console.error(e))
)

router.post('/workouts', (req, res) => 
    Workout.create(req.body)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
)

module.exports = router