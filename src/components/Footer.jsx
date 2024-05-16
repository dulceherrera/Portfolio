import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const Footer = () => {

  let date = new Date();
  let year = date.getFullYear();

  const { t } = useTranslation()

  return (
    <Container fluid className='footer'>
      <Row>
        <Col md="4" className='footer-copyright'>
          <h3>{t("footer.developed")}</h3>
        </Col>
        <Col md="4" className='footer-copyright'>
          <h3>Copyright © {year} DH</h3>
        </Col>
        <Col md="4" className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                target='_blank'
                style={{ color: "white" }}
                rel='noopener noreferrer'
                href='https://github.com/dulceherrera'
                >
                  <AiFillGithub />
                </a>
            </li>
            <li className='social-icons'>
              <a
                target='_blank'
                style={{ color: "white" }}
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/dulce-herrera'
                >
                <FaLinkedin />
              </a>
            </li>
            <li className='social-icons'>
              <a
                target='_blank'
                style={{ color: "white" }}
                rel='noopener noreferrer'
                href='https://www.instagram.com/dulceherrera2910'
                >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
