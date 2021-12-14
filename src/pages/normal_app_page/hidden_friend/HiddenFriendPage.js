import React from 'react'
import TopMenuBar from '../../../components/TopMenuBar'
import { Link, useNavigate } from 'react-router-dom'
import PageIndicator from '../../../components/PageIndicator'
import styles from '../styles/normalDefault.module.css'
import DiscoverHiddenFriend from './components/DiscoverHiddenFriend'


function HiddenFriendPage() {
  const navigate = useNavigate()

  return (
    <div >
      <TopMenuBar />

      <div className={`main-container ${styles['main-auth']}`}>
        <PageIndicator pagename="Amigo oculto" />

        <DiscoverHiddenFriend></DiscoverHiddenFriend>
      </div>
    </div>
  )
}

export default HiddenFriendPage
