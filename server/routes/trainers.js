const express = require('express')
const router = express.Router()

const db = require('../db/db')

// api/v1/trainers
router.get('/', (req, res) => {
  db.getTrainers()
    .then((trainers) => {
      res.json(trainers)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const trainer_id = req.params.id

  db.getTrainerById(trainer_id)
    .then((trainer) => {
      console.log(trainer)
      res.json(trainer)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
