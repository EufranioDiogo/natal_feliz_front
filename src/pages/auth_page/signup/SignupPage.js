import React, { useContext, useState } from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/authDefault.module.css'
import { useFormik } from 'formik'
import { AuthContext } from '../../../controller/AuthController'
import Spinner from '../../../components/spinner/Spinner'

function SignupPage() {
  const { signup } = useContext(AuthContext)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState(false)


  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        setProcessing(true)
        const response = await signup(values.username, values.password)
        if (response.result) {
          window.location.replace('/app')
        }
        setProcessing(false)
      } catch (err) {
        setProcessing(false)
        setError(true)
      }

    }
  })

  return (
    <div >
      <TopMenuBar />

      <div className={`main-container ${styles['main-auth']}`}>
        <PageIndicator pagename="Cadastro" />


        <form
          onSubmit={formik.handleSubmit}
          action=""
          className={styles['form-container']}>
          <div className="input-container">
            <input
              type="text"
              name="username"
              id="username-input"
              className={styles['input-field']}
              placeholder="Username"
              required
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <input
              type="password"
              name="password"
              id="password-input"
              className={styles['input-field']}
              placeholder="Senha"
              required
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>



          <button
            className={`default-button ${styles['align-right']}`}>
            {
              !processing ?
                !error ? 'Cadastrar' : 'Erro, tente mais tarde'
                :
                <Spinner color="#fff" size="small"></Spinner>
            }
          </button>
        </form>
        <Link to="/natal_feliz_front/auth/login" className={`red-color`}>Login</Link>
      </div>

    </div>
  )
}

export default SignupPage
