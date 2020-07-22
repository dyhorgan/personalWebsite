'use strict'

const db = require('../server/db')
const {User, Project} = require('../server/db/models')

let projects = [
  {
    title: 'StreamGuide',
    gitUrl: 'https://github.com/dyhorgan/StreamGuide',
    imageUrl: 'https://i.imgur.com/zbJtChx.png',
    description:
      'Tool for filtering through the libraries of streaming services.',
    techStack: [
      'React',
      'Express',
      'Sequelize',
      'Node.js',
      'PostgreSQL',
      'Materialize.CSS'
    ]
  },
  {
    title: 'TERRA 2042',
    gitUrl: 'https://github.com/MADE-Game/TERRA2042',
    imageUrl:
      'https://raw.githubusercontent.com/MADE-Game/TERRA2042/master/public/images/logo.png',
    description: 'Online card game',
    techStack: [
      'React',
      'Express',
      'MongoDb',
      'Node.js',
      'Socket.io',
      'Google OAuth',
      'React-DnD'
    ]
  },
  {
    title: 'GreenShopper',
    gitUrl: 'https://github.com/Green-Shopper/GreenShopper',
    imageUrl: 'https://i.imgur.com/MO1jzAn.png',
    description: 'E-commerce site for selling potted plants.',
    techStack: [
      'React',
      'React-Redux',
      'Express',
      'Sequelize',
      'Node.js',
      'Postgres',
      'Google OAuth',
      'Materialize CSS'
    ]
  }
]

async function seed() {
  await db.sync({force: true})

  for (let i = 0; i < projects.length; i++) {
    let project = projects[i]
    await Project.create(project)
  }

  console.log(`seeded successfully`)
  // db.close()
}
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
