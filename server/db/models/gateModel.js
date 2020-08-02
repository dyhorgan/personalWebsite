const Sequelize = require('sequelize')
const db = require('../db')

const gateModel = db.define('gateModel', {
  unlocked: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = gateModel
