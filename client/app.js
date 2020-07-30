import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {Gate} from './components/gate'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gate: true
    }
    this.changeFunc = this.changeFunc.bind(this)
  }
  componentDidMount() {
    let url = window.location.href
    console.log('logging url', url)
    let endUrl = url.slice(url.length - 5, url.length - 1)
    if (endUrl !== '080/' && endUrl !== '8080') {
      this.setState({gate: true})
    }
  }
  changeFunc() {
    console.log('firing')
    this.setState({gate: false})
  }

  render() {
    let {gate} = this.state
    return (
      <div>
        {!gate ? (
          <div>
            <Navbar />
            <Routes />
          </div>
        ) : (
          <Gate changeFunc={this.changeFunc} />
        )}
      </div>
    )
  }
}

export default App
