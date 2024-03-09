import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DiReact, DiNodejs, DiJavascript1, DiGit } from 'react-icons/di'
import { SiPostgresql, SiNextdotjs } from 'react-icons/si'

const TechStack = () => {
  return (
    <Row style={{ paddingBottom: "50px", justifyContent: "center" }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextdotjs />
      </Col>
    </Row>
  )
}

export default TechStack
