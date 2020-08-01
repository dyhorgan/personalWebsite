import React, {useState} from 'react'
// import BackgroundVideo from './BackgroundVideo'
// import classes from './BackgroundVideo.module.css'
export const Gate = props => {
  const videoSource = 'https://imgur.com/a/6lmSnW3'
  return (
    <div className="margins">
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
        onClick={props.changeFunc}
      >
        Enter
      </a>
    </div>
  )
}
