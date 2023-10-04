import {useState, createContext} from "react"

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);
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

    

    return (
        <CartContext.Provider value= { { cart, setCart, cantidad, setCantidad, cantidadCarrito, precioTotal, eliminarProducto } } >

            {children}

        </CartContext.Provider>
    )
}

export default ShoppingCartProvider
