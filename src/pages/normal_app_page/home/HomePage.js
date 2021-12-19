import React, { useEffect, useState } from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link, useNavigate } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/normalDefault.module.css'
import styles1 from './styles/HomePage.module.css'
import { getStatistics } from '../../../services/remotes/http/app/appRemoteService'


function HomePage() {
  const happyFamilyImg = 'pexels-nicole-michalou-5778892.jpg'
  const [appStatistics, setAppStatistics] = useState({
    quantUsersTotal: 0,
    quantUsersWithoutHiddenFriend: 0
  })

  const handleGetStatistics = async () => {
    const token = localStorage.getItem('natal_feliz_token')
    const response = await getStatistics(token)

    if (response.result) {
      setAppStatistics(response.data)
    }
  }

  useEffect(() => {
    handleGetStatistics()
  }, [])
  return (
    <div >
      <TopMenuBar />

      <div className={`main-container ${styles['main-auth']}`}>
        <PageIndicator pagename="Home" />

        <div className={styles1['home-page-container']}>
          <div className={styles1['home-page-container--header-img-container']}>
            <img
              className={styles1['header-img-container--img']}
              src={`${process.env.PUBLIC_URL}/${happyFamilyImg}`}
              alt=""
            />
            <span
              className={styles1['header-img-container--text']}
            >
              Neste natal ame mais aqueles que um dia já não poderam estar mais aqui ao seu lado
            </span>
          </div>

          <div
            className={styles1['statistics-container']}
          >
            <div
              className={styles1['statistics-container--item']}
            >
              <h3
                className={styles1['statistics-container--item-title']}
              >
                Quant pessoas registradas
              </h3>
              <span
                className={styles1['statistics-container--item-value']}
              >
                {appStatistics.quantUsersTotal}
              </span>
            </div>



            <div
              className={styles1['statistics-container--item']}
            >
              <h3
                className={styles1['statistics-container--item-title']}
              >
                Quant pessoas sem amigo oculto
              </h3>
              <span
                className={styles1['statistics-container--item-value']}
              >
                {
                  appStatistics.quantUsersWithoutHiddenFriend
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
