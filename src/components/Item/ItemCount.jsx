import { Button } from "@nextui-org/react";
import { useContext } from "react"
import { CartContext } from "../../context/ShoppingCartContext";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const ItemCount = ({ details }) => {


    const { cart, setCart, cantidad, setCantidad } = useContext(CartContext)



    // Aumenta o disminuye el contador de productos
    const increment = () => {
        cantidad < details.stock && setCantidad(cantidad + 1)
    }
    const decrement = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }




    // Agregar con spread operator productos y cantidad al carrito
    const handleAgregar = () => {
        const itemAgregado = { ...details, cantidad };

        const newCart = [...cart]
        const yaEstaEnCart = newCart.find((producto) => producto.id === itemAgregado.id);

        if (yaEstaEnCart) {
            yaEstaEnCart.cantidad += cantidad;
        } else {
            newCart.push(itemAgregado);
        }

        setCart(newCart);
        notify();
        setTimeout(() => {
            goTo('/productos');
        }, 2000);
    }
    const goTo = useNavigate()



    //Toastify
    const notify = () => toast.success(`${details.titulo} agregado!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

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
                <Button onClick={() => {
                    handleAgregar();
                }} color='danger' variant="shadow" radius="full" size="sm">Agregar al carrito
                </Button>
            </div>
        </div>
    )
}
