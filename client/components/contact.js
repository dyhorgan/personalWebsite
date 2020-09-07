import React from 'react'
import {Motion, spring} from 'react-motion'

export class Contact extends React.Component {
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
            <div className="contactMargins topMargin bold">
              <div>
                <h2 className="whiteColor center large">Contact Me</h2>
                <div className="myDiv welcomeMyDivPadding">
                  <p className="medium white garamond">
                    I am currently open to job opportunities, as well as
                    freelance and contract work.
                  </p>
                  <p className="medium white garamond">
                    Please feel free to reach out with any opportunities or
                    inquiries!
                  </p>
                </div>

                <p className="medium white center garamond">
                  Get in touch: dyhorgan@gmail.com
                </p>
              </div>
              <div className="heightPad" />
            </div>
          </div>
        )}
      </Motion>
    )
  }
}
