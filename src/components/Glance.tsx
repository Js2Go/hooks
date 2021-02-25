import React, { useContext, useEffect, useState } from 'react'
import api from '@apis/friend'
import FriendListItem from './FriendListItem'
import FriendStatus from './FriendStatus'
import theme from '../contexts/theme'

interface IFriend {
  id: number
  name: string
}

const friends: Array<IFriend> = [
  {
    id: 1,
    name: 'mazi1'
  },
  {
    id: 2,
    name: 'mazi2'
  },
  {
    id: 3,
    name: 'mazi3'
  },
  {
    id: 4,
    name: 'mazi4'
  },
]

const Glance = () => {
  const ctx = useContext(theme)
  const [color, setColor] = useState(ctx.color)

  const setC = () => {
    const c = color === '#ccc' ? '#fcf' : '#ccc'
    ctx.color = c
    setColor(c)
  }

  return (
    <>
      <button onClick={setC}>
        换皮肤
      </button>
      <ul style={{ backgroundColor: ctx.color, transition: 'all .3s' }}>
        {
          friends.map(friend => {
            return (
              <div key={friend.id}>
                <span>状态：{ FriendStatus({friend}) }</span>
                <FriendListItem friend={friend} />
                <button onClick={() => api.up(friend.id)}>上线</button>
                <button onClick={() => api.down(friend.id)}>下线</button>
              </div>
            )
          })
        }
      </ul>
    </>
  )
}

export default Glance
