import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  const greetings = 'Bienvenidos a mi E-Commerce'

  return (
    <>
      <NavBar/>

      <ItemListContainer greetings={greetings}/>
    </>
  )
}

export default App 