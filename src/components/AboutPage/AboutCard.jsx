import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'
import { useTranslation } from 'react-i18next'

const AboutCard = () => {

  const { t } = useTranslation()

  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            {t("about.about2")} <span className='purple'>Dulce Herrera. </span>
            {t("about.born")} <span className='purple'> Durango, Mexico</span>,
            {t("about.lived")} <span className='purple'>California, USA</span> {t("about.years")}.
            <br />
            I am currently studying at <span className='purple'> Academlo</span>
            <br />
            <br />
            {t("about.besides")}
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight />{t("about.travel")} ✈️
            </li>
            <li className='about-activity'>
              <ImPointRight /> {t("about.disney")} 🐭
            </li>
            <li className='about-activity'>
              <ImPointRight /> {t("about.dance")} 💃🏻
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
