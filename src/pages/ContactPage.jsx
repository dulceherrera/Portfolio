import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'
import { Container, Row } from 'react-bootstrap'
import Particle from '../components/Particle'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ContactPage = () => {

  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation()


  useEffect(() => emailjs.init("KXJAF_kutN5A2vpMY"), [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const serviceId = "service_oix7aws"
    const templateId = "template_xya1rpp"
    try {
      setLoading(true)
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        message: messageRef.current.value
      })
      alert(t("contact.enviado"))
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
    e.target.reset()
  }

  return (
    <Container fluid className='contact-section'>
      <Form onSubmit={handleSubmit} className='form-contact'>
        <Form.Text className='form_label'><span className='form-span'>*</span>{t("contact.campo")}</Form.Text>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label className='form_label'>{t("contact.nombre")}<span className='form-span'>*</span></Form.Label>
          <Form.Control ref={nameRef} type='text' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='form_label'>Email<span className='form-span'>*</span></Form.Label>
          <Form.Control ref={emailRef} type='email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicMessage'>
          <Form.Label className='form_label'>{t("contact.mensaje")}<span className='form-span'>*</span></Form.Label>
          <Form.Control ref={messageRef} as="textarea" rows={5} />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={loading}>
          {t("contact.enviar")}
        </Button>
      </Form>
    </Container>
  )
}

export default ContactPage
