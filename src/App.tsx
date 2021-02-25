import React from 'react'
import './App.css'
import Start from '@components/Start'
import Glance from './components/Glance'
import theme from '@contexts/theme'
import CustomHook from './components/CustomHook'
import Api from './components/Api'
import Hhhhh from './components/Hhhhh'

function App() {
  return (
    <theme.Provider value={{ color: '#ccc' }}>
      <div className="App">
        <Start />
        <Glance />
        <CustomHook />
        <Api />
        <Hhhhh />
      </div>
    </theme.Provider>
  )
}

export default App
