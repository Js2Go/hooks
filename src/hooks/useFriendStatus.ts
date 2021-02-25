import { useEffect, useState } from 'react'
import api from '@apis/friend'

type IStatus = null | {
  isOnline: boolean
}

const useFriendStatus = (friendId: number) => {
  const [isOnline, setIsOnline] = useState<IStatus>(null)

  function handleStatusChange(status: IStatus) {
    setIsOnline(status)
  }

  // effect 更像是渲染结果的一部分 —— 每个 effect “属于”一次特定的渲染
  useEffect(
    // 执行 DOM 更新之后调用它
    () => {
      api.subscribeToFriendStatus(friendId, handleStatusChange)
      return () => {
        api.unsubscribeFromFriendStatus(friendId, handleStatusChange)
      }
    },
  [friendId])

  return isOnline
}

export default useFriendStatus
