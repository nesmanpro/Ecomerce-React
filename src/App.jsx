import React from 'react'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Carrito from './components/Carrito'

const App = () => {


  return (
    <>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/nosotros' element={<Nosotros />} />
          <Route exact path='/carrito' element={<Carrito />} />
          <Route exact path='/productos' element={<ItemListContainer />} />
          <Route exact path='/productos/:categoria' element={<ItemListContainer/>} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App 