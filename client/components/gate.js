import React, {useState} from 'react'
import axios from 'axios'
//  <video id="background-vido" loop muted autoPlay>
//             <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
//             <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" />

//             Your browser does not support the video tag.
//         </video>
export class Gate extends React.Component {
  render() {
    return (
      <div className="outline gateBackground">
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
