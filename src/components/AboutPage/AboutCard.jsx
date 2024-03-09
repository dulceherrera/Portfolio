import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

const AboutCard = () => {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className='purple'>Dulce Herrera. </span>
            I was born in <span className='purple'> Durango, Mexico</span>, but I have lived
            in <span className='purple'>California, USA</span> for the last 5 years.
            <br />
            I am currently studying at <span className='purple'> Academlo</span>
            <br />
            <br />
            Besides coding, there are other activities that I love to do.
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight />Travelling ✈️
            </li>
            <li className='about-activity'>
              <ImPointRight /> Going to Disneyland 🐭
            </li>
            <li className='about-activity'>
              <ImPointRight /> Dancing 💃🏻
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
