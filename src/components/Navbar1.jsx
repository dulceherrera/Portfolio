import React from 'react'
import { useState } from 'react'
import mylogo from '../assets/DH.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { CgGitFork, CgFileDocument } from 'react-icons/cg'
import { useTranslation } from 'react-i18next'
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, AiOutlineContacts } from 'react-icons/ai'


const Navbar1 = () => {
  const [expand, setExpand] = useState(false)
  const [navColour, setNavColour] = useState(false)
  const [isSpanish, setIsSpanish] = useState(false)
  const { t, i18n } = useTranslation()

  const scrollHandler = () => {
    if (window.scrollY >= 20){
      setNavColour(true)
    }else{
      setNavColour(false)
    }
  }

  const handleLanguage = () => {
    if(i18n.language == "en") {
      i18n.changeLanguage("es")
    }else{
      i18n.changeLanguage("en")
    }
    setIsSpanish(!isSpanish)
  }

  window.addEventListener("scroll", scrollHandler)

  return (
    <Navbar
    expanded={expand}
    fixed='top'
    expand='md'
    className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href='/' className='d-flex'>
          <img className='img-fluid logo' alt='brand' src={mylogo} />
        </Navbar.Brand>
        <Navbar.Brand className='d-flex' onClick={handleLanguage}>
          {
            isSpanish ?
            <img className='navbar_language_img'src='./english.png' alt='english' />
            :
            <img className='navbar_language_img' src='./spanish.png' alt='spanish' />
          }
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'
        onClick={() => {
          setExpand(expand ? false : "expanded")
        }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto' defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as = {Link} to='/' onClick={() => setExpand(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("navbar.inicio")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as = {Link} to='/about' onClick={() => setExpand(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("navbar.acerca")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as = {Link} to='/projects' onClick={() => setExpand(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px"}} />{" "}
                {t("navbar.proyectos")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as = {Link} to='/contact' onClick={() => setExpand(false)}>
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> {t("navbar.contacto")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to='/resume' onClick={() => setExpand(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("navbar.cv")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='fork-btn'>
              <Button className='fork-btn-inner' target='_blank' href='https://github.com/dulceherrera/Portfolio.git'>
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1
