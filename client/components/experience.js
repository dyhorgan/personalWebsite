import React from 'react'
import axios from 'axios'
export class Experience extends React.Component {
  constructor() {
    super()
    this.state = {
      jobs: []
    }
  }
  async componentDidMount() {
    let {data} = await axios.get('/api/jobs')
    this.setState({jobs: data})
  }
  render() {
    return (
      <div className="margins topMargin">
        <div className="whiteColor large center smallPad">Education</div>
        <div className="white tinyPad myDiv experienceMyDivPadding">
          <h1 className="whiteColor">Fullstack Academy</h1>
          <h3 className="bold">August 2019 – April 2020</h3>
          <div className="bold garamond">
            <ul>
              <li className="medium">
                Immersive Full-Stack Engineering Program – ranked as top-6
                coding bootcamp by Course Report
              </li>
              <li className="medium">
                Selected as 1 of 30 new students out of 300+ applicants,
                completed 200+ hours of pair programming
              </li>
            </ul>
            <p className="medium">
              Proficient: JavaScript, React, Redux, Node.js, Express, Sequelize,
              Webpack, CSS, HTML5, Git
            </p>
            <p className="medium">
              Knowledgeable: PostgreSQL, Excel, MongoDb, Socket.io
            </p>
            <p className="medium">Some Experience: TDD (Mocha, Chai, Enzyme)</p>
          </div>
        </div>

        <div className="white littlePad myDiv experienceMyDivPadding garamond">
          <h1 className="whiteColor">Hamilton College</h1>
          <div>
            <h3 className="bold">August 2013 – June 2017</h3>
            <ul>
              <li className="medium bold">
                Bachelor of Arts in English Literature
              </li>
            </ul>
          </div>
        </div>

        <div className="whiteColor large center smallPad">Work</div>
        <div className="myDiv experienceMyDivPadding">
          {this.state.jobs.map(function(job) {
            return (
              <div key={job.id} className="white">
                <h1 className="whiteColor">{job.title}</h1>
                <div className="garamond">
                  <div>
                    <h2 className="bold">{job.company}</h2>
                    <h2 className="bold">{job.dates}</h2>
                    <ul>
                      {job.description.map(function(bullet) {
                        return <li className="medium bold">{bullet}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="smallHeightPad" />
      </div>
    )
  }
}
