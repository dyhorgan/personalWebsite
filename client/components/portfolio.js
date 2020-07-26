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
    let customId = 0
    return (
      <div className="indentStyle portfolioMargin">
        <h1 className="whiteColor">Portfolio</h1>
        <div className="topMargin">
          {projects.map(function(project) {
            return (
              <div key={project.id} className="pad">
                <div className="row">
                  <a href={project.gitUrl} className="large white bold outline">
                    {project.title}
                  </a>
                  <a href={project.gitUrl}>
                    <img src={project.imageUrl} className="picStyle" />
                  </a>
                </div>
                <p className="medium white">{project.description}</p>
                <div className="row">
                  {project.techStack.map(function(tech) {
                    customId += 1
                    return (
                      <div key={customId}>
                        <p className="white">{tech}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
