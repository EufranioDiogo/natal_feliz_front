import React, { useEffect, useState } from 'react'
import UserIntectactionPart from './UserIntectactionPart'
import WaitingPanel from './WaitingPanel'

function DiscoverHiddenFriend({ discoverHiddenFriend }) {
  const dueDate = new Date('2021-12-20T08:00:00').getTime()
  const [actualTime, setActualTime] = useState(new Date().getTime())

  const perfomComputation = () => {
    const timeleft = dueDate - actualTime;

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
  useEffect(() => {
    setInterval(() => {
      setActualTime(new Date().getTime())
      perfomComputation()
    }, 1000)
  })
  return (
    <>
      {
        dueDate - actualTime <= 0 ?
          <UserIntectactionPart />
          :
          <WaitingPanel {...perfomComputation()} />
      }
    </>
  )
}

export default DiscoverHiddenFriend
