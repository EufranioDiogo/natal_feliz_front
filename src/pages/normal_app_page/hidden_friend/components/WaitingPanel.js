import React, { useEffect, useState } from 'react'
import styles from './styles/WaitingPanel.module.css'

function WaitingPanel({ days, hours, minutes, seconds }) {
  return (
    <div className={styles['discover-hidden-friend-container']}>
      <h2 className={styles['heading-2']}>Faltam exactamente</h2>
      <h1 className={styles['heading-1']}>{days}d : {hours}h : {minutes}m : {seconds}s</h1>
      <h2 className={styles['heading-2']}>Para descobrir o seu amigo oculto</h2>
    </div>
  )
}

export default WaitingPanel
