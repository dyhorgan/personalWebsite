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
      <div className="margins topMargin pad">
        <div className="whiteColor large center">Education</div>
        <div className="white">
          <h1 className="whiteColor">Fullstack Academy</h1>
          <div className="outline">
            <h3>August 2019 – April 2020</h3>
            <p className="medium">
              -Immersive Full-Stack Engineering Program – ranked as top-6 coding
              bootcamp by Course Report
            </p>
            <p className="medium">
              -Selected as 1 of 30 new students out of 300+ applicants,
              completed 200+ hours of pair programming
            </p>
          </div>
        </div>

        <div className="white littlePad">
          <h1 className="whiteColor">Hamilton College</h1>
          <div className="outline">
            <h3>August 2013 – June 2017</h3>
            <p className="medium">-Bachelor of Arts in English Literature</p>
          </div>
        </div>

        <div className="whiteColor large center">Work</div>
        {this.state.jobs.map(function(job) {
          return (
            <div key={job.id} className="white">
              <h1 className="whiteColor">{job.title}</h1>
              <div className="outline">
                <h2>{job.company}</h2>
                <h3>{job.dates}</h3>
                {job.description.map(function(bullet) {
                  return <p className="medium">- {bullet}</p>
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
