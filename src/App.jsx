import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './styles/App.css'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import SuperMarket from './Components/SuperMarket/SuperMarket'

const App = () => {
  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {
    // setCash() will be useful here
  }
  
  return (
    <>
      <Nav cash={cash}/>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/burgers' element={<BurgerShop />} />
          <Route path='/market' element={<SuperMarket />}/>
        </Routes>
        <Landing />
      </main>
    </>
  )
}

export default App