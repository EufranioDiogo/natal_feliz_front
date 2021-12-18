import React from 'react'
import TopMenuBar from '../../../../components/TopMenuBar'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import styles from '../../styles/normalDefault.module.css'
import styles1 from '../components/styles/DiscoverHiddenFriend.module.css'
import styles2 from './styles/HiddenFriendDesires.module.css'

function HiddenFriendDesires(props) {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(props)
  const hiddenFriend = location.state


  return (
    <div >
      <TopMenuBar />

      <div className={`main-container ${styles['main-auth']}`}>
        <span className={`${styles1['discover-hidden-friend-container--text']}`}>
          Os desejos de {hiddenFriend.username} são:
        </span>


        <textarea
          name="desires"
          id=""
          cols="30"
          rows="10"
          className={styles2['discover-hidden-friend-container--text-area']}
          placeholder="Desejos do amigo oculto"
          value={hiddenFriend.desires}
        >

        </textarea>

        <button
          className="default-button"
          onClick={() => {
            navigate('/app/friend/hidden')
          }}
        >
          Voltar
        </button>
      </div>

    </div>
  )
}

export default HiddenFriendDesires
