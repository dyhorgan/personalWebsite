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
    console.log('logging jobs', this.state.jobs)
    return (
      <div>
        {this.state.jobs.map(function(job) {
          return (
            <div key={job.id}>
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <h4>{job.dates}</h4>
              {job.description.map(function(bullet) {
                return <p>- {bullet}</p>
              })}
            </div>
          )
        })}
      </div>
    )
  }
}
