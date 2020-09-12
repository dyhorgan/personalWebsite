import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Motion, spring} from 'react-motion'

export class Portfolio extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      open: false
    }
  }
  async componentDidMount() {
    let {data} = await axios.get('/api/projects')
    this.setState({projects: data})
    this.setState({open: true})
  }
  render() {
    let {projects} = this.state
    let customId = 0
    return (
      <Motion
        style={{
          currentOpacity: spring(this.state.open ? 1 : 0, {
            stiffness: 140,
            damping: 90
          })
        }}
      >
        {({currentOpacity}) => (
          <div style={{opacity: currentOpacity}}>
            <div className="indentStyle portfolioMargin topMargin">
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
                          <p className="medium white bold outline">
                            {project.description}
                          </p>
                          <div className="column">
                            <a
                              href={project.gitUrl}
                              className="white medium smallPad smallTopMargin outline bold"
                            >
                              Github Link
                            </a>

                            <a
                              href={project.herokuUrl}
                              className="white medium outline bold smallPad"
                            >
                              Heroku Link
                            </a>

                            {project.herokuUrl ===
                            'http://terra-2042.herokuapp.com/' ? (
                              <a
                                href="https://youtu.be/zAJ_c6nxjcs"
                                className="white medium outline bold smallPad"
                              >
                                Video Link
                              </a>
                            ) : (
                              <div />
                            )}
                          </div>
                        </div>
                        {project.herokuUrl ===
                        'http://terra-2042.herokuapp.com/' ? (
                          <a href="https://youtu.be/zAJ_c6nxjcs">
                            <img
                              src={project.imageUrl}
                              className="picStyle terraHeight"
                            />
                          </a>
                        ) : (
                          <a href={project.herokuUrl}>
                            <img src={project.imageUrl} className="picStyle" />
                          </a>
                        )}
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
              <div className="mediumHeightPad" />
            </div>
          </div>
        )}
      </Motion>
    )
  }
}
