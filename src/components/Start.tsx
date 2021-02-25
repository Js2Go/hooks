import React, { useEffect, useState } from 'react'

const Hook = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // console.log(count)
    document.title = `You clicked ${count} times`

    return () => {
      console.log('clear')
    }
  }, [])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Hook
