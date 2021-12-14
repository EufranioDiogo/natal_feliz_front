import React from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/authDefault.module.css'

function SignupPage() {

  return (
    <div >
      <TopMenuBar />

      <div className={`main-container ${styles['main-auth']}`}>
        <PageIndicator pagename="Cadastro" />


        <form action="" className={styles['form-container']}>
          <div className="input-container">
            <input type="text" name="username" id="username-input" className={styles['input-field']} placeholder="Username" required />
            <input type="password" name="password" id="password-input" className={styles['input-field']}
            placeholder="Senha" required />
          </div>

          <button className={`default-button ${styles['align-right']}`}>Cadastrar</button>
        </form>
        <Link to="/auth/login" className={`red-color`}>Login</Link>
      </div>

    </div>
  )
}

export default SignupPage
