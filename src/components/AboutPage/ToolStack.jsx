import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SiVisualstudiocode, SiSlack, SiMacos, SiVercel, SiPostman } from 'react-icons/si'

const ToolStack = () => {
  return (
    <Row style={{ paddingBottom: "50px", justifyContent: "center" }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman />
      </Col>
    </Row>
  )
}

export default ToolStack
