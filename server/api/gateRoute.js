const router = require('express').Router()
const {gateModel} = require('../db/models')
module.exports = router

router.get('/', async function(req, res, next) {
  try {
    let gateObj = await gateModel.findAll()

    res.json(gateObj)
  } catch (err) {
    next(err)
  }
})

router.put('/', async function(req, res, next) {
  try {
    console.log('hitting the right route')
    let gateArr = await gateModel.findAll()
    let newThing = await gateArr[0].update(req.body)
    res.json(newThing)
  } catch (err) {
    next(err)
  }
})