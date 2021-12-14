import React from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link, useNavigate } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/normalDefault.module.css'
import styles1 from './styles/HomePage.module.css'


function HomePage() {
  const navigate = useNavigate()
  const happyFamilyImg = 'pexels-jonathan-borba-3303614.jpg'

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
                12
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
                12
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
