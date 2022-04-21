const express = require('express')
const router = express.Router()

// const db = require('../db') // TODO: Add file path to the database

// //api/v1/trainers
// router.get('/', (req, res) => {
//   db.getTrainers() //CHECK NAME
//     .then((trainers) => {
//       res.json(trainers)
//     })
//     .catch((err) => {
//       res.status(500).send(err.message)
//     })
// })

module.exports = router
