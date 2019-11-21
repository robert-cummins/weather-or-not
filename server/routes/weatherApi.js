const express = require('express')
const router = express.Router()

const apiRequest = require('superagent')

const wellyUrl = 'https://www.metaweather.com/api/location/2351310/'

router.get('/', (req, res) => {
  apiRequest
  .get(wellyUrl)
  .then(x => res.send(x.body))
})

module.exports = router