'use strict'

const db = require('../server/db')
const {User, Project, Job, gateModel} = require('../server/db/models')

let projects = [
  {
    title: 'StreamGuide',
    gitUrl: 'https://github.com/dyhorgan/StreamGuide',
    herokuUrl: 'https://streamguide.herokuapp.com/allMovies',
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
    herokuUrl: 'http://terra-2042.herokuapp.com/',
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
    herokuUrl: 'https://green-shopper.herokuapp.com/',
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
let gateBool = {
  unlocked: false
}
let jobs = [
  {
    company: 'PuppySpot',
    title: 'Sales Specialist',
    description: [
      'Functioned as sales rep for ~$800M start-up that helps place puppies with caring families across the United States',
      'Achieved sales of $40,000 worth of pets per month, handling all aspects of the sales process from negotiating with breeders, marketing to customers, and processing sales transactions',
      'Managed relationships with 300+ customers monthly and interacted with a national network of pre-vetted ethical breeders'
    ],
    dates: 'January 2019 – April 2019'
  },
  {
    company: 'RYU',
    title: 'Sales Connector',
    description: [
      'Worked with a team of 10 employees to launch Brooklyn extension of high-end North American retailer, Respect Your  Universe',
      'Managed store inventory and deliveries, assisted customers throughout sales process, and operated various POS systems'
    ],
    dates: 'November 2018 – April 2019'
  },
  {
    company: 'OmniFan',
    title: 'Social Media Intern',
    description: [
      'Created content for a New York Knicks-centered web portal. (essays, commentary, and embedded graphics)',
      'Posted content on Instagram account intended to boost site traffic'
    ],
    dates: 'June 2018 - December 2018'
  },
  {
    company: 'Foundry Literary + Media',
    title: 'Intern',
    description: [
      'Evaluated manuscript pipeline to identify opportunities for signing new authors and commissioning publications',
      'Created detailed reports for agents, laying out manuscript strengths and assessing potential value of signing manuscript author'
    ],
    dates: 'September 2017 – December 2017'
  }
]

async function seed() {
  await db.sync({force: true})

  for (let i = 0; i < projects.length; i++) {
    let project = projects[i]
    await Project.create(project)
  }
  for (let i = 0; i < jobs.length; i++) {
    let job = jobs[i]
    await Job.create(job)
  }
  await gateModel.create(gateBool)
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
