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
    await axios.post('/api/gateRoute', {unlocked: false})
    let {data} = await axios.get('/api/gateRoute')

    let userGate = data[data.length - 1]
    this.setState({unlocked: userGate.unlocked})

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
    setTimeout(async () => {
      console.log('firing the setTimeout')
      await axios.put('/api/gateRoute', {unlocked: false})
      this.setState({unlocked: false})
    }, 600000)
  }
  render() {
    let {gate, unlocked} = this.state
    console.log('logging in render', gate, unlocked)
    return (
      <div className="backgroundComp">
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
