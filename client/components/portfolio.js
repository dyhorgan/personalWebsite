import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export class Portfolio extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }
  async componentDidMount() {
    let {data} = await axios.get('/api/projects')
    this.setState({projects: data})
  }
  render() {
    let {projects} = this.state

    return (
      <div>
        Portfolio
        {projects.map(function(project) {
          return (
            <div key={project.id}>
              <div className="column">
                <a href={project.gitUrl}>{project.title}</a>
                <img src={project.imageUrl} className="picStyle" />
              </div>
              <p>{project.description}</p>
              <div className="row">
                {project.techStack.map(function(tech) {
                  return <p>{tech}</p>
                })}
              </div>
              <p />
            </div>
          )
        })}
      </div>
    )
  }
}
