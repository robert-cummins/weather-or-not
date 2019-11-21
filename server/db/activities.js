const config = require('../../knexfile').development
const connection = require('knex')(config)


function getAllActivities(db = connection){
    return db('activities')
}

module.exports = {
    getAllActivities
}