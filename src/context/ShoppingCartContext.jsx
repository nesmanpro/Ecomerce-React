import {useState, createContext, useEffect} from "react"

export const CartContext = createContext(null)

const startingCart = JSON.parse(localStorage.getItem('cart')) || [];

export const ShoppingCartProvider = ({ children }) => {

    const [ cart, setCart ] = useState(startingCart);
    const [ cantidad, setCantidad ] = useState(1)

    const cantidadCarrito = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0);
    } 

    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
        
    }

    const eliminarProducto = () => {
        setCart([])
    }

    

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))

    }, [cart])
    
    

    return (
        <CartContext.Provider value= { { cart, setCart, cantidad, setCantidad, cantidadCarrito, precioTotal, eliminarProducto} } >

            {children}

        </CartContext.Provider>
    )
}

export default ShoppingCartProvider
