import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/Item/ItemListContainer'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Carrito from './components/carrito/Carrito'
import CartContext from './context/CartContext'
import { useState } from 'react'

const App = () => {

  const [ cart, setCart ] = useState([]);
  const [ cantidad, setCantidad ] = useState(1)



  return (
    <>
      <CartContext.Provider value={ {cart, setCart, cantidad, setCantidad} }>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/nosotros' element={<Nosotros />} />
          <Route exact path='/contacto' element={<Contacto />} />
          <Route exact path='/carrito' element={<Carrito />} />
          <Route exact path='/productos' element={<ItemListContainer />} />
          <Route exact path='/productos/:categoria' element={<ItemListContainer/>} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          
        </Routes>

      </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}

export default App 