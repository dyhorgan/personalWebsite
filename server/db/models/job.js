const Sequelize = require('sequelize')
const db = require('../db')

const Job = db.define('job', {
  company: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  dates: {
    type: Sequelize.STRING
  }
})

module.exports = Job
