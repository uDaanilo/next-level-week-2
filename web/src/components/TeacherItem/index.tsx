import React from 'react'

import wppIco from '../../assets/icons/whatsapp.svg'

import './styles.css'

export default () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/47300707?s=460&v=4" alt=""/>
        <div>
          <strong>Danilo</strong>
          <span>LOL</span>
        </div>
      </header>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae sunt quod ad rem modi neque? Asperiores animi dolores reprehenderit tempora deleniti reiciendis totam ab nam, repellendus, dolor amet velit.</p>
      
      <footer>
        <p>
          Preco/hora
          <strong>R$ 8000</strong>
        </p>

        <button type="button">
          <img src={wppIco} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}