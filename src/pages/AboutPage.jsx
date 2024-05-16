import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../components/Particle'
import AboutCard from '../components/AboutPage/AboutCard'
import TechStack from '../components/AboutPage/TechStack'
import ToolStack from '../components/AboutPage/ToolStack'
import womenLaptop from '../assets/women-w-laptop.svg'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {

  const { t } = useTranslation()

  return (
    <div>
      <Container fluid className='about-section'>
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px", justifyContent: "center" }} >
              <h1 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                {t("about.who")} <strong className='purple'>{t("about.iam")}</strong> ?
                </h1>
                <AboutCard />
            </Col>
            <Col md={5} className='about-img' style={{ paddingTop: "120px", paddingBottom: "50px" }}>
              <img className='img-fluid' src={womenLaptop} />
            </Col>
          </Row>
          <h1 className='project-heading'>
            {t("about.professional")} <strong className='purple'>{t("about.skillset")}</strong>
          </h1>
          <TechStack />
          <h1 className='project-heading'>
            <strong className='purple'>{t("about.tools")}</strong> {t("about.about1")}
          </h1>
          <ToolStack />
        </Container>
      </Container>
    </div>
  )
}

export default AboutPage
