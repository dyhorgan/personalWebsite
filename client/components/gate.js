import React, {useState} from 'react'
import axios from 'axios'
import {Player} from 'video-react'
// import BackgroundVideo from './BackgroundVideo'
// import classes from './BackgroundVideo.module.css'
export class Gate extends React.Component {
  render() {
    const videoSource = 'https://imgur.com/a/6lmSnW3'

    return (
      <div className="outline gateBackground">
        {/* <div className={classes.Container}>
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={videoSource} type="video/mp4" />
          Your Browser does not support the video tag
        </video>
        
        </div> */}
        <h1 className="center white huge swordScriptStyle">Dylan Horgan</h1>
        <h1 className="center white sophFontStyle very-large">
          Fullstack Software Engineer
        </h1>
        <a
          href="http://localhost:8080/"
          className="white center large sophFontStyle"
          onClick={event => {
            this.props.changeFunc(event)
            this.props.unlockGate()
          }}
        >
          Enter
        </a>
      </div>
    )
  }
}
