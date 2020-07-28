import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {Gate} from './components/gate'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      urlString: 'blah'
    }
  }
  componentDidMount() {
    let url = window.location.href
    console.log('logging url', url)
    let endUrl = url.slice(url.length - 5, url.length - 1)
    this.setState({urlString: endUrl})
  }

  render() {
    let {urlString} = this.state
    return (
      <div>
        {urlString !== '080/' && urlString !== '8080' ? (
          <div>
            <Navbar />
            <Routes />
          </div>
        ) : (
          <Gate />
        )}
      </div>
    )
  }
}

export default App
