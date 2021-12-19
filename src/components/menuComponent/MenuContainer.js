import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../controller/AuthController'
import styles from './styles/MenuContainer.module.css'

function MenuContainer({ switchMenu }) {
  const closeIconImg = 'la_times.svg'
  const location = useLocation()
  const { logout } = useContext(AuthContext)
  const { isLogged } = useContext(AuthContext)


  const handleLogout = async () => {
    await logout()
  }
  return createPortal((
    <div className={styles['menu-back-container']}>
      <div className={styles['menu-container']}>
        <div className={styles['top-menu-container']}>
          <h1 className={styles['top-menu-title']}>
            Natal Feliz
          </h1>


          <div
            className={styles['hamburguer-menu-container']}
            onClick={() => {
              switchMenu()
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/${closeIconImg}`}
              alt="christmas tree"
              className={styles['hamburguer-menu-container--img']} />
          </div>
        </div>

        <div className={styles['bottom-menu-container']}>
          <ul className={styles['menu-list']}>
            <li className={styles['menu-list-item']}>
              <Link to="/natal_feliz_front/app" className={`${styles['menu-list-item--link']} ${location.pathname === '/app' ? ` ${styles['menu-item-active']}` : ''}`}>
                Home
              </Link>
            </li>

            <li className={styles['menu-list-item']}>
              <Link to="/natal_feliz_front/app/profile" className={`${styles['menu-list-item--link']} ${location.pathname === '/app/profile' ? ` ${styles['menu-item-active']}` : ''}`}>
                Perfil
              </Link>
            </li>

            <li className={styles['menu-list-item']}>
              <Link to="/natal_feliz_front/app/friend/hidden" className={`${styles['menu-list-item--link']} ${location.pathname === '/natal_feliz_front/app/friend/hidden' ? ` ${styles['menu-item-active']}` : ''}`}>
                Amigo oculto
              </Link>
            </li>

            <li className={styles['menu-list-item']}>
              <Link 
              to="/natal_feliz_front/auth/login" 
              className={`${styles['menu-list-item--link']} ${location.pathname === '/natal_feliz_front/app/auth/login' ? ` ${styles['menu-item-active']}` : ''}`}
              onClick={() => {
                handleLogout()
              }}
              >
                Terminar sessão
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  ), document.querySelector('.menu-portal'))
}

export default MenuContainer
