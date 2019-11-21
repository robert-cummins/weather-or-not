const express = require('express')
const router = express.Router()
const db = require('../db/activities')

router.get('/', (req, res) => {
    db.getAllActivities()
    .then(activities => {
        res.json(activities)
    })
})