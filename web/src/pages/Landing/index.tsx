import React from 'react'

import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import landingImg from '../../assets/landing.svg'
import studyIco from '../../assets/icons/study.svg'
import giveClassesIco from '../../assets/icons/give-classes.svg'
import purpleHeartIco from '../../assets/icons/purple-heart.svg'

import './styles.css'

export default () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIco} alt="Estudar"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIco} alt="Estudar"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexoes ja realizadas
          <img src={purpleHeartIco} alt="Coracao roxo"/>
        </span>
      </div>
    </div>
  )
}