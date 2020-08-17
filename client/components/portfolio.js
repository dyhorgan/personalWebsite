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
      <div className="indentStyle portfolioMargin topMargin backgroundComp">
        <h1 className="whiteColor subHeaderStyle">Portfolio</h1>
        <div className="topMargin">
          {projects.map(function(project) {
            return (
              <div key={project.id} className="pad">
                <div className="row space-between">
                  <div>
                    <a
                      href={project.gitUrl}
                      className="large white bold outline"
                    >
                      {project.title}
                    </a>
                    <p className="medium white">{project.description}</p>
                    <div className="column">
                      <a
                        href={project.gitUrl}
                        className="white medium smallPad smallTopMargin"
                      >
                        Github Link
                      </a>

                      <a href={project.herokuUrl} className="white medium">
                        Heroku Link
                      </a>
                    </div>
                  </div>

                  <a href={project.herokuUrl}>
                    <img src={project.imageUrl} className="picStyle" />
                  </a>
                </div>

                <hr />
                <div className="row">
                  {project.techStack.map(function(tech) {
                    customId += 1
                    return (
                      <div key={customId}>
                        <p className="white small">{tech}</p>
                      </div>
                    )
                  })}
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
