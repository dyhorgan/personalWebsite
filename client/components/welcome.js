import React from 'react'
import {Link} from 'react-router-dom'
import {Motion, spring} from 'react-motion'

export class Welcome extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  componentDidMount() {
    this.setState({open: true})
  }

  render() {
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
            <div className="margins topMargin">
              <h1 className="center whiteColor outline">
                Freelance Web Developer Based in New York.
              </h1>
              <div className="medium white bold myDiv welcomeMyDivPadding garamond">
                <p>
                  I have a passion for designing and developing seamless
                  experiences and elegant interfaces. From web designs, to
                  full-stack mobile applications, I will be a valuable addition
                  to your next project.{' '}
                </p>
                <p>
                  I have just completed FullStack Academy of Code. FullStack is
                  a 17-week full-time software development bootcamp. Its
                  curriculum covers NodeJS, Express, Relational Databases such
                  as PostgreSQL, React and Redux.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/dylan-horgan/"
                className="center smallTopMargin"
              >
                <img
                  className="profileImage smallTopMargin"
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQH-gt-JHYgShQ/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=KOaHggnlQG5MEoHvxQRVrlvO9uuExEOK1DhpjiVyOBo"
                />
              </a>
              <div className="profileLinks sophFontStyle large randomIndent smallTopMargin">
                <Link to="/portfolio" className="horizontalPad white">
                  Portfolio
                </Link>

                <Link to="/experience" className="horizontalPad white">
                  Experience
                </Link>

                <Link to="/contact" className="horizontalPad white">
                  Contact Me
                </Link>
              </div>
              <div className="heightPad" />
            </div>
          </div>
        )}
      </Motion>
    )
  }
}
