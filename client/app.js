import React from 'react'
import axios from 'axios'
import {Navbar} from './components'
import Routes from './routes'
import {Gate} from './components/gate'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gate: true,
      unlocked: false
    }
    this.changeFunc = this.changeFunc.bind(this)
    this.unlockGate = this.unlockGate.bind(this)
  }
  async componentDidMount() {
    let {data} = await axios.get('/api/gateRoute')
    console.log('logging in componentDidMount', data[0].unlocked)
    this.setState({unlocked: data[0].unlocked})

    let url = window.location.href
    let endUrl = url.slice(url.length - 5, url.length - 1)
    if (endUrl !== '080/' && endUrl !== '8080') {
      this.setState({gate: true})
    }
  }
  changeFunc(event) {
    event.preventDefault()
    this.setState({gate: false})
  }
  async unlockGate() {
    await axios.put('/api/gateRoute', {unlocked: true})
    this.setState({unlocked: true})
    setTimeout(() => {
      console.log('firing the setTimeout')
      this.setState({unlocked: false})
    }, 600000)
  }
  render() {
    let {gate, unlocked} = this.state
    console.log('logging in render', unlocked)
    return (
      <div>
        {unlocked ? (
          <div>
            <Navbar />
            <Routes />
          </div>
        ) : (
          <Gate changeFunc={this.changeFunc} unlockGate={this.unlockGate} />
        )}
      </div>
    )
  }
}

export default App
