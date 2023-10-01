import {useState, createContext} from "react"

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);
    const [ cantidad, setCantidad ] = useState(1)


    return (
        <CartContext.Provider value= { { cart, setCart, cantidad, setCantidad } } >

            {children}

        </CartContext.Provider>
    )
}

export default ShoppingCartProvider
