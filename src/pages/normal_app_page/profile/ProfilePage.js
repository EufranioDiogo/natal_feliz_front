import React, { useContext, useState } from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link, useNavigate } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/normalDefault.module.css'
import styles1 from './styles/ProfilePage.module.css'
import { AuthContext } from '../../../controller/AuthController'
import { updateUserRemoteService } from '../../../services/remotes/http/user/userRemoteService'
import { useFormik } from 'formik'


function ProfilePage() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      desires: user.desires
    },
    onSubmit: async (values) => {
      const token = localStorage.getItem('natal_feliz_token')

      const response = await updateUserRemoteService({
        ...user,
        ...values
      }, token)

      console.log(response)
    }
  })

  return (
    <div >
      <TopMenuBar />

      <div className={`main-container ${styles['main-auth']}`}>
        <PageIndicator pagename="Perfil" />
        z
        <div className={styles1['main-container']}>
          <div className={styles1['user-info-container']}>
            <h3 className={styles1['user-info-container--h3']}>
              {user.username}
            </h3>
            <h4
              className={`${styles1['user-info-container--h4']} 
              ${user.hasHiddenFriend ? 'green-color-text' : 'red-color-text'}`}
            >
              {
                user.hasHiddenFriend ?
                  'Alguém já calhou com você!'
                  :
                  'Ainda não tem ninguém que calhou contigo!'
              }

            </h4>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            action=""
            method="POST"
          >
            <textarea
              name="desires"
              id=""
              cols="30"
              rows="10"
              className={`${styles1['discover-hidden-friend-container--text-area']}`}
              placeholder="Seus desejos"
              value={formik.values.desires}
              onChange={formik.handleChange}
            >

            </textarea>

            <button
              className="default-button"
              type="submit"
            >
              Salvar
            </button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default ProfilePage
