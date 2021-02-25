import React from 'react'
import useFriendStatus from '@hooks/useFriendStatus'

interface IFriend {
  id: number
  name: string
}

interface IProps {
  friend: IFriend
}

const FriendListItem = (props: IProps) => {
  const isOnline = useFriendStatus(props.friend.id)

  if (isOnline === null) {
    return <li>{ props.friend.name }</li>
  }

  return (
    <li style={{ color: isOnline.isOnline ? 'green' : 'black' }}>
      { props.friend.name }
    </li>
  )
}

export default FriendListItem
