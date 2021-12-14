import React from 'react'
import styles from './styles/PageIndicator.module.css'

function PageIndicator({ pagename }) {
  return (
    <div className={styles['page-indicator-container']}>
      <h2 className={styles['page-indicator-title']}>{pagename}</h2>
    </div>
  )
}

export default PageIndicator
