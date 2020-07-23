const router = require('express').Router()
const {Job} = require('../db/models')
module.exports = router

router.get('/', async function(req, res, next) {
  try {
    let jobs = await Job.findAll()
    res.json(jobs)
  } catch (err) {
    next(err)
  }
})
