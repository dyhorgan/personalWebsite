import React from 'react'

export const Welcome = () => {
  return (
    <div className="margins topMargin">
      <h1 className="center whiteColor">
        Freelance Web Developer Based in New York.
      </h1>
      <div className="medium white">
        <p>
          I have a passion for designing and developing seamless experiences and
          elegant interfaces. From web designs, to full-stack mobile
          applications, I will be a valuable addition to your next project.{' '}
        </p>
        <p>
          I have just completed FullStack Academy of Code. FullStack is a
          17-week full-time software development bootcamp. Its curriculum covers
          NodeJS, Express, Relational Databases such as PostgreSQL, React and
          Redux.
        </p>
      </div>
      <div className="center">
        <img
          className="profileImage"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFvMD9TKVbZ0A/profile-displayphoto-shrink_400_400/0?e=1601510400&v=beta&t=fkH31HTZ6yn5wTI7_AFE78PWmdKK-Lwb7wA4VuURYUM"
        />
      </div>
    </div>
  )
}
