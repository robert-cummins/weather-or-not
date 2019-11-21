const express = require('express')
const router = express.Router()

const apiRequest = require('superagent')

const url = 'https://www.metaweather.com/api/location/'

router.get('/:id', (req, res) => {
  apiRequest
  .get(url + req.params.id)
  .then(x => res.send(x.body))
})

module.exports = router