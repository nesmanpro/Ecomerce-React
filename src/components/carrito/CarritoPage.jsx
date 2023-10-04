import React, { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'

const CarritoPage = () => {

    const { cart } = useContext(CartContext);
    
    return (
        <div>CarritoPage</div>
    )
}

export default CarritoPage