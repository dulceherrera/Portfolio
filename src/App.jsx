import './App.css'
import { useEffect, useState } from 'react'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import Navbar1 from './components/Navbar1'
import ResumePage from './pages/ResumePage'
import ScrollToTop from './components/ScrollToTop'
import PreLoad from './components/PreLoad'
import Footer from './components/Footer'
import './styles.css'
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-pdf/dist/esm/Page/TextLayer.css';

function App() {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 1200);

    return () => clearTimeout(timer)
  }, [])



  return (
    <Router>
      <PreLoad load={load} />
      <div className='App' id={load ? "no-scroll" : "scroll"}>
        <Navbar1 />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/projects' element={ <ProjectsPage /> } />
          <Route path='/contact' element={ <ContactPage /> } />
          <Route path='/resume' element={ <ResumePage /> } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
