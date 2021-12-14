import React from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link, useNavigate } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/authDefault.module.css'

function LoginPage() {
  const navigate = useNavigate()

  return (
    <div >
      <TopMenuBar />

      <div className={`main-container ${styles['main-auth']}`}>
        <PageIndicator pagename="Login" />


        <form action="" className={styles['form-container']}>
          <div className="input-container">
            <input type="text" name="username" id="username-input" className={styles['input-field']} placeholder="Username" required />
            <input type="password" name="password" id="password-input" className={styles['input-field']}
              placeholder="Senha" required />
          </div>

          <button
            className={`default-button ${styles['align-right']}`}
            onClick={(e) => {
              e.preventDefault()
              navigate('/friend/hidden')
            }}
          >
            Login
          </button>
        </form>
        <Link to="/auth/signup" className={`red-color`}>Cadastrar-se</Link>
      </div>

    </div>
  )
}

export default LoginPage