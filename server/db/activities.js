const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = require('knex')(config[env])


function getAllActivities(db = connection){
    return db('activities')
}

module.exports = {
    getAllActivities
}