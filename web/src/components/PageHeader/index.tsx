import React from 'react'
import { Link } from 'react-router-dom'

import backIco from '../../assets/icons/back.svg'
import logoIco from '../../assets/logo.svg'

import './styles.css'

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = props => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIco} alt="Voltar"/>
        </Link>
        <img src={logoIco} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{ props.title }</strong>
        { props.children }
      </div>
    </header>
  )
}

export default PageHeader