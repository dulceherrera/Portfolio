import React from 'react'
import Typewriter from 'typewriter-effect'


const Type = () => {
  return (
    <Typewriter
      options = {{
        strings: [
          "Full Stack Web Developer",
          "Front end",
          "Back end",
          "Chemical Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
