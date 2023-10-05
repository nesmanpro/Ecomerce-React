import {useState, createContext, useEffect} from "react"

export const CartContext = createContext(null)

// Revisa si hay en storage algun carrito, si no lo crea
const startingCart = JSON.parse(localStorage.getItem('cart')) || [];



export const ShoppingCartProvider = ({ children }) => {


    // Array de carrito de productos
    const [ cart, setCart ] = useState(startingCart);
    // Contador productos
    const [ cantidad, setCantidad ] = useState(1)


    // acumulador de numero productos totales
    const cantidadCarrito = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0);
    } 

    // Calcula precio total multiplicando cantidad por precio
    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
        
    }

    // Vacia el carrito
    const eliminarProducto = () => {
        setCart([])
    }

    // Use effect para que guarde el carrito en localstore cada vez que cambia cart
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))

    }, [cart])


    // Elimina Items uno por uno del carrito con boton trash
    const deleteCartItem = (e, cart_id) => {
        e.preventDefault();
        const updatedCart = cart.map(item => {
            if (item.id === cart_id) {

                if (item.cantidad > 1) {
                    return { ...item, cantidad: item.cantidad - 1 };
                }

                return null;

            }
            return item;
        }).filter(Boolean);
        setCart(updatedCart);
    };

    // Abre modal cada vez que agregas carrito
    const [ modal, setModal ] = useState(false);

    const toggleModal = ()=> {
        setModal(!modal)
    }




    return (
        <CartContext.Provider value= { { cart, setCart, cantidad, setCantidad, cantidadCarrito, precioTotal, eliminarProducto, deleteCartItem, toggleModal, modal} } >

            {children}

        </CartContext.Provider>
    )
}

export default ShoppingCartProvider
