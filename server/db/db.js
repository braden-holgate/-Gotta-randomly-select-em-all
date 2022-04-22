const config = require('./knexfile').development
const connection = require('knex')(config)

function getTrainers(db = connection) {
  return db('Trainers').select()
}

function getTrainerById(id, db = connection) {
  return db('Trainers').select().where({ id: id })
}

module.exports = {
  getTrainers,
  getTrainerById,
}
