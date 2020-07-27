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
