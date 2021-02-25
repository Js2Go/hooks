import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useReducer, useRef, useState } from 'react'

const getForVal = () => {
  let sum = 0
  for (let i = 0; i < 1000000; i++) {
    sum += i
  }

  console.log(sum)
  return sum
}


interface IState {
  count?: number
  payload: number
}
interface IAction extends IState {
  type: string
}

function init(initialCount: number) {
  return { count: initialCount }
}

function reducer(state: IState, action: IAction) {
  switch(action.type) {
    case 'increment':
      return { count: state.count! + 1 }
    case 'decrement':
      return { count: state.count! - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

const Counter = ({ initialCount }: { initialCount: number }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init)

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}

function mul(a: number, b: number) {
  return a + b
}


let FancyInput = (props, ref) => {
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current!.focus()
    }
  }))

  return <input ref={inputRef} />
}
FancyInput = forwardRef(FancyInput)

const Api = () => {
  const [state, setState] = useState(() => {
    let initState = getForVal()
    return initState
  })

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const memoizedCb = useCallback(
    () => {
      mul(a, b)
    },
    [a,  b]
  )

  const memoizedVal = useMemo(
    () => mul(a, b),
    [a,  b]
  )

  console.log(memoizedCb)
  console.log(memoizedVal)

  const fRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <div>
        <span>count：{state}</span>
        <button onClick={() => setState(prev => prev + 1)}>+</button>
      </div>

      <Counter initialCount={0} />

      <FancyInput ref={fRef} />
      <button onClick={() => fRef.current!.focus()}>聚焦</button><br />
      <button onClick={() => setA(10)}>setA</button>
      <button onClick={() => setB(5)}>setB</button>
    </>
  )
}

export default Api
