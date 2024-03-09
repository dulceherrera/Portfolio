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

const ProjectsPage = () => {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>My <strong className='purple'>Work</strong></h1>
        <p style={{ color: "white" }}>Here are some projects I've worked on.</p>
        <Row style={{ paddingBottom: "10px", justifyContent: "center" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={lifeisapawty}
              title="Life is a Pawty"
              description="A full stack web application for prospective dog and/or cat adopters who want to find pets available for adoption."
              ghLink="https://github.com/dulceherrera/life-is-a-pawty.git"
              demoLink="https://life-is-a-pawty.dulceherrera.com/"
             />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={weather}
              title="Weather App"
              description="You can search for the weather of your current location or anywhere in the world."
              ghLink="https://github.com/dulceherrera/Weather-App.git"
              demoLink="https://weatherappdulceherrera.netlify.app/"
              />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={rickandmorty}
              title="Rick and Morty"
              description="Here you will find all the characters in this program filtering them by dimension and each character has relevant information."
              ghLink="https://github.com/dulceherrera/Rick-and-Morty.git"
              demoLink="https://rick-and-morty-dulceherrera.netlify.app/"
              />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={userscrud}
              title="CRUD Users"
              description="Web app that allows you to interact with a user API through all http methods."
              ghLink="https://github.com/dulceherrera/CRUD-Users.git"
              demoLink="https://crudusers-dulceherrera.netlify.app/"
              />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={pokedex}
              title="Pokedex"
              description="This project allows you to see the information of all your favorite Pokemon. You can filter by type or directly by the name of the Pokemon."
              ghLink="https://github.com/dulceherrera/Pokedex.git"
              demoLink="https://pokedex-dulceherrera.netlify.app/"
              />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={ecommerce}
              title="e-commerce"
              description="Virtual store containing items for sale with user-friendly interaction."
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
