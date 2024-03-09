import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../components/Particle'
import Type from '../components/HomePage/Type'
import Home2 from '../components/HomePage/Home2'
import developerLogo from '../assets/developer.png'

const HomePage = () => {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There! {" "}
                <span className='wave' role="img" aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>
              <h1 className='heading-name'>
                I'M
                <strong className='main-name'> DULCE HERRERA</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                alt='developer-img'
                className='img-fluid logo-home1'
                style={{ maxHeight: "450px" }}
                src={developerLogo}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  )
}

export default HomePage
