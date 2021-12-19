import React from 'react'
import styles from './styles/Spinner.module.css'

function Spinner({ size, color }) {
  return (
    <div
      className={styles.spinner}
      style={{
        width: size === 'small' ? '16px' : size === 'medium' ? '24px' : '32px',
        height: size === 'small' ? '16px' : size === 'medium' ? '24px' : '32px',
        border: `0.3rem solid ${color}a`,
        borderRight: `0.3rem solid ${color}`
      }}
    >
    </div>
  )
}

export default Spinner
