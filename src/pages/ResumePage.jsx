import React, { useState, useEffect } from 'react'
import resumepdf from '../assets/Dulce-Herrera-Resume.pdf'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Document, Page, pdfjs } from 'react-pdf'
import Particle from '../components/Particle'
import { AiOutlineDownload } from 'react-icons/ai'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumePage = () => {

  const [width, setwidth] = useState(1200)

  useEffect(() => {
    setwidth(window.innerWidth)
  }, [])


  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />
        <Row style={{ position: "relative", justifyContent: "center" }}>
          <Button
            target='_blank'
            style={{ maxWidth: "250px" }}
            variant='primary'
            href={resumepdf}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
        </Row>
        <Row className='resume'>
          <Document file={resumepdf} className='d-flex justify-content-center'>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row style={{ position: "relative", justifyContent: "center" }}>
          <Button
            target='_blank'
            style={{ maxWidth: "250px" }}
            variant='primary'
            href={resumepdf}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default ResumePage
