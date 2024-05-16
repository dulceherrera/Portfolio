import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Tilt from "react-parallax-tilt"
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import myAvatar from '../../assets/avatar.png'
import { useTranslation } from 'react-i18next'

const Home2 = () => {

  const { t } = useTranslation()

  return (
    <Container fluid className='home-about-section' id='about-1'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home.intro")}
            </h1>
            <p className='home-about-body'>
              {t("home.body1")} <span className='purple'>HTML, CSS, Javascript,</span> {t("home.body2")} <span className='purple'>{t("home.chemical")}</span>,
              {t("home.body3")}
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
            <h1>{t("home.findme")}</h1>
            <p>
              {t("home.social")}
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
