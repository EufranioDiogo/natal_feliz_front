import React from 'react'
import TopMenuBar from '../../components/TopMenuBar'
import styles from './styles/StarterPage.module.css'
import { Link } from 'react-router-dom'

function StarterPage() {
  const christmasTreeImageUrl = 'twemoji_christmas-tree.svg'

  return (
    <div>
      <TopMenuBar />

      <div className={`main-container ${styles['starter-page-main-container']}`}>
        <img
          src={`${process.env.PUBLIC_URL}/${christmasTreeImageUrl}`}
          alt="christmas tree"
          className={styles['starter-page-main-container--img']} />
        <span className={styles['starter-page-main-container--text-desc']}>
          Simples e fácil
          digite o seu nome
          e a sua password
          e veja com quem vc
          calhou
        </span>

        <div className={styles['stater-page-main-container--button-controller']}>
          <Link to="/natal_feliz_front/auth/signup" className={`default-button`}>Cadastro</Link>
          <Link to="/natal_feliz_front/auth/login" className={`red-color ${styles['button-controller-aux-button-left']}`}>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default StarterPage
