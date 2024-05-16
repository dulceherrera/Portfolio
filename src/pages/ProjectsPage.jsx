import React from 'react'
import { Col, Row, Container } from "react-bootstrap"
import Particle from '../components/Particle'
import ProjectCard from '../components/ProjectsPage/ProjectCard'
import lifeisapawty from "../assets/Projects/life-is-a-pawty.png"
import weather from '../assets/Projects/weather-app.png'
import userscrud from '../assets/Projects/users-crud.png'
import rickandmorty from '../assets/Projects/rick-and-morty.png'
import pokedex from '../assets/Projects/pokedex.png'
import ecommerce from '../assets/Projects/e-commerce.png'
import { useTranslation } from 'react-i18next'


const ProjectsPage = () => {

  const { t } = useTranslation()

  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>{t("projects.my")} <strong className='purple'>{t("projects.work")}</strong></h1>
        <p style={{ color: "white" }}>{t("projects.pro1")}</p>
        <Row style={{ paddingBottom: "10px", justifyContent: "center" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={lifeisapawty}
              title="Life is a Pawty"
              description= {t("projects.life.description")}
              ghLink="https://github.com/dulceherrera/life-is-a-pawty.git"
              demoLink="https://life-is-a-pawty.dulceherrera.com/"
             />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={weather}
              title="Weather App"
              description={t("projects.weather.description")}
              ghLink="https://github.com/dulceherrera/Weather-App.git"
              demoLink="https://weatherappdulceherrera.netlify.app/"
              />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={rickandmorty}
              title="Rick and Morty"
              description={t("projects.rick.description")}
              ghLink="https://github.com/dulceherrera/Rick-and-Morty.git"
              demoLink="https://rick-and-morty-dulceherrera.netlify.app/"
              />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={userscrud}
              title="CRUD Users"
              description={t("projects.crud.description")}
              ghLink="https://github.com/dulceherrera/CRUD-Users.git"
              demoLink="https://crudusers-dulceherrera.netlify.app/"
              />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={pokedex}
              title="Pokedex"
              description={t("projects.pokedex.description")}
              ghLink="https://github.com/dulceherrera/Pokedex.git"
              demoLink="https://pokedex-dulceherrera.netlify.app/"
              />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={ecommerce}
              title="e-commerce"
              description={t("projects.ecomm.description")}
              ghLink="https://github.com/dulceherrera/e-commerce.git"
              demoLink="https://e-commerce-dulceherrera.netlify.app/"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default ProjectsPage
