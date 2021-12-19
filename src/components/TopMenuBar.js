import React, { useContext, useState } from 'react'
import { AuthContext } from '../controller/AuthController'
import MenuContainer from './menuComponent/MenuContainer'
import styles from './styles/TopMenuBar.module.css'

function TopMenuBar() {
  const hamburguerIconImg = 'dashicons_menu.svg'
  const [openMenu, setOpenMenu] = useState(false)
  const { isLogged } = useContext(AuthContext)
  const switchMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className={styles['top-menu-container']}>
      <h1 className={styles['top-menu-title']}>
        Amigo Oculto
      </h1>


      {
        isLogged &&
        <div
          className={styles['hamburguer-menu-container']}
          onClick={switchMenu}
        >
          <img
            src={`${process.env.PUBLIC_URL}/${hamburguerIconImg}`}
            alt="christmas tree"
            className={styles['hamburguer-menu-container--img']} />
        </div>
      }


      {
        openMenu &&
        <MenuContainer switchMenu={switchMenu} />
      }
    </div>
  )
}

export default TopMenuBar
