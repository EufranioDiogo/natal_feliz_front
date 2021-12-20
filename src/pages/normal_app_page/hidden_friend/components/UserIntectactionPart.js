import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../../../../components/spinner/Spinner'
import { getHiddenFriendRemoteService } from '../../../../services/remotes/http/hiddenFriend/hiddenFriendRemoteService'
import styles from './styles/DiscoverHiddenFriend.module.css'


function UserIntectactionPart() {
  const navigate = useNavigate()
  const questionMarkImg = 'bx_bx-question-mark.svg'
  const giftImg = 'fluent_gift-20-regular.svg'
  const smileEmojiImage = 'healthicons_happy-outline.svg'
  const [hiddenFriendRequestProcess, setHiddenFriendRequestProcess] = useState('discover')

  const [hiddenFriend, setHiddenFriend] = useState({
    _id: '',
    username: '',
    desires: ''
  })
  const [hideHiddenFriend, setHideHiddenFriend] = useState(false)

  const handleDiscoverHiddenFriend = async () => {
    try {
      setHiddenFriendRequestProcess('processing')
      const token = localStorage.getItem('natal_feliz_token')
      console.log(token)
      const response = await getHiddenFriendRemoteService(token)

      console.log(response)
      setHiddenFriend(response.data.hiddenFriend)
      setHiddenFriendRequestProcess('discovered')
    } catch (error) {
      console.log(error)
      setHiddenFriendRequestProcess('error')
    }
  }
  
  return (
    <div className={styles['discover-hidden-friend-container']}>
      {
        hiddenFriendRequestProcess === 'discover' &&
        <>
          <span className={styles['discover-hidden-friend-container--text']}>
            Você ainda não possui o seu amigo oculto!
          </span>
          <img
            src={`${process.env.PUBLIC_URL}/${questionMarkImg}`}
            alt="christmas tree"
            className={styles['discover-hidden-friend-container--img']} />

          <button
            className={`default-button ${styles['full-button-width']}`}
            onClick={handleDiscoverHiddenFriend}
          >
            Descobrir amigo oculto
          </button>
        </>
      }

      {
        hiddenFriendRequestProcess === 'processing' &&
        <>

          <img
            src={`${process.env.PUBLIC_URL}/${giftImg}`}
            alt="christmas tree"
            className={styles['discover-hidden-friend-container--img']} />

          <span className={styles['discover-hidden-friend-container--text']}>
            Processando o seu amigo ...
          </span>
          {
            <Spinner color="#333" size="big" />
          }
        </>
      }


      {
        hiddenFriendRequestProcess === 'discovered' &&
        <>
          <img
            src={`${process.env.PUBLIC_URL}/${smileEmojiImage}`}
            alt="christmas tree"
            className={styles['discover-hidden-friend-container--img']} />

          <span className={styles['discover-hidden-friend-container--text']}>
            O seu amigo oculto é:



            {
              !hideHiddenFriend &&
              <Link
                to={hiddenFriend._id}
                className={`red-color ${styles['hidden-friend-text']}`}
                onClick={() => {
                  navigate(`${hiddenFriend._id}`, {
                    state: {
                      hiddenFriend
                    }
                  })
                }}
                state={
                  hiddenFriend
                }
              >{hiddenFriend.username}</Link>
            }

          </span>

          <button
            className={`default-button ${styles['full-button-width']}`}
            onClick={() => {
              setHideHiddenFriend(!hideHiddenFriend)
            }}
          >
            {!hideHiddenFriend ? 'Ocultar' : 'Apresentar'}
          </button>
        </>
      }
      {
        hiddenFriendRequestProcess === 'error' &&
        <>
          <img
            src={`${process.env.PUBLIC_URL}/${smileEmojiImage}`}
            alt="christmas tree"
            className={styles['discover-hidden-friend-container--img']} />

          <span className={styles['discover-hidden-friend-container--text']}>
            Por agora não temos o seu amigo oculto tente mais tarde
          </span>

          <Link
            to="/natal_feliz_front/app"
            className={`${styles['hidden-friend-text']} default-button`}
            onClick={() => {
              navigate(`/natal_feliz_front/app`)
            }}
          >Voltar</Link>
        </>
      }
    </div>
  )
}

export default UserIntectactionPart
