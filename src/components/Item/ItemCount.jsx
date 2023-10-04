import { Button } from "@nextui-org/react";
import { useContext } from "react"
import { CartContext } from "../../context/ShoppingCartContext";


export const ItemCount = ( { details } ) => {

    const { cart, setCart, cantidad, setCantidad } = useContext(CartContext)

    


    const increment = () => {
        cantidad < details.stock  && setCantidad(cantidad + 1)
        
    }
    const decrement = () => {
        cantidad > 1  && setCantidad(cantidad - 1)
    }

    
    const handleAgregar = () => {
        const itemAgregado = {...details, cantidad};

        const newCart = [...cart]
        const yaEstaEnCart = newCart .find((producto) => producto.id === itemAgregado.id);
        
        if(yaEstaEnCart){
            yaEstaEnCart.cantidad += cantidad;
            setCart(newCart)
        } else {
            setCart([...cart, itemAgregado])
        }
        
    }

    console.log(cart)


    return (
        <div className="flex items-center gap-4">
                <div className="flex items-center py-3 gap-5">
                    <div className="flex items-center">
                        <button onClick={decrement} className="p-0.5 text-white bg-slate-500 rounded-full rounded-bl-full">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                            </svg>

                        </button>
                        <p className="px-3 text-md text-slate-800 rounded-none">
                            {cantidad}
                        </p>
                        <button onClick={increment} className="p-0.5 text-white bg-slate-500 rounded-tr-full rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                    </div>
                    <Button onClick={ handleAgregar } color='danger' variant="shadow" radius="full" size="sm">Agregar al carrito
                    </Button>
                </div>
        </div>
    )
}