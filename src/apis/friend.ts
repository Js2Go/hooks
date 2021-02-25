const friend = {
  stacks: new Map(),

  subscribeToFriendStatus(friendId: number, cb: () => {}) {
    fetch('http://localhost:8081/api')
      .then(() => {
        console.log('emm')
      })
      .catch(() => {
        // ignore
        console.log('emmmm')
      })
      .finally(() => {
        if (this.stacks.has(friendId)) {
          this.stacks.get(friendId).add(cb)
          return
        }
        let set = new Set()
        set.add(cb)
        this.stacks.set(friendId, set)
      })
    console.log('subscribeToFriendStatus')
  },

  unsubscribeFromFriendStatus(friendId: number, cb: () => {}) {
    this.stacks.get(friendId).forEach((cb: any) => {
      cb(null)
    })
    console.log('unsubscribeFromFriendStatus')
  },

  up(friendId: number) {
    this.stacks.get(friendId).forEach((cb: any) => {
      cb({ isOnline: true })
    })
  },

  down(friendId: number) {
    this.stacks.get(friendId).forEach((cb: any) => {
      cb({ isOnline: false })
    })
  }
}
Object.defineProperty(window, 'friend', { value: friend })

export default friend
