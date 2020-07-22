const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gitUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  techStack: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Project
