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

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        setProcessing(true)
        const response = await login(values.username.trim(), values.password.trim())

        if (response.result) {
          window.location.replace('/app')
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

          <button
            type="submit"
            className={`default-button ${styles['align-right']}`}
            value="Login"
          >
            {
              !processing ?
                'Login'
                :
                <Spinner color="#fff" size="small"></Spinner>
            }
          </button>
        </form>
        <Link to="/auth/signup" className={`red-color`}>Cadastrar-se</Link>
      </div>

    </div>
  )
}

export default LoginPage