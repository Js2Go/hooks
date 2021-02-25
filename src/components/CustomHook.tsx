import React, { useEffect, useReducer, useState } from 'react'

interface ITodoState {
  text: string
  completed?: boolean
}

interface ITodoAction extends ITodoState {
  type: string
}

function todosReducer(state: Array<ITodoState>, action: ITodoAction) {
  switch (action.type) {
    case 'add':
      return [{
        text: action.text,
        completed: true
      }, ...state]

    default:
      return state
  }
}

const CustomHook = () => {
  const [todos, dispatch] = useReducer(todosReducer, [])
  const [val, setVal] = useState('')

  function handleAddClick(text: string) {
    dispatch({ type: 'add', text })
    setVal('')
  }

  return (
    <>
      <input value={val} onInput={(e) => setVal(e.target.value)} />
      <button onClick={() => handleAddClick(val)}>添加一个</button>
      <ul>
        {
          todos.map((todo, index) => {
            if (todo.completed) {
              return (
                <del
                  key={index}
                  style={{color: todo.completed ? '#ccc' : 'green'}}
                >
                  <li>{ todo.text }</li>
                </del>
              )
            }
            return <li key={index} style={{color: todo.completed ? '#ccc' : 'green'}}>{ todo.text }</li>
          })
        }
      </ul>
    </>
  )
}

export default CustomHook
