import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodos from './components/Addtodos'
import Todos from './components/Todos'

function App() {


  return (
    <>
    <Addtodos/>
    <Todos/>
    </>
  )
}

export default App
