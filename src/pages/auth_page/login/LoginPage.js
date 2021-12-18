import React, { useContext } from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link, useNavigate } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/authDefault.module.css'
import { AuthContext } from '../../../controller/AuthController'
import { useFormik } from 'formik'

function LoginPage() {
  const navigate = useNavigate()
  const { login, isLogged } = useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const response = await login(values.username, values.password)
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
            Login
          </button>
        </form>
        <Link to="/auth/signup" className={`red-color`}>Cadastrar-se</Link>
      </div>

    </div>
  )
}

export default LoginPage