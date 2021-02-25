import React from 'react'
import useFriendStatus from '@hooks/useFriendStatus'

interface IFriend {
  id: number
}

interface IProps {
  friend: IFriend
}

const FriendStatus = (props: IProps) => {
  const isOnline = useFriendStatus(props.friend.id)

  if (isOnline === null) {
    return 'Loading...'
  }

  return isOnline.isOnline ? 'Online' : 'Offline'
}

export default FriendStatus
