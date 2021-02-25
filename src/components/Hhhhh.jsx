import React, { useState } from 'react'

// export default class Hhhhh extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: 0 }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render() {
//     return (
//       <>
//         <h2>{ this.state.count }</h2>
//         <button onClick={ this.handleClick }>+</button>
//       </>
//     )
//   }
// }

export default function Hhhhh() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  return (
    <>
      <h2>{ count }</h2>
      <button onClick={ handleClick }>+</button>
    </>
  )
}
