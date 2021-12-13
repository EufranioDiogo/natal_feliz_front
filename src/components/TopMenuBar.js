import React from 'react'
import styles from './styles/TopMenuBar.module.css'

function TopMenuBar() {
  return (
    <div className={styles['top-menu-container']}>
      <h1 className={styles['top-menu-title']}>
        Natal Feliz
      </h1>
    </div>
  )
}

export default TopMenuBar
