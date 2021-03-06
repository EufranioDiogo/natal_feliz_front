import React, { useContext, useState } from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link, useNavigate } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/authDefault.module.css'
import { AuthContext } from '../../../controller/AuthController'
import { useFormik } from 'formik'
import Spinner from '../../../components/spinner/Spinner'

function LoginPage() {
  const navigate = useNavigate()
  const { login, isLogged } = useContext(AuthContext)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState(false)
  const [notValidCredentials, setNotValidCredentials] = useState(false)


  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        setNotValidCredentials(false)
        setProcessing(true)
        const username = ((values.username.trim().split(' ')).filter(element => element.trim().length !== 0).join(' ')).toLowerCase()
        const password = ((values.password.trim().split(' ')).filter(element => element.trim().length !== 0).join(' ')).toLowerCase()

        const response = await login(username, password)

        if (response.status === 200) {
          window.location.replace('/app')
        } else if (response.status === 403) {
          setNotValidCredentials(true)
        }
        setProcessing(false)
      } catch (error) {
        setProcessing(false)
        setError(true)
      }

    }
  })


  return (
    <div >
      <TopMenuBar />

      <div className={`main-container ${styles['main-auth']}`}>
        <PageIndicator pagename="Login" />


        <form
          action=""
          className={styles['form-container']}
          onSubmit={formik.handleSubmit}
        >
          <div className="input-container">
            <input
              type="text"
              name="username"
              id="username-input"
              className={styles['input-field']}
              placeholder="Username" required
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <input
              type="password"
              name="password"
              id="password-input"
              className={styles['input-field']}
              placeholder="Senha" required
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          {
            notValidCredentials &&
            <h3 className="not-valid-data">Erro, dados incorrectos</h3>
          }

          <button
            type="submit"
            className={`default-button ${styles['align-right']}`}
            value="Login"
          >
            {
              !processing ?
                !error ? 'Login' : 'Erro, tente mais tarde'
                :
                <Spinner color="#fff" size="small"></Spinner>
            }
          </button>
        </form>
        <Link to="/natal_feliz_front/auth/signup" className={`red-color`}>Cadastrar-se</Link>
      </div>

    </div>
  )
}

export default LoginPage