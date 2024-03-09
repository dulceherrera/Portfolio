import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Tilt from "react-parallax-tilt"
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import myAvatar from '../../assets/avatar.png'

const Home2 = () => {
  return (
    <Container fluid className='home-about-section' id='about-1'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='blue'>INTRODUCE</span> MYSELF
            </h1>
            <p className='home-about-body'>
              I've spent the last months working with <span className='purple'>HTML, CSS, Javascript,</span> building everything
              from scratch to APIs. I am a <span className='purple'>Chemical Engineer</span>, and working on this field has not been
              easy, but it has helped me to be more proactive, efficent, and to deliver results quickly
              and organized even in a stressfull environment, which is very important in the tech industry.
            </p>
          </Col>
          <Col md={4} className='myAvatar'>
            <Tilt>
              <img alt='avatar' className='img-fluid avatar-computer' src={myAvatar} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='blue'>connect </span> with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                rel='noreferrer'
                className='icon-colour home-social-icons'
                target='_blank'
                href='https://github.com/dulceherrera'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                rel='noreferrer'
                target='_blank'
                className='icon-colour home-social-icons'
                href='https://www.linkedin.com/in/dulce-herrera'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                rel='noreferrer'
                target='_blank'
                className='icon-colour home-social-icons'
                href='https://www.instagram.com/dulceherrera2910'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home2
