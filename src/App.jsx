import { useState } from 'react'
import './App.css'
import ContextUse from './Store/Data'
import Home from './Home'

function App() {


  return (
    <>
      <ContextUse>
        <Home />
      </ContextUse>

    </>
  )
}

export default App
