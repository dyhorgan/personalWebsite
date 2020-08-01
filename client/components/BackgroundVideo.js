import React from 'react'
import classes from './BackgroundVideo.module.css'
import Vid from './video/BEwKYcD - Imgur.mp4'
const BackgroundVideo = () => {
  const videoSource = 'https://www.w3schools.com/tags/movie.mp4'
  return (
    <div>
      Video Component
      <div className={classes.Container}>
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={videoSource} type="video/mp4" />
          Your Browser does not support the video tag
        </video>
      </div>
    </div>
  )
}

export default BackgroundVideo
