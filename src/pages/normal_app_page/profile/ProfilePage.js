import React, { useState } from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link, useNavigate } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/normalDefault.module.css'
import styles1 from './styles/ProfilePage.module.css'


function ProfilePage() {
  const navigate = useNavigate()
  const happyFamilyImg = 'pexels-jonathan-borba-3303614.jpg'
  const [isSelected, setIsSelected] = useState(true)

  return (
    <div >
      <TopMenuBar />

      <div className={`main-container ${styles['main-auth']}`}>
        <PageIndicator pagename="Perfil" />

        <div className={styles1['main-container']}>
          <div className={styles1['user-info-container']}>
            <h3 className={styles1['user-info-container--h3']}>
              Hevlin Valente
            </h3>
            <h4
              className={`${styles1['user-info-container--h4']} 
              ${isSelected ? 'green-color-text' : 'red-color-text'}`}
            >
            {
              isSelected ? 
              'Alguém já calhou com você!'
              :
              'Ainda não tem ninguém que calhou contigo!'
            }
              
            </h4>
          </div>

          <div>
            <textarea
              name="desires"
              id=""
              cols="30"
              rows="10"
              className={`${styles1['discover-hidden-friend-container--text-area']}`}
              placeholder="Seus desejos"
            >

            </textarea>

            <button
              className="default-button"
              onClick={() => {
                navigate('/app/friend/hidden')
              }}
            >
              Salvar
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProfilePage
