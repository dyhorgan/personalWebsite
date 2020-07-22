const router = require('express').Router()
const {Project} = require('../db/models')
module.exports = router

router.get('/', async function(req, res, next) {
  try {
    let projects = await Project.findAll()
    res.json(projects)
  } catch (err) {
    next(err)
  }
})
