import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './styles/DiscoverHiddenFriend.module.css'

function DiscoverHiddenFriend() {
  const navigate = useNavigate()
  const questionMarkImg = 'bx_bx-question-mark.svg'
  const giftImg = 'fluent_gift-20-regular.svg'
  const smileEmojiImage = 'healthicons_happy-outline.svg'

  const taskName = 'discovered'
  return (
    <div className={styles['discover-hidden-friend-container']}>
      {
        taskName === 'discover' &&
        <>
          <span className={styles['discover-hidden-friend-container--text']}>
            Você ainda não possui o seu amigo oculto!
          </span>
          <img
            src={`${process.env.PUBLIC_URL}/${questionMarkImg}`}
            alt="christmas tree"
            className={styles['discover-hidden-friend-container--img']} />

          <button className={`default-button ${styles['full-button-width']}`}>
            Descobrir amigo oculto
          </button>
        </>
      }

      {
        taskName === 'processing' &&
        <>

          <img
            src={`${process.env.PUBLIC_URL}/${giftImg}`}
            alt="christmas tree"
            className={styles['discover-hidden-friend-container--img']} />

          <span className={styles['discover-hidden-friend-container--text']}>
            Processando o seu amigo ...
          </span>
        </>
      }


      {
        taskName === 'discovered' &&
        <>
          <img
            src={`${process.env.PUBLIC_URL}/${smileEmojiImage}`}
            alt="christmas tree"
            className={styles['discover-hidden-friend-container--img']} />

          <span className={styles['discover-hidden-friend-container--text']}>
            O seu amigo oculto é:

            <Link to="1234" className={`red-color ${styles['hidden-friend-text']}`}>Eufránio Diogo</Link>
          </span>

          <button
            className={`default-button ${styles['full-button-width']}`}
          >
            Ocultar
          </button>
        </>
      }
    </div>
  )
}

export default DiscoverHiddenFriend
