import React from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link, useNavigate } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/normalDefault.module.css'
import DiscoverHiddenFriend from './components/DiscoverHiddenFriend'
import { getHiddenFriendRemoteService } from '../../../services/remotes/http/hiddenFriend/hiddenFriendRemoteService'


function HiddenFriendPage() {
  const handleGetHiddenFriend = async () => {
    const token = localStorage.getItem('natal_feliz_token')
    const response = getHiddenFriendRemoteService(token)
    return response.data
  }

  return (
    <div >
      <TopMenuBar />

      <div className={`main-container ${styles['main-auth']}`}>
        <PageIndicator pagename="Amigo oculto" />

        <DiscoverHiddenFriend discoverHiddenFriend={getHiddenFriendRemoteService}></DiscoverHiddenFriend>
      </div>
    </div>
  )
}

export default HiddenFriendPage
